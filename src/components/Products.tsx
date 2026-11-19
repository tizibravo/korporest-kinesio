import { Layers, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react'
import { PRODUCTS, CONTACTS } from '../data/korporestData'

export default function Products() {
  const handleConsultProduct = (waMessage: string) => {
    const waNumber = CONTACTS[0].waNumber // Default to Gisela or center phone
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="productos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            <span className="text-xs font-bold tracking-wider uppercase text-coral-600">
              Insumos y Accesorios
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-carbon-900 tracking-tight">
            Productos e Insumos Especializados
          </h2>

          <p className="text-base sm:text-lg text-carbon-800/70 leading-relaxed font-normal">
            Ponemos a disposición elementos terapéuticos esenciales para el tratamiento compresivo, soporte articular y cuidados clínicos en el consultorio o domicilio.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl border border-coral-100 hover:border-coral-300 shadow-sm hover:shadow-2xl hover:shadow-coral-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top aesthetic accent strip */}
                <div className="h-2 bg-gradient-to-r from-coral-400 via-coral-500 to-beige-300" />

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  {/* Category pill & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-coral-600 bg-coral-50 px-3 py-1 rounded-full border border-coral-100">
                      {product.subtitle}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center group-hover:bg-coral-500 group-hover:text-white transition-colors duration-300">
                      <Layers className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-carbon-900 group-hover:text-coral-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-carbon-800/70 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Bullet benefits */}
                  <div className="mt-6 pt-5 border-t border-coral-50 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-carbon-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Uso clínico y kinesiológico</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-carbon-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Asesoramiento sobre talle o indicación</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => handleConsultProduct(product.waMessage)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-coral-50 hover:bg-coral-500 text-coral-600 hover:text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 border border-coral-200/80 hover:border-coral-500 shadow-xs hover:shadow-lg hover:shadow-coral-500/20 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Consultar disponibilidad</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-carbon-800/50 mt-12">
          * Para consultar por tallas, modelos o disponibilidad en stock, hacé clic en cualquiera de los productos para contactarte vía WhatsApp con nuestras especialistas.
        </p>

      </div>
    </section>
  )
}
