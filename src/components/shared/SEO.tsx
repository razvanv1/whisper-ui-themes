import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE = "https://www.unlearning.ro";
const BRAND = "The Unlearning School";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/IdBYduUEeXhnKxF1hWuwXOkQoAk1/social-images/social-1773006625171-IMG_6462.webp";

export default function SEO({ title, description, path = "/" }: SEOProps) {
  const fullTitle = path === "/" ? title : `${title} - ${BRAND}`;
  const url = `${SITE}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
