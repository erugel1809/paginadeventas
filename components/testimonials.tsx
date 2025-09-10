"use client"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

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
  return (
    <section className="text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="relative text-center">
          <p className="mb-2 text-[11px] tracking-widest text-yellow-300">TESTIMONIOS REALES</p>
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl mb-4">
            Clientes que multiplicaron sus ventas con nuestras landing pages
          </h3>
          <p className="mt-2 max-w-2xl mx-auto text-sm text-neutral-400 mb-8">
            Conoce las historias de éxito de empresarios que confiaron en SolutecStore para crear páginas de ventas
            altamente efectivas
          </p>

          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={testimonials} />
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-yellow-300 mb-2">"De 2 consultas al mes a 15 por semana"</p>
            <p className="text-sm text-neutral-400">
              Promedio de crecimiento de nuestros clientes en los primeros 30 días
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
