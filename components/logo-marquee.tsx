"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  // Logo data with colors and content
  const logos = [
    { name: "ChatGPT", image: "/chatgpt-real.png", color: "text-green-400" },
    { name: "Gemini", image: "/gemini-real.webp", color: "text-blue-400" },
    { name: "Leonardo", image: "/leonardo-ai-real.jpg", color: "text-orange-400" },
    { name: "Triangle AI", image: "/triangle-ai-logo.png", color: "text-purple-400" },
    { name: "Claude", image: "/anthropic-claude-ai-logo.jpg", color: "text-purple-400" },
    { name: "Leonardo AI", image: "/leonardo-ai-midjourney-replacement.jpg", color: "text-pink-400" },
    { name: "Runway", image: "/runway-ml-ai-logo.jpg", color: "text-cyan-400" },
    { name: "InVideo", image: "/invideo-ai-logo.jpg", color: "text-yellow-400" },
  ]

  const secondRowLogos = [
    { name: "DALL-E", image: "/dall-e-openai-logo.jpg", color: "text-indigo-400" },
    { name: "Stable Diffusion", image: "/stable-diffusion-ai-logo.jpg", color: "text-violet-400" },
    { name: "Perplexity", image: "/perplexity-ai-logo.png", color: "text-teal-400" },
    { name: "GitHub Copilot", image: "/github-copilot-logo.png", color: "text-blue-300" },
    { name: "Jasper", image: "/abstract-ai-logo.png", color: "text-green-300" },
    { name: "Copy.ai", image: "/copy-ai-logo.png", color: "text-orange-300" },
    { name: "Synthesia", image: "/synthesia-ai-logo.jpg", color: "text-red-300" },
    { name: "Luma AI", image: "/luma-ai-logo.jpg", color: "text-purple-300" },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        <div className="relative w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12">
          <Image
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            fill
            className="object-contain opacity-90"
            sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-2">
              Optimizada con <span className="text-yellow-400 animate-pulse">Inteligencia Artificial</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              Utilizamos las mejores herramientas de IA para crear landing pages que convierten más
            </p>
          </div>
          <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            Ver Tecnologías
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
