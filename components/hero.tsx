import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-yellow-400 px-6 text-black hover:bg-yellow-300">
      <a href="https://ppls.me/PXsZOccMGdDrqleGJxng" target="_blank" rel="noopener noreferrer">
        Quiero mi Landing Ahora
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-8 sm:py-12">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">PÁGINAS DE VENTAS</span>
            <span className="block text-yellow-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]">
              ALTAMENTE EFECTIVAS
            </span>
            <span className="block">PARA VENDER MÁS</span>
          </h1>

          <p className="mt-6 text-center text-lg text-gray-300 max-w-2xl leading-relaxed">
            Diseñamos landings rápidas, persuasivas y listas para captar clientes desde el primer día.
          </p>

          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-gray-400 line-through text-xl">$175</div>
              <div className="text-4xl font-bold text-yellow-400 animate-pulse">$125</div>
              <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                ¡OFERTA!
              </div>
            </div>
            <p className="text-yellow-300 text-sm font-semibold mb-4">
              🔥 ¡Ahorra $50! Precio especial por tiempo limitado
            </p>
          </div>

          <div className="mt-2">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  videoSrc,
}: {
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label="Video demo"
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    videoSrc: "https://solutecstore.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-09-at-19.33.53_01ef1ec8.mp4",
  },
  {
    videoSrc: "https://solutecstore.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-09-at-19.43.42_a71e7fe3.mp4",
  },
  {
    videoSrc: "https://solutecstore.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-09-at-19.34.18_a21902e7.mp4",
  },
  {
    videoSrc: "https://solutecstore.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-09-at-19.30.23_6a505aab.mp4",
  },
  {
    videoSrc: "https://solutecstore.com/wp-content/uploads/2025/09/WhatsApp-Video-2025-09-09-at-19.33.28_a9e0d7c7.mp4",
  },
]
