import { Sparkles, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import { PRODUCTS, CONTACTS } from '../data/korporestData'
import Reveal from './Reveal'

const PRODUCT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers: (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
  Bandage: (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M2 12s3-7 10-7 10 7 10 7" />
      <path d="M5 9.5c2-1.5 4-2.5 7-2.5s5 1 7 2.5" />
      <circle cx="12" cy="13" r="1.5" />
      <circle cx="9" cy="11" r="1" />
      <circle cx="15" cy="11" r="1" />
    </svg>
  ),
  Hand: (props: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
}

export default function Products() {
  const handleConsultProduct = (waMessage: string) => {
    const waNumber = CONTACTS[0].waNumber
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="productos" className="py-24 sm:py-28 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-50 border border-blush-100">
              <Sparkles className="w-3.5 h-3.5 text-coral-400" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-coral-500">
                Insumos y Accesorios
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-carbon-900 tracking-tight">
              Productos e Insumos Especializados
            </h2>

            <p className="text-base sm:text-lg text-carbon-700/65 leading-[1.7]">
              Ponemos a disposición elementos terapéuticos esenciales para el tratamiento compresivo, soporte articular y cuidados clínicos en el consultorio o domicilio.
            </p>
          </div>
        </Reveal>

        {/* Products Grid — Boutique catalog */}
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => {
            const ProductIcon = PRODUCT_ICONS[product.icon] || PRODUCT_ICONS.Layers

            return (
              <Reveal key={product.id} delay={i * 120}>
                <div className="group relative bg-white rounded-2xl border border-sand-200/40 hover:border-coral-200 shadow-sm hover:shadow-2xl hover:shadow-coral-400/8 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
                  {/* Top accent strip */}
                  <div className="h-1 bg-gradient-to-r from-coral-300 via-coral-400 to-sand-300" />

                  <div className="p-7 sm:p-8 flex-1 flex flex-col">
                    {/* Category pill & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-coral-500 bg-blush-50 px-3 py-1.5 rounded-full border border-blush-100">
                        {product.subtitle}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-blush-50 text-coral-400 flex items-center justify-center group-hover:bg-coral-400 group-hover:text-white transition-all duration-500 border border-blush-100">
                        <ProductIcon className="w-5.5 h-5.5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl font-bold text-carbon-900 group-hover:text-coral-500 transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-carbon-700/65 leading-[1.7] flex-1">
                      {product.description}
                    </p>

                    {/* Bullet benefits */}
                    <div className="mt-6 pt-5 border-t border-sand-200/30 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-medium text-carbon-700/75">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Uso clínico y kinesiológico</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-carbon-700/75">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Asesoramiento sobre talle o indicación</span>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-7">
                      <button
                        type="button"
                        onClick={() => handleConsultProduct(product.waMessage)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blush-50 hover:bg-coral-400 text-coral-500 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-400 border border-blush-100 hover:border-coral-400 shadow-sm hover:shadow-lg hover:shadow-coral-400/20 cursor-pointer group/btn"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Consultar disponibilidad</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-carbon-700/45 mt-12 leading-relaxed max-w-xl mx-auto">
          * Para consultar por tallas, modelos o disponibilidad en stock, hacé clic en cualquiera de los productos para contactarte vía WhatsApp con nuestras especialistas.
        </p>
      </div>
    </section>
  )
}
