import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Comparison } from "@/components/comparison"
import { LogoMarquee } from "@/components/logo-marquee"
import Benefits from "@/components/benefits"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://theskitbit.com/#pricing",
    name: "Planes de Precios",
    description:
      "Planes de precios de Animación 3D - Paquetes Startup, Pro y Premium para todas las necesidades empresariales",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Servicios de Animación 3D",
      description: "Servicios profesionales de animación 3D con tres niveles de precios",
      offers: [
        {
          "@type": "Offer",
          name: "Plan Startup",
          price: "299",
          priceCurrency: "USD",
          description: "Animación 3D de hasta 15s con 2 revisiones",
        },
        {
          "@type": "Offer",
          name: "Plan Pro",
          price: "699",
          priceCurrency: "USD",
          description: "Animación 3D de hasta 25s con 4 revisiones",
        },
        {
          "@type": "Offer",
          name: "Plan Premium",
          price: "2049",
          priceCurrency: "USD",
          description: "Animación 3D de 40-60s con revisiones ilimitadas",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "Skitbit | Animación 3D Simple, Confiable y Escalable",
    description:
      "Desde lanzamientos de productos hasta campañas completas, Skitbit ofrece animación 3D rápida, consistente y diseñada para impresionar a tu audiencia.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Skitbit",
      url: "https://theskitbit.com",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Sección de Precios",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <Comparison />
        <LogoMarquee />
        <Benefits />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
