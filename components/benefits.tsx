"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const benefitImages = [
  {
    id: 1,
    src: "/copy-persuasivo-3d.jpg",
    alt: "Copy Persuasivo",
  },
  {
    id: 2,
    src: "/seo-optimizada-3d.jpg",
    alt: "SEO Optimizada",
  },
  {
    id: 3,
    src: "/carga-rapida-3d.jpg",
    alt: "Carga Rápida",
  },
  {
    id: 4,
    src: "/adaptado-a-movil-3d.jpg",
    alt: "Adaptado a Móvil",
  },
]

export default function Benefits() {
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

        <div className="flex justify-center items-center mb-16 w-full overflow-hidden">
          <div className="flex animate-scroll-benefits space-x-8">
            {benefitImages.map((image) => (
              <div key={image.id} className="flex-shrink-0">
                <div className="w-40 h-48 rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-lg hover:scale-110 transition-transform duration-300 hover:border-yellow-400/60 bg-black/20">
                  <div className="h-40 overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                      priority
                      loading="eager"
                      quality={90}
                      sizes="160px"
                    />
                  </div>
                  <div className="h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <span className="text-white text-sm font-semibold text-center px-2">{image.alt}</span>
                  </div>
                </div>
              </div>
            ))}
            {benefitImages.map((image) => (
              <div key={`duplicate-${image.id}`} className="flex-shrink-0">
                <div className="w-40 h-48 rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-lg hover:scale-110 transition-transform duration-300 hover:border-yellow-400/60 bg-black/20">
                  <div className="h-40 overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      quality={90}
                      sizes="160px"
                    />
                  </div>
                  <div className="h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <span className="text-white text-sm font-semibold text-center px-2">{image.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

      <style jsx>{`
        @keyframes scroll-benefits {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-benefits {
          animation: scroll-benefits 15s linear infinite;
        }
        
        .animate-scroll-benefits:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
