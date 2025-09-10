"use client"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "María González",
    designation: "Odontóloga - Cuenca",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    designation: "Restaurante El Sabor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    designation: "Boutique Fashion",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 4,
    name: "Roberto Silva",
    designation: "Gym Fitness Pro",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 5,
    name: "Lucía Herrera",
    designation: "Spa Relajación",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=128&q=80",
  },
  {
    id: 6,
    name: "Diego Morales",
    designation: "Consultoría Legal",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=128&q=80",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(5)

  useEffect(() => {
    testimonials.forEach((testimonial) => {
      const img = new window.Image()
      img.src = testimonial.image
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % testimonials.length
      items.push(testimonials[index])
    }
    return items
  }

  return (
    <section className="text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative text-center">
            <p className="mb-2 text-[11px] tracking-widest text-yellow-300">TESTIMONIOS REALES</p>
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl mb-4">
              Clientes que multiplicaron sus ventas con nuestras landing pages
            </h3>
            <p className="mt-2 max-w-2xl mx-auto text-sm text-neutral-400 mb-8">
              Conoce las historias de éxito de empresarios que confiaron en SolutecStore para crear páginas de ventas
              altamente efectivas
            </p>

            <div className="flex justify-center items-center mb-10 w-full overflow-hidden">
              <div className="flex space-x-4 transition-transform duration-500 ease-in-out">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div key={`${testimonial.id}-${currentIndex}-${index}`} className="flex-shrink-0 relative group">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400/50 shadow-lg transform transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                        quality={85}
                        sizes="64px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-yellow-300 mb-2">"De 2 consultas al mes a 15 por semana"</p>
              <p className="text-sm text-neutral-400">
                Promedio de crecimiento de nuestros clientes en los primeros 30 días
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
