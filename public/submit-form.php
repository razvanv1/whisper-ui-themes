<?php
// submit-form.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    // Handle CORS preflight
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON payload"]);
    exit();
}

// Config - RECOMMENDED: Use environment variables for API keys
$apiKey = getenv('BREVO_API_KEY') ?: "YOUR_API_KEY_HERE"; // Replace with actual key if not using env vars
$toEmail = "hello@unlearning.ro"; // Replace with actual destination

// Determine Form Type
$formType = isset($data['formType']) ? $data['formType'] : 'contact';

if ($formType === 'newsletter') {
    // Newsletter Subscription Payload
    $subscriberEmail = htmlspecialchars($data['email'] ?? 'N/A');
    $subscriberName = htmlspecialchars($data['name'] ?? 'Newsletter Subscriber');
    $subject = "New Newsletter Subscriber (The Unlearning Pill): " . $subscriberEmail;
    $htmlContent = "<h2>New Subscriber for The Unlearning Pill</h2>";
    $htmlContent .= "<p><strong>Name:</strong> " . $subscriberName . "</p>";
    $htmlContent .= "<p><strong>Email:</strong> " . $subscriberEmail . "</p>";
    $htmlContent .= "<p><em>This user has agreed to the privacy policy and newsletter terms.</em></p>";
    $senderName = 'Newsletter Form';
    $replyToEmail = $subscriberEmail;
    $replyToName = $subscriberName;
} elseif ($formType === 'ink_scan') {
    // Ink Scan Capture
    $subscriberEmail = htmlspecialchars($data['email'] ?? 'N/A');
    $subject = "INK Free Scan - Email Captured: " . $subscriberEmail;
    $htmlContent = "<h2>INK Scan Opportunity Wall Capture</h2>";
    $htmlContent .= "<p>A user reached the results wall and entered their email to see more matches.</p>";
    $htmlContent .= "<p><strong>Email:</strong> " . $subscriberEmail . "</p>";
    $senderName = 'INK Scan Form';
    $replyToEmail = $subscriberEmail;
    $replyToName = 'Potential Client';
} elseif ($formType === 'ink_trial') {
    // Ink Trial Request
    $subscriberEmail = htmlspecialchars($data['email'] ?? 'N/A');
    $subscriberName = htmlspecialchars($data['name'] ?? 'N/A');
    $subject = "INK Trial Request: " . $subscriberEmail;
    $htmlContent = "<h2>New INK Trial / Early Access Request</h2>";
    $htmlContent .= "<p><strong>Name:</strong> " . $subscriberName . "</p>";
    $htmlContent .= "<p><strong>Email:</strong> " . $subscriberEmail . "</p>";
    $htmlContent .= "<p><strong>Confidentiality Accepted:</strong> " . ($data['acceptConfidentiality'] ? 'Yes' : 'No') . "</p>";
    $htmlContent .= "<p><strong>Newsletter Accepted:</strong> " . ($data['acceptNewsletter'] ? 'Yes' : 'No') . "</p>";
    $htmlContent .= "<p><em>User requested access via the final CTA on the INK page.</em></p>";
    $senderName = 'INK Trial Form';
    $replyToEmail = $subscriberEmail;
    $replyToName = $subscriberName;
} else {
    // Standard Contact Form Payload
    $subject = "New Contact Form Submission - " . htmlspecialchars($data['name'] ?? 'Unknown Sender');
    $htmlContent = "<h2>New Contact Form Submission (The Unlearning School)</h2>";
    $htmlContent .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name'] ?? 'N/A') . "</p>";
    $htmlContent .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email'] ?? 'N/A') . "</p>";
    $htmlContent .= "<p><strong>Organization / Website:</strong> " . htmlspecialchars($data['organization'] ?? 'N/A') . "</p>";
    $htmlContent .= "<h3>Current Bottleneck:</h3><p>" . nl2br(htmlspecialchars($data['bottleneck'] ?? 'N/A')) . "</p>";
    $htmlContent .= "<h3>Focus for next 30-90 days:</h3><p>" . nl2br(htmlspecialchars($data['next90'] ?? 'N/A')) . "</p>";
    $htmlContent .= "<p><strong>Closest Area:</strong> " . htmlspecialchars($data['area'] ?? 'N/A') . "</p>";
    $htmlContent .= "<p><strong>Confidentiality Accepted:</strong> " . ($data['acceptConfidentiality'] ? 'Yes' : 'No') . "</p>";
    $htmlContent .= "<p><strong>Newsletter Accepted:</strong> " . ($data['acceptNewsletter'] ? 'Yes' : 'No') . "</p>";
    $senderName = htmlspecialchars($data['name'] ?? 'Website Form');
    $replyToEmail = htmlspecialchars($data['email'] ?? '');
    $replyToName = htmlspecialchars($data['name'] ?? '');
}

// Brevo API Request Payload
$payload = [
    "sender" => [
        "name" => $senderName,
        "email" => $toEmail // Best practice: send from an authenticated domain email you own, replyTo is the user
    ],
    "to" => [
        [
            "email" => $toEmail,
            "name" => "Unlearning Team"
        ]
    ],
    "replyTo" => [
        "email" => $replyToEmail,
        "name" => $replyToName
    ],
    "subject" => $subject,
    "htmlContent" => $htmlContent
];

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept: application/json',
    'Content-Type: application/json',
    'api-key: ' . $apiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "CURL Error: " . $curlError]);
} elseif ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    http_response_code($httpCode ?: 500);
    echo json_encode(["status" => "error", "message" => "Failed to send email", "httpCode" => $httpCode, "details" => json_decode($response, true) ?: $response]);
}
?>