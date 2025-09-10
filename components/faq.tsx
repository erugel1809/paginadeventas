"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma crear mi landing page?",
    answer:
      "Entregamos tu landing page completamente funcional en 5 días hábiles. Esto incluye diseño, desarrollo, optimización móvil y conexión con WhatsApp.",
  },
  {
    question: "¿La landing page funcionará en celulares?",
    answer:
      "Sí, todas nuestras landing pages están 100% optimizadas para móviles. El 85% de tus clientes entrará desde celular, por eso nos aseguramos de que la experiencia sea perfecta en cualquier dispositivo.",
  },
  {
    question: "¿Qué incluye el precio de $125?",
    answer:
      "Incluye diseño personalizado, desarrollo completo, optimización de velocidad, conexión a WhatsApp, hosting por 1 año, certificado SSL, y soporte técnico durante 30 días.",
  },
  {
    question: "¿Puedo hacer cambios después de la entrega?",
    answer:
      "Sí, incluimos 2 rondas de revisiones sin costo adicional. Después de eso, los cambios menores tienen un costo de $25 y los cambios mayores desde $50.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No necesitas saber nada de programación. Nosotros nos encargamos de todo: diseño, desarrollo, configuración y puesta en marcha. Solo necesitas enviarnos tu contenido y logo.",
  },
  {
    question: "¿Qué pasa si no estoy satisfecho?",
    answer:
      "Ofrecemos garantía de satisfacción. Si no estás conforme con el resultado, trabajamos contigo hasta que quedes 100% satisfecho o te devolvemos tu dinero.",
  },
]

export function FAQ() {
  return (
    <footer className="border-t border-white/10 pb-20 md:pb-10 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl mb-4">Preguntas Frecuentes</h2>
            <p className="text-sm text-gray-200">Resolvemos las dudas más comunes sobre nuestras landing pages</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/20 rounded-lg px-4 liquid-glass"
              >
                <AccordionTrigger className="text-left text-white hover:text-yellow-300 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-300">
              © 2025 — SolutecStore. Páginas de ventas altamente efectivas para vender más.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
