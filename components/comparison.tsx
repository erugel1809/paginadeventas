"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { Plasma } from "@/components/plasma"

export function Comparison() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 0, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    "Captar leads y generar ventas inmediatas",
    "15% - 30% de visitantes se convierten en clientes",
    "5 días hábiles",
    "< 2 segundos (optimizada)",
    "Un solo objetivo → vender",
    "Clientes desde la primera semana",
  ]

  const disadvantages = [
    "Informar / presencia online",
    "1% - 3% en promedio",
    "3 - 6 semanas",
    "5 - 8 segundos (promedio)",
    "Varios menús, el usuario se dispersa",
    "Resultados lentos, a largo plazo",
  ]

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background with plasma effect */}
      <div className="absolute inset-0">
        <Plasma />
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-600/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/20 rounded-full blur-2xl animate-bounce" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">¿Por qué elegir nuestra</h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">PÁGINA DE VENTAS</h3>
          <p className="text-xl sm:text-2xl text-gray-300">y no una página web tradicional?</p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Benefits Column */}
          <div className="space-y-6">
            <div className="bg-green-500/20 rounded-xl p-6 border border-green-500/40">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 mb-4 last:mb-0">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Phone Image */}
          <div className="flex justify-center">
            <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/web-store-tecnologico-guayaquil.jpg"
                  alt="Web Store tecnológico en Guayaquil - Ejemplo de página de ventas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Disadvantages Column */}
          <div className="space-y-6">
            <div className="bg-red-500/20 rounded-xl p-6 border border-red-500/40">
              {disadvantages.map((disadvantage, index) => (
                <div key={index} className="flex items-start gap-3 mb-4 last:mb-0">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white text-lg font-medium">{disadvantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-200">
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

        {/* Limited Time Offer */}
        <div className="bg-red-600 border border-red-500/50 text-white py-4 px-8 rounded-xl text-center shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-xl font-bold">OFERTA POR TIEMPO LIMITADO</span>
            <span className="text-lg">Se acaba en</span>
            <div className="flex gap-2 text-2xl font-mono font-bold">
              <span className="bg-black px-3 py-1 rounded border border-white/20">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-black px-3 py-1 rounded border border-white/20">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="bg-black px-3 py-1 rounded border border-white/20">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
