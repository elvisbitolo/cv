import { notFound } from "next/navigation";
import ServiceLanding from "@/components/service-landing";
import {
  SITE_URL,
  getServicePage,
  servicePages
} from "@/lib/service-pages";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }) {
  const page = getServicePage(params.slug);

  if (!page) {
    return {};
  }

  const url = `${SITE_URL}/services/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,

    alternates: {
      canonical: `/services/${page.slug}`
    },

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: "Elvis Bitolo Khanyanga",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Elvis Bitolo Khanyanga"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/images/og-image.jpg"]
    }
  };
}

export default function ServiceLandingPage({ params }) {
  const page = getServicePage(params.slug);

  if (!page) {
    notFound();
  }

  return <ServiceLanding page={page} />;
}
