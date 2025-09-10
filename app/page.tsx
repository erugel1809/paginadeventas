import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Comparison } from "@/components/comparison"
import { LogoMarquee } from "@/components/logo-marquee"
import Benefits from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://solutecstore.com/#pricing",
    name: "Precios de Landing Pages",
    description: "Landing pages altamente efectivas desde $125 - Optimizadas para conversión y móviles",
    url: "https://solutecstore.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Servicios de Landing Pages",
      description: "Páginas de ventas profesionales optimizadas con inteligencia artificial",
      offers: [
        {
          "@type": "Offer",
          name: "Landing Page Profesional",
          price: "125",
          priceCurrency: "USD",
          description: "Landing page completa con diseño personalizado, optimización móvil y conexión WhatsApp",
        },
      ],
    },
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://solutecstore.com/",
    name: "SolutecStore | Páginas de Ventas Altamente Efectivas para Vender Más",
    description:
      "Diseñamos landings rápidas, persuasivas y listas para captar clientes desde el primer día. Optimizadas con inteligencia artificial.",
    url: "https://solutecstore.com/",
    mainEntity: {
      "@type": "Organization",
      name: "SolutecStore",
      url: "https://solutecstore.com",
    },
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
        <Testimonials />
        <FAQ />
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
