import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

export default function Seo({
  title,
  description,
  canonical,
  image,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      {image && (
        <meta
          property="og:image"
          content={image}
        />
      )}

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}
    </Helmet>
  );
}