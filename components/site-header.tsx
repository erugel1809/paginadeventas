"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Briefcase, Tag, HelpCircle, FileText, Info } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Inicio", icon: Briefcase },
    { href: "#pricing", label: "Precios", icon: Tag },
    { href: "faq", label: "FAQ", icon: HelpCircle },
    { href: "#blog", label: "Blog", icon: FileText },
    { href: "About", label: "Acerca de", icon: Info },
  ]

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

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-yellow-300 transition-colors font-medium">
                {l.label}
              </Link>
            ))}
          </nav>

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
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-xl border-white/20 p-0 w-64 flex flex-col"
              >
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-white/20">
                  <Image
                    src="/images/solutecstore-logo-new.png"
                    alt="Logo de SolutecStore"
                    width={140}
                    height={36}
                    className="h-9 w-auto"
                  />
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-white">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 hover:text-yellow-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-white/70">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-white/20 p-4">
                  <Button
                    asChild
                    className="w-full bg-yellow-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-yellow-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    <a href="https://wa.me/593986139278" target="_blank" rel="noopener noreferrer">
                      Obtener Cotización
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
