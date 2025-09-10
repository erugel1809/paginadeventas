"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "El error que cometen 7 de cada 10 negocios en internet",
  subtitle: "Descubre nuestro enfoque único para la animación 3D",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hidden md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">ESTADÍSTICAS REVELADORAS</p>
            <CardTitle className="mt-1 text-xl text-white">El problema que está matando tu negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-white/90">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-red-500 flex-shrink-0"></div>
                <p className="text-lg font-semibold leading-relaxed">
                  <span className="text-red-400">Redes sociales</span> = pierdes 40% de clientes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-yellow-500 flex-shrink-0"></div>
                <p className="text-lg font-semibold leading-relaxed">
                  <span className="text-yellow-400">Landing page</span> = convierte 15% – 30%
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/frustrated-business-owner-losing-customers-on-soci.jpg"
                  alt="Empresario perdiendo clientes en redes sociales"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/successful-landing-page-converting-visitors-to-cus.jpg"
                  alt="Landing page exitosa convirtiendo visitantes en clientes"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">EJEMPLO REAL</p>
            <CardTitle className="mt-1 text-xl text-white">
              María, odontóloga en Cuenca → antes: 2 consultas al mes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-yellow-300">5.0</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-yellow-300">
                Después de su landing: 15 consultas nuevas cada semana
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/professional-dental-office-with-modern-equipment-a.jpg"
                width={280}
                height={160}
                alt="Consultorio dental profesional con María, odontóloga"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src="/busy-dental-appointment-calendar-showing-increased.jpg"
                width={280}
                height={160}
                alt="Calendario de citas dentales lleno mostrando el aumento de consultas"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
