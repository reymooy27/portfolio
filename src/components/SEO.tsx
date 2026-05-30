import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  includeStructuredData?: boolean;
};

const BASE_URL = "https://webmindkupang.my.id";
const DEFAULT_TITLE = "Webminds Kupang — Jasa Pembuatan Website & Aplikasi di NTT";
const DEFAULT_DESC =
  "Webminds Kupang — partner teknologi terpercaya di Kupang, NTT. Layanan web development, mobile apps, UI/UX design, CMS, AI, dan automation untuk bisnis Anda.";
const DEFAULT_OG_IMAGE = "/logo.jpg";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Webminds Kupang",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.jpg`,
      description: "Jasa pembuatan website, aplikasi, dan solusi digital di Kupang, NTT.",
      foundingDate: "2023",
      founder: { "@type": "Person", name: "Rey" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-813-3804-7308",
        contactType: "sales",
        availableLanguage: ["Indonesian", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kupang",
        addressRegion: "Nusa Tenggara Timur",
        addressCountry: "ID",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Webminds Kupang",
      url: BASE_URL,
      telephone: "+62-813-3804-7308",
      description: "Partner teknologi terpercaya di Kupang, NTT — Web Development, Mobile Apps, UI/UX Design, AI, dan Automation.",
      image: `${BASE_URL}/logo.jpg`,
      areaServed: { "@type": "City", name: "Kupang" },
      priceRange: "Rp2.000.000 – Rp30.000.000",
      openingHours: "Mo-Fr 08:00-17:00",
    },
    {
      "@type": "WebSite",
      name: "Webminds Kupang",
      url: BASE_URL,
      description: "Jasa pembuatan website, mobile apps, UI/UX design, AI, dan automation.",
      inLanguage: "id",
    },
  ],
};

export default function SEO({
  title,
  description = DEFAULT_DESC,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  includeStructuredData = true,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | Webminds Kupang`
    : DEFAULT_TITLE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={ogUrl ?? BASE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl ?? BASE_URL} />
      <meta property="og:site_name" content="Webminds Kupang" />
      <meta property="og:locale" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {includeStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
