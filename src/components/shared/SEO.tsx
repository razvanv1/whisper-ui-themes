import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
}

const SITE = "https://www.unlearning.ro";
const BRAND = "The Unlearning School";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/IdBYduUEeXhnKxF1hWuwXOkQoAk1/social-images/social-1773006625171-IMG_6462.webp";

export default function SEO({ 
  title, 
  description, 
  path = "/", 
  type = "website",
  image = OG_IMAGE
}: SEOProps) {
  const fullTitle = path === "/" ? title : `${title} | ${BRAND}`;
  const url = `${SITE}${path}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BRAND,
    "url": SITE,
    "logo": "https://www.unlearning.ro/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/unlearning-school",
      "https://facebook.com/unlearningschool"
    ],
    "description": description
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (Schema.org) for AEO/GEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
