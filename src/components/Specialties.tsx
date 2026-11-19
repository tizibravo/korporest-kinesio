import { useState } from 'react'
import {
  Activity,
  Heart,
  Shield,
  Droplets,
  Zap,
  Target,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react'
import { SPECIALTIES, PRIMARY_WA } from '../data/korporestData'

// Icon mapping strictly using lucide-react clinical icons
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Bone: Layers,
  Activity,
  Heart,
  Shield,
  Droplets,
  Zap,
  Target,
  Stethoscope,
}

export default function Specialties() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gisela' | 'vanesa'>('all')

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'gisela') return s.area === 'gisela' || s.area === 'both'
    if (activeFilter === 'vanesa') return s.area === 'vanesa' || s.area === 'both'
    return true
  })

  return (
    <section id="especialidades" className="py-24 bg-coral-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-coral-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            <span className="text-xs font-bold tracking-wider uppercase text-coral-600">
              Servicios y Abordajes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-carbon-900 tracking-tight">
            Especialidades y Técnicas
          </h2>

          <p className="text-base sm:text-lg text-carbon-800/70 leading-relaxed font-normal">
            Cada tratamiento es planificado a medida combinando protocolos kinésicos avalados y técnicas avanzadas para acompañar al paciente hacia su recuperación funcional completa.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-carbon-900 text-white shadow-md'
                  : 'bg-white text-carbon-800/70 hover:bg-coral-50 hover:text-coral-600 border border-coral-100'
              }`}
            >
              Todas las técnicas ({SPECIALTIES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('gisela')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeFilter === 'gisela'
                  ? 'bg-coral-500 text-white shadow-md shadow-coral-500/25'
                  : 'bg-white text-carbon-800/70 hover:bg-coral-50 hover:text-coral-600 border border-coral-100'
              }`}
            >
              Área Lic. Gisela Pou (Traumatología & Pilates)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('vanesa')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeFilter === 'vanesa'
                  ? 'bg-beige-500 text-white shadow-md shadow-beige-500/25'
                  : 'bg-white text-carbon-800/70 hover:bg-coral-50 hover:text-coral-600 border border-coral-100'
              }`}
            >
              Área Lic. Vanesa Pou (Flebolinfática & Oncológica)
            </button>
          </div>
        </div>

        {/* Grid of Specialties */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialties.map((spec) => {
            const Icon = ICON_MAP[spec.icon] || Activity
            const isGisela = spec.area === 'gisela'
            const isVanesa = spec.area === 'vanesa'
            const isBoth = spec.area === 'both'

            return (
              <div
                key={spec.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-coral-100/80 hover:border-coral-300 shadow-sm hover:shadow-xl hover:shadow-coral-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                        isGisela
                          ? 'bg-coral-50 text-coral-500 group-hover:bg-coral-500 group-hover:text-white'
                          : isVanesa
                          ? 'bg-beige-300/20 text-beige-500 group-hover:bg-beige-500 group-hover:text-white'
                          : 'bg-carbon-900/5 text-carbon-900 group-hover:bg-carbon-900 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isGisela
                          ? 'bg-coral-50 text-coral-600 border-coral-100'
                          : isVanesa
                          ? 'bg-beige-300/15 text-beige-500 border-beige-300/30'
                          : 'bg-gray-50 text-carbon-800/80 border-gray-200'
                      }`}
                    >
                      {isGisela ? 'Gisela Pou' : isVanesa ? 'Vanesa Pou' : 'Gisela & Vanesa'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-carbon-900 group-hover:text-coral-600 transition-colors">
                    {spec.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-carbon-800/70 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Direct Action Link to WhatsApp */}
                <div className="mt-6 pt-4 border-t border-coral-50">
                  <a
                    href={`${PRIMARY_WA}?text=${encodeURIComponent(
                      `Hola! Me comunico desde la web para consultar sobre ${spec.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral-600 hover:text-coral-700 transition-colors group/link"
                  >
                    <span>Consultar por esta técnica</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Clinical Note banner */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-white p-6 sm:p-8 border border-coral-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-carbon-900">
              ¿No tenés certeza sobre qué abordaje corresponde a tu diagnóstico?
            </h4>
            <p className="text-xs text-carbon-800/65">
              Coordinamos una primera sesión de evaluación diagnóstica para orientar el tratamiento adecuado.
            </p>
          </div>

          <a
            href={`${PRIMARY_WA}?text=${encodeURIComponent(
              'Hola! Quisiera solicitar una evaluación kinésica para saber qué tratamiento necesito.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow-md hover:shadow-coral-500/20"
          >
            Solicitar Evaluación
          </a>
        </div>

      </div>
    </section>
  )
}
