"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { CheckCircle2 } from "lucide-react"

const BenefitContent = ({ title, description, stats }: { title: string; description: string; stats: string }) => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4 border border-yellow-400/20">
      <div className="flex items-start gap-4 mb-6">
        <CheckCircle2 className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">{description}</p>
          <div className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/20">
            <p className="text-yellow-400 font-semibold text-lg">{stats}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Benefits() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <section id="pricing" className="text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: "rgba(251,191,36,0.12)", color: "#fbbf24" }}
          >
            Nuestros Beneficios
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-balance">
            ¿Por qué elegir nuestras <span className="text-yellow-400">páginas de ventas</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400">
            Descubre las ventajas que te harán convertir más visitantes en clientes reales.
          </p>
        </div>

        <Carousel items={cards} />
      </div>
    </section>
  )
}

const data = [
  {
    category: "Velocidad",
    title: "Carga Ultra Rápida",
    src: "/fast-loading-website-speed-optimization.jpg",
    content: (
      <BenefitContent
        title="Landings que cargan en menos de 2 segundos"
        description="La velocidad es crucial para el éxito online. Nuestras páginas están optimizadas para cargar instantáneamente, manteniendo a tus visitantes comprometidos desde el primer momento."
        stats="Pierdes 53% de usuarios si tu página tarda más de 3 segundos en cargar"
      />
    ),
  },
  {
    category: "Móvil",
    title: "Optimización Móvil",
    src: "/mobile-responsive-design-smartphone-optimization.jpg",
    content: (
      <BenefitContent
        title="Diseño 100% responsive y móvil-first"
        description="Todas nuestras páginas están diseñadas pensando primero en dispositivos móviles, garantizando una experiencia perfecta en cualquier pantalla."
        stats="El 85% de tus clientes potenciales entra desde su celular"
      />
    ),
  },
  {
    category: "Conversión",
    title: "Copy Persuasivo",
    src: "/persuasive-copywriting-sales-conversion.jpg",
    content: (
      <BenefitContent
        title="Textos que venden y persuaden"
        description="Utilizamos técnicas de copywriting probadas y psicología del consumidor para crear mensajes que conecten emocionalmente con tu audiencia y los motiven a actuar."
        stats="Hasta 3x más leads que con una web común"
      />
    ),
  },
  {
    category: "WhatsApp",
    title: "Integración WhatsApp",
    src: "/whatsapp-integration-business-communication.jpg",
    content: (
      <BenefitContent
        title="Conexión directa con WhatsApp Business"
        description="Facilitamos el contacto inmediato con tus clientes potenciales a través de WhatsApp, el canal de comunicación preferido en Latinoamérica."
        stats="Aumenta la tasa de contacto en 60% comparado con formularios tradicionales"
      />
    ),
  },
]
