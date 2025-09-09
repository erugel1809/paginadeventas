"use client"
import { ThreeDMarquee } from "@/components/ui/3d-marquee"

export default function ThreeDMarqueeDemo() {
  const images = [
    "/cargo-ocean-website.png",
    "/adn-global-website.png",
    "/surman-website.jpeg",
    "/endocrinology-website.png",
    "/masuq-website.png",
    "/construction-website.png",
    "/cargo-ocean-website.png",
    "/adn-global-website.png",
    "/surman-website.jpeg",
    "/endocrinology-website.png",
    "/masuq-website.png",
    "/construction-website.png",
    "/cargo-ocean-website.png",
    "/adn-global-website.png",
    "/surman-website.jpeg",
    "/endocrinology-website.png",
    "/masuq-website.png",
    "/construction-website.png",
    "/cargo-ocean-website.png",
    "/adn-global-website.png",
    "/surman-website.jpeg",
    "/endocrinology-website.png",
    "/masuq-website.png",
    "/construction-website.png",
    "/cargo-ocean-website.png",
    "/adn-global-website.png",
    "/surman-website.jpeg",
    "/endocrinology-website.png",
    "/masuq-website.png",
    "/construction-website.png",
  ]
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  )
}
