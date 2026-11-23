import { useState } from 'react'
import {
  ShieldQuestion,
  ChevronDown,
  MessageCircle,
  QrCode,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { PREVENTION_GUIDES, PRIMARY_WA } from '../data/korporestData'
import Reveal from './Reveal'

export default function Prevention() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="prevencion" className="py-24 sm:py-28 bg-ivory-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-blush-100/25 blur-[6rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200/50 shadow-sm">
              <ShieldQuestion className="w-3.5 h-3.5 text-coral-400" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-coral-500">
                Prevención y Patologías
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-carbon-900 tracking-tight">
              Guías de Prevención y Cuidado
            </h2>

            <p className="text-base sm:text-lg text-carbon-700/65 leading-[1.7]">
              Accedé a nuestras guías educativas diseñadas para acompañarte en la prevención y el cuidado de tu salud. Escaneá el código QR disponible en nuestro consultorio para acceder al contenido.
            </p>
          </div>
        </Reveal>

        {/* QR Callout */}
        <Reveal>
          <div className="mb-10 rounded-2xl bg-white border border-sand-200/40 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-blush-50 border border-blush-100 flex items-center justify-center shrink-0">
              <QrCode className="w-10 h-10 text-coral-400" />
            </div>
            <div className="text-center sm:text-left space-y-1.5">
              <h3 className="font-serif text-base font-semibold text-carbon-900">
                Código QR en consultorio
              </h3>
              <p className="text-xs text-carbon-700/60 leading-relaxed">
                Durante tu visita escaneá el QR dispuesto en la sala para acceder a las guías y material educativo de cada área.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Accordion Guides */}
        <div className="space-y-4">
          {PREVENTION_GUIDES.map((guide, i) => {
            const isOpen = openId === guide.id

            return (
              <Reveal key={guide.id} delay={i * 80}>
                <div
                  className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-coral-200 shadow-lg shadow-coral-400/8'
                      : 'bg-white border-sand-200/40 hover:border-coral-200 shadow-sm'
                  }`}
                >
                  {/* Header button */}
                  <button
                    type="button"
                    onClick={() => toggle(guide.id)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-coral-400 text-white'
                            : 'bg-blush-50 text-coral-400 border border-blush-100'
                        }`}
                      >
                        <span className="font-serif text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-carbon-900">
                          {guide.title}
                        </h3>
                        <p className="text-xs text-carbon-700/55 mt-0.5 leading-relaxed">
                          {guide.summary}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-carbon-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible content */}
                  <div
                    className={`transition-all duration-400 ease-out ${
                      isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1">
                      <div className="h-px bg-sand-200/40 mb-5" />

                      {/* "Próximamente" badge */}
                      <div className="flex items-center gap-2.5 p-4 rounded-xl bg-blush-50/60 border border-blush-100/60 mb-5">
                        <Clock className="w-4 h-4 text-coral-400 shrink-0" />
                        <span className="text-xs font-semibold text-coral-500">
                          Guía en preparación — Próximamente disponible
                        </span>
                      </div>

                      <p className="text-sm text-carbon-700/65 leading-[1.7] mb-5">
                        Estamos trabajando en esta guía para brindarte información clara y útil. Si tenés consultas relacionadas con este tema, comunicate con nuestras especialistas por WhatsApp.
                      </p>

                      {/* WhatsApp consult button */}
                      <a
                        href={`${PRIMARY_WA}?text=${encodeURIComponent(
                          `Hola! Me gustaría recibir información sobre la guía "${guide.title}".`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-blush-50 hover:bg-coral-400 text-coral-500 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-400 border border-blush-100 hover:border-coral-400 shadow-sm hover:shadow-lg hover:shadow-coral-400/20 group/btn"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Consultar por WhatsApp</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
