import { useState } from 'react'
import {
  MapPin,
  Send,
  Sparkles,
  ChevronDown,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react'
import { SITE, CONTACTS, CONTACT_TOPICS } from '../data/korporestData'
import Reveal from './Reveal'

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

interface FormData {
  name: string
  topic: string
  message: string
  selectedPhone: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    topic: '',
    message: '',
    selectedPhone: CONTACTS[0].waNumber,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {}
    if (!formData.name.trim()) {
      errs.name = 'Por favor, ingresá tu nombre completo.'
    }
    if (!formData.topic) {
      errs.topic = 'Seleccioná el área o motivo de tu consulta.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Por favor, describí brevemente tu consulta.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const selectedContact = CONTACTS.find((c) => c.waNumber === formData.selectedPhone) || CONTACTS[0]

    const lines = [
      `*Consulta Web — KORPOREST Pergamino*`,
      `• *Paciente / Nombre:* ${formData.name.trim()}`,
      `• *Motivo o Especialidad:* ${formData.topic}`,
      `• *Profesional de destino:* ${selectedContact.label.replace('WhatsApp ', '')}`,
      ``,
      `*Detalle de la consulta:*`,
      formData.message.trim(),
    ]

    const encodedText = encodeURIComponent(lines.join('\n'))
    const whatsappUrl = `https://wa.me/${formData.selectedPhone}?text=${encodedText}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: '',
        topic: '',
        message: '',
        selectedPhone: CONTACTS[0].waNumber,
      })
    }, 4000)
  }

  return (
    <section id="contacto" className="py-24 sm:py-28 bg-blush-50/25 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200/50 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coral-400" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-coral-500">
                Ubicación y Turnos
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-carbon-900 tracking-tight">
              Contacto y Consultas
            </h2>

            <p className="text-base sm:text-lg text-carbon-700/65 leading-[1.7]">
              Estamos en Pergamino para coordinar tu turno, resolver inquietudes sobre tratamientos y recibirte de forma personalizada.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Institutional Info (5 cols) */}
          <Reveal className="lg:col-span-5 space-y-6">

            {/* Direct Cards */}
            <div className="bg-white rounded-2xl p-7 border border-sand-200/40 shadow-sm space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blush-50 text-coral-400 flex items-center justify-center shrink-0 border border-blush-100">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/50">
                    Dirección Oficial
                  </h3>
                  <p className="text-base font-bold text-carbon-900 mt-1">
                    {SITE.address}
                  </p>
                  <p className="text-xs text-carbon-700/55 mt-1.5 leading-relaxed">
                    Atención presencial en consultorio acondicionado en Pergamino.
                  </p>
                </div>
              </div>

              <div className="h-px bg-sand-200/40" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blush-50 text-coral-400 flex items-center justify-center shrink-0 border border-blush-100">
                  <InstagramIcon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/50">
                    Red Social Oficial
                  </h3>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-base font-bold text-coral-500 hover:text-coral-600 transition-colors mt-1 underline decoration-coral-200 underline-offset-4"
                  >
                    {SITE.instagram}
                  </a>
                  <p className="text-xs text-carbon-700/55 mt-1.5 leading-relaxed">
                    Seguinos en Instagram para conocer más sobre nuestro centro.
                  </p>
                </div>
              </div>

              <div className="h-px bg-sand-200/40" />

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-blush-50/50 border border-blush-100/60">
                <Clock className="w-5 h-5 text-coral-400 shrink-0 mt-0.5" />
                <div className="text-xs text-carbon-700/70 leading-relaxed">
                  <strong className="text-carbon-900 block font-semibold mb-0.5">
                    Atención con turno programado
                  </strong>
                  Para brindarte la dedicación adecuada a tu caso, coordinamos previamente cada sesión por WhatsApp.
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callouts */}
            <div className="bg-white rounded-2xl p-7 border border-sand-200/40 shadow-sm space-y-4">
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/50">
                Canales de WhatsApp Oficiales
              </h3>

              <div className="space-y-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.id}
                    href={`${c.waUrl}?text=${encodeURIComponent(
                      `Hola ${c.id === 'gisela' ? 'Gisela' : 'Vanesa'}! Quisiera consultar por un turno en KORPOREST.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-blush-50/40 hover:bg-coral-400 border border-blush-100/70 hover:border-coral-400 text-carbon-900 hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-coral-500 group-hover:text-white shadow-sm transition-colors">
                        <InstagramIcon className="w-4 h-4 opacity-0" />
                        <span className="absolute">{c.id === 'gisela' ? 'G' : 'V'}</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-coral-500 group-hover:text-white transition-colors">
                          {c.id === 'gisela' ? 'Lic. Gisela Pou' : 'Lic. Vanesa Pou'}
                        </div>
                        <div className="text-sm font-semibold tracking-wide mt-0.5">
                          {c.display}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-coral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form (7 cols) */}
          <Reveal className="lg:col-span-7" delay={100}>
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-sand-200/40 shadow-xl shadow-coral-400/5">

              <div className="mb-8">
                <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-coral-500 uppercase">
                  Formulario Directo
                </span>
                <h3 className="font-serif text-2xl font-bold text-carbon-900 mt-1.5">
                  Enviar Mensaje a WhatsApp
                </h3>
                <p className="text-sm text-carbon-700/65 mt-2 leading-[1.7]">
                  Completá tus datos y serás redirigido de manera inmediata a la conversación oficial de WhatsApp con tu mensaje redactado y listo para enviar.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Redirigiendo a WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Se abrió tu aplicación de WhatsApp con el mensaje prearmado. Si la ventana no apareció, podés contactarnos directamente a través de los números oficiales.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/80 mb-2"
                    >
                      Nombre y Apellido *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: undefined })
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm text-carbon-900 placeholder:text-carbon-700/25 bg-white transition-all duration-300 outline-none ${
                        errors.name
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500 ring-2 ring-red-400/20'
                          : 'border-sand-200/60 focus:border-coral-300 focus:ring-4 focus:ring-coral-400/12'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Topic */}
                  <div>
                    <label
                      htmlFor="form-topic"
                      className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/80 mb-2"
                    >
                      Área o Motivo de Consulta *
                    </label>
                    <div className="relative">
                      <select
                        id="form-topic"
                        value={formData.topic}
                        onChange={(e) => {
                          setFormData({ ...formData, topic: e.target.value })
                          if (errors.topic) setErrors({ ...errors, topic: undefined })
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm bg-white transition-all duration-300 outline-none appearance-none cursor-pointer ${
                          errors.topic
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500 ring-2 ring-red-400/20'
                            : 'border-sand-200/60 focus:border-coral-300 focus:ring-4 focus:ring-coral-400/12'
                        } ${!formData.topic ? 'text-carbon-700/35' : 'text-carbon-900 font-medium'}`}
                      >
                        <option value="">Seleccioná una especialidad, técnica o insumo</option>
                        {CONTACT_TOPICS.map((topic) => (
                          <option key={topic} value={topic} className="text-carbon-900">
                            {topic}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-carbon-700/35 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.topic && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.topic}</span>
                      </p>
                    )}
                  </div>

                  {/* Destination Phone Selector */}
                  <div>
                    <label className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/80 mb-2">
                      Enviar consulta a la línea de:
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {CONTACTS.map((c) => {
                        const isSelected = formData.selectedPhone === c.waNumber
                        return (
                          <button
                            type="button"
                            key={c.id}
                            onClick={() => setFormData({ ...formData, selectedPhone: c.waNumber })}
                            className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? 'bg-blush-50 border-coral-300 ring-2 ring-coral-400/15'
                                : 'bg-white border-sand-200/50 hover:border-coral-200 text-carbon-700/70'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-semibold ${
                                  isSelected ? 'text-coral-500' : 'text-carbon-900'
                                }`}
                              >
                                {c.id === 'gisela' ? 'Lic. Gisela Pou' : 'Lic. Vanesa Pou'}
                              </span>
                              <span
                                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                                  isSelected ? 'bg-coral-400' : 'bg-sand-200'
                                }`}
                              />
                            </div>
                            <span className="block text-xs text-carbon-700/45 mt-1 font-mono">
                              {c.display}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-carbon-700/80 mb-2"
                    >
                      Mensaje o Descripción del Caso *
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Describí brevemente tu síntoma, diagnóstico médico previo o consulta por turnos..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value })
                        if (errors.message) setErrors({ ...errors, message: undefined })
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm text-carbon-900 placeholder:text-carbon-700/25 bg-white transition-all duration-300 outline-none resize-none ${
                        errors.message
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500 ring-2 ring-red-400/20'
                          : 'border-sand-200/60 focus:border-coral-300 focus:ring-4 focus:ring-coral-400/12'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-coral-400 hover:bg-coral-500 text-white font-semibold text-sm tracking-wide transition-all duration-400 shadow-lg shadow-coral-400/20 hover:shadow-xl hover:shadow-coral-400/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Iniciar Conversación por WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-carbon-700/40 leading-relaxed">
                    Al hacer clic serás redirigido a la aplicación oficial de WhatsApp con el mensaje ya estructurado. No almacenamos datos en servidores ni bases de datos.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
