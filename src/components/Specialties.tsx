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
  Bone,
  Wind,
  AlertCircle,
} from 'lucide-react'
import { SPECIALTIES, PRIMARY_WA, IMAGE_ASSETS } from '../data/korporestData'
import Reveal from './Reveal'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Bone: Bone,
  Activity,
  Heart,
  Shield,
  Droplets,
  Zap,
  Target,
  Stethoscope,
  Layers,
  Wind,
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
    <section id="especialidades" className="py-24 sm:py-28 bg-blush-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-blush-100/30 blur-[6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200/50 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coral-400" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-coral-500">
                Servicios y Abordajes
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-carbon-900 tracking-tight">
              Especialidades y Técnicas
            </h2>

            <p className="text-base sm:text-lg text-carbon-700/65 leading-[1.7]">
              Cada tratamiento es planificado a medida combinando protocolos kinésicos avalados y técnicas avanzadas para acompañar al paciente hacia su recuperación funcional completa.
            </p>

            {/* Filter Tabs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-carbon-900 text-white shadow-md'
                    : 'bg-white text-carbon-700/70 hover:bg-blush-50 hover:text-coral-500 border border-sand-200/50'
                }`}
              >
                Todas las técnicas ({SPECIALTIES.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('gisela')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === 'gisela'
                    ? 'bg-coral-400 text-white shadow-md shadow-coral-400/25'
                    : 'bg-white text-carbon-700/70 hover:bg-blush-50 hover:text-coral-500 border border-sand-200/50'
                }`}
              >
                Área Lic. Gisela Pou (Traumatología & Pilates)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('vanesa')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === 'vanesa'
                    ? 'bg-sand-400 text-white shadow-md shadow-sand-400/25'
                    : 'bg-white text-carbon-700/70 hover:bg-blush-50 hover:text-coral-500 border border-sand-200/50'
                }`}
              >
                Área Lic. Vanesa Pou (Flebolinfática & Oncológica)
              </button>
            </div>
          </div>
        </Reveal>

        {/* Grid of Specialties */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSpecialties.map((spec, i) => {
            const Icon = ICON_MAP[spec.icon] || Activity
            const isGisela = spec.area === 'gisela'
            const isVanesa = spec.area === 'vanesa'

            return (
              <Reveal key={spec.id} delay={(i % 4) * 80}>
                <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-sand-200/40 hover:border-coral-300 shadow-sm hover:shadow-xl hover:shadow-coral-400/8 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between h-full">
                  <div>
                    {spec.id === 'kinesiopilates' && (
                      <img
                        src={IMAGE_ASSETS.pilatesReformer}
                        alt="Pilates en Reformer"
                        className="mb-5 aspect-video w-full rounded-xl object-cover"
                      />
                    )}

                    {/* Icon circle + badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isGisela
                            ? 'bg-blush-50 text-coral-400 group-hover:bg-coral-400 group-hover:text-white border border-blush-100'
                            : isVanesa
                            ? 'bg-sand-200/30 text-sand-500 group-hover:bg-sand-400 group-hover:text-white border border-sand-200/50'
                            : 'bg-ivory-200 text-carbon-700 group-hover:bg-carbon-900 group-hover:text-white border border-sand-200/40'
                        }`}
                      >
                        <Icon className="w-5.5 h-5.5" />
                      </div>

                      <span
                        className={`text-[0.625rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          isGisela
                            ? 'bg-blush-50 text-coral-500 border-blush-100'
                            : isVanesa
                            ? 'bg-sand-200/20 text-sand-500 border-sand-200/40'
                            : 'bg-ivory-200 text-carbon-700 border-sand-200/40'
                        }`}
                      >
                        {isGisela ? 'Gisela Pou' : isVanesa ? 'Vanesa Pou' : 'Gisela & Vanesa'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg font-semibold text-carbon-900 group-hover:text-coral-500 transition-colors duration-300">
                      {spec.title}
                    </h3>

                    {/* Highlight badge for early referral */}
                    {spec.highlight && (
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-coral-400/10 border border-coral-300/40">
                        <AlertCircle className="w-3.5 h-3.5 text-coral-500 shrink-0" />
                        <span className="text-[0.6875rem] font-semibold text-coral-600 leading-tight">
                          Derivación temprana al recibir el diagnóstico médico
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm text-carbon-700/65 leading-[1.7]">
                      {spec.description}
                    </p>
                  </div>

                  {/* Direct WhatsApp link */}
                  <div className="mt-6 pt-4 border-t border-sand-200/30">
                    <a
                      href={`${PRIMARY_WA}?text=${encodeURIComponent(
                        `Hola! Me comunico desde la web para consultar sobre ${spec.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral-500 hover:text-coral-600 transition-colors group/link"
                    >
                      <span>Consultar por esta técnica</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Clinical Note banner */}
        <Reveal>
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-sand-200/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="font-serif text-base font-semibold text-carbon-900">
                ¿No tenés certeza sobre qué abordaje corresponde a tu diagnóstico?
              </h4>
              <p className="text-xs text-carbon-700/60 leading-relaxed">
                Coordinamos una primera sesión de evaluación diagnóstica para orientar el tratamiento adecuado.
              </p>
            </div>

            <a
              href={`${PRIMARY_WA}?text=${encodeURIComponent(
                'Hola! Quisiera solicitar una evaluación kinésica para saber qué tratamiento necesito.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-full bg-coral-400 hover:bg-coral-500 text-white font-semibold text-xs tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-coral-400/25 hover:-translate-y-0.5"
            >
              Solicitar Evaluación
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
