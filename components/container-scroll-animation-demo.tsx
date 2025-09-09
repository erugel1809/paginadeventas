"use client"
import { useState, useEffect } from "react"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo"

export default function HeroScrollDemo() {
  const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          hours = 1
          minutes = 0
          seconds = 0
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-black relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/1 via-amber-500/1 to-yellow-400/1"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/2 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen px-4 lg:px-8 relative z-10">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-600 leading-tight drop-shadow-lg">
              Páginas de ventas
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
              Landing altamente <br />
              <span className="text-yellow-600">efectivas</span>
            </h2>
            <p className="text-white text-base md:text-lg max-w-md leading-relaxed drop-shadow-lg">
              Recibe 20 a 40 nuevos clientes potenciales al mes con una sola landing optimizada.
            </p>

            {/* Pricing Banner */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl px-6 py-4 shadow-2xl max-w-sm">
              <div className="flex items-center justify-between text-black">
                <div className="flex-1">
                  <p className="text-sm font-semibold">Lleva tu página de ventas</p>
                </div>
                <div className="text-center mx-4">
                  <span className="text-3xl font-bold">$125</span>
                </div>
                <div className="text-right text-xs">
                  <p>+ Hosting y</p>
                  <p>Dominio</p>
                  <p className="font-semibold">por año</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/593986139278?text=Hola,%20quiero%20mi%20página%20de%20ventas%20ahora.%20Me%20interesa%20el%20paquete%20de%20$125%20con%20hosting%20y%20dominio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-base px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-500/50 max-w-sm inline-block text-center"
            >
              QUIERO MI PÁGINA AHORA
            </a>
          </div>

          {/* Right Column - Laptop with Scroll Animation */}
          <div className="flex justify-center items-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/15 rounded-full blur-2xl animate-pulse delay-700"></div>

            <ContainerScroll titleComponent={<></>}>
              <img
                src={`/ai-robot-design.png`}
                alt="Diseño Web con Inteligencia Artificial - AI Robot Design"
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            </ContainerScroll>

            {/* Timer in bottom right */}
            <div className="absolute bottom-6 right-6 text-center bg-black/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-red-500/30 shadow-2xl z-20">
              <p className="text-white text-xs font-semibold mb-1 tracking-wider">OFERTA TERMINA EN</p>
              <div className="text-red-500 text-2xl font-bold font-mono tracking-wider animate-pulse">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-4 text-center shadow-2xl">
          <span className="font-bold text-sm md:text-base">
            OFERTA POR TIEMPO LIMITADO Se acaba en{" "}
            <span className="font-mono text-lg">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </span>
        </div>
      </div>

      <div className="bg-black py-20 relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/3 via-amber-500/3 to-yellow-400/3"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              ¿Por qué elegir nuestra <span className="text-yellow-400">PÁGINA DE VENTAS</span>
              <br />y no una página web tradicional?
            </h2>
          </div>

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - Benefits */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">Captar leads y generar ventas inmediatas</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">15% - 30% de visitantes se convierten en clientes</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">5 días hábiles</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">{"< 2 segundos (optimizada)"}</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">Un solo objetivo → vender</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">Clientes desde la primera semana</p>
              </div>
            </div>

            {/* Center Column - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/tech-store-updated.jpeg"
                      alt="Technology Store Landing Page Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Disadvantages */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">Informar / presencia online</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">1% - 3% en promedio</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">3 - 6 semanas</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">Varios menús, el usuario se dispersa</p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm md:text-base">Resultados lentos, a largo plazo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20 relative">
          {/* Background effects for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Nuestros Trabajos</h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Páginas web profesionales que generan resultados reales para nuestros clientes
            </p>
          </div>
          <div className="relative z-10">
            <ThreeDMarqueeDemo />
          </div>
        </div>

        <div className="bg-black py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-amber-500/8 to-yellow-400/5"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/8 rounded-full blur-2xl animate-pulse delay-500"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block">
                <p className="text-yellow-400/80 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
                  Beneficios principales
                </p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 mb-4 leading-tight">
                  Página de ventas
                </h2>
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-16"></div>
                  <p className="text-white/90 text-lg md:text-xl font-light">Fácil y rápido</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-16"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Floating animation container */}
                  <div className="animate-float">
                    {/* First Phone */}
                    <div className="w-52 h-96 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-3xl p-3 shadow-2xl transform rotate-12 z-20 relative border border-gray-700/50">
                      <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-inner">
                        <img
                          src="/tech-store-updated.jpeg"
                          alt="Technology Store Mobile Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Phone highlight effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-transparent to-transparent rounded-3xl"></div>
                    </div>
                  </div>

                  {/* Second Phone with different animation delay */}
                  <div className="animate-float-delayed">
                    <div className="w-52 h-96 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-3xl p-3 shadow-2xl transform -rotate-6 absolute top-12 -left-20 z-10 border border-gray-700/50">
                      <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-inner">
                        <img
                          src="/tech-store-website.png"
                          alt="Technology Store Mobile Preview 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Phone highlight effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-transparent to-transparent rounded-3xl"></div>
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-4 -right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 -left-8 w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Benefit 1 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black shadow-2xl transform group-hover:scale-105 transition-all duration-300 border border-yellow-300/50">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl mb-2">Más conversiones</h3>
                        <p className="font-medium text-sm md:text-base opacity-90">con menos visitas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black shadow-2xl transform group-hover:scale-105 transition-all duration-300 border border-yellow-300/50">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl mb-2">Diseños rápidos</h3>
                        <p className="font-medium text-sm md:text-base opacity-90">optimizados para móviles</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black shadow-2xl transform group-hover:scale-105 transition-all duration-300 border border-yellow-300/50">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg md:text-xl mb-2">Textos persuasivos</h3>
                        <p className="font-medium text-sm md:text-base opacity-90">con inteligencia artificial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <a
                  href="https://wa.me/593986139278?text=Hola,%20quiero%20mi%20página%20de%20ventas%20ahora.%20Me%20interesa%20el%20paquete%20de%20$125%20con%20hosting%20y%20dominio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl px-16 py-8 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-all duration-300 inline-block border-2 border-yellow-300/50 group-hover:border-yellow-200"
                >
                  <span className="flex items-center space-x-3">
                    <span>QUIERO MI PÁGINA AHORA</span>
                    <svg
                      className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-20 relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/3 via-amber-500/3 to-yellow-400/3"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">70%</div>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  de las campañas de anuncios fracasan por no tener una landing enfocada en vender
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">40%</div>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Empresas que usan solo redes sociales pierden hasta un de clientes potenciales porque no tienen un
                  punto de conversión
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-900/80 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 text-center hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">50%</div>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Una landing bien estructurada puede reducir el costo por lead en un 50%
                </p>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                Promociona tu negocio de manera efectiva
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
