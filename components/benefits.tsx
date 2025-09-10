"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const BenefitContent = ({ title, description, stats }: { title: string; description: string; stats: string }) => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4 border border-yellow-400/20 transform transition-all duration-300 hover:scale-105 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/20">
      <div className="flex items-start gap-4 mb-6">
        <CheckCircle2 className="h-8 w-8 text-yellow-400 mt-1 flex-shrink-0 animate-pulse" />
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">{description}</p>
          <div className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/20 transition-all duration-300 hover:bg-yellow-400/20 hover:border-yellow-400/40">
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
    <section id="pricing" className="text-white py-16 sm:py-20 animate-in fade-in duration-1000">
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

        <div className="text-center mt-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-2xl">
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                ¡OFERTA!
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-gray-400 line-through text-lg">$175</div>
                  <div className="text-yellow-400 text-4xl font-bold">$125</div>
                </div>
                <div className="text-white">
                  <div className="text-sm opacity-80">Ahorras</div>
                  <div className="text-green-400 text-2xl font-bold">$50</div>
                </div>
              </div>
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm animate-bounce">
                ¡Solo hoy!
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open("https://ppls.me/PXsZOccMGdDrqleGJxng", "_blank")}
          >
            QUIERO MI PÁGINA AHORA
          </Button>
        </div>
      </div>
    </section>
  )
}

const data = [
  {
    category: "Velocidad",
    title: "Carga Ultra Rápida",
    src: "/fast-loading-astronaut-rocket.jpg",
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
    src: "/mobile-friendly-3d-phone.jpg",
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
    src: "/persuasive-copywriting-3d.jpg",
    content: (
      <BenefitContent
        title="Textos que venden y persuaden"
        description="Utilizamos técnicas de copywriting probadas y psicología del consumidor para crear mensajes que conecten emocionalmente con tu audiencia y los motiven a actuar."
        stats="Hasta 3x más leads que con una web común"
      />
    ),
  },
  {
    category: "SEO",
    title: "Optimización SEO",
    src: "/seo-3d-illustration.jpg",
    content: (
      <BenefitContent
        title="Posicionamiento en Google garantizado"
        description="Implementamos las mejores prácticas de SEO para que tu página aparezca en los primeros resultados de búsqueda y atraigas tráfico orgánico de calidad."
        stats="75% más visibilidad en Google comparado con páginas no optimizadas"
      />
    ),
  },
]
