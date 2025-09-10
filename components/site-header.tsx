"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/images/solutecstore-logo-new.png"
              alt="Logo de SolutecStore"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-yellow-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-yellow-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <a href="https://wa.me/593986139278" target="_blank" rel="noopener noreferrer">
                Chatea Con Nosotros
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Button
              asChild
              className="bg-yellow-400 text-black font-medium rounded-lg px-4 py-2
                         hover:bg-yellow-300 hover:shadow-md hover:scale-[1.02]
                         transition-all text-sm"
            >
              <a href="https://wa.me/593986139278" target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
