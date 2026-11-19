import { useState } from 'react'
import {
  MapPin,
  Phone,
  Send,
  Sparkles,
  ChevronDown,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { SITE, CONTACTS, CONTACT_TOPICS } from '../data/korporestData'

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

    // Clinical formatted message
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

    // Open WhatsApp in new tab
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
    <section id="contacto" className="py-24 bg-coral-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-coral-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            <span className="text-xs font-bold tracking-wider uppercase text-coral-600">
              Ubicación y Turnos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-carbon-900 tracking-tight">
            Contacto y Consultas
          </h2>

          <p className="text-base sm:text-lg text-carbon-800/70 leading-relaxed font-normal">
            Estamos en Pergamino para coordinar tu turno, resolver inquietudes sobre tratamientos y recibirte de forma personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Institutional Information & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-3xl p-7 border border-coral-100 shadow-sm space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center shrink-0 border border-coral-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-carbon-800/50">
                    Dirección Oficial
                  </h3>
                  <p className="text-base font-bold text-carbon-900 mt-0.5">
                    {SITE.address}
                  </p>
                  <p className="text-xs text-carbon-800/60 mt-1">
                    Atención presencial en consultorio acondicionado en Pergamino.
                  </p>
                </div>
              </div>

              <div className="h-px bg-coral-50" />

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-coral-50 text-coral-500 flex items-center justify-center shrink-0 border border-coral-100">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-carbon-800/50">
                    Red Social Oficial
                  </h3>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-base font-bold text-coral-600 hover:text-coral-700 transition-colors mt-0.5 underline decoration-coral-200 underline-offset-4"
                  >
                    {SITE.instagram}
                  </a>
                  <p className="text-xs text-carbon-800/60 mt-1">
                    Seguinos en Instagram para conocer más sobre nuestro centro.
                  </p>
                </div>
              </div>

              <div className="h-px bg-coral-50" />

              {/* Notice */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-coral-50/50 border border-coral-100/70">
                <Clock className="w-5 h-5 text-coral-500 shrink-0 mt-0.5" />
                <div className="text-xs text-carbon-800/75 leading-relaxed">
                  <strong className="text-carbon-900 block font-semibold mb-0.5">
                    Atención con turno programado
                  </strong>
                  Para brindarte la dedicación adecuada a tu caso, coordinamos previamente cada sesión por WhatsApp.
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callouts */}
            <div className="bg-white rounded-3xl p-7 border border-coral-100 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-carbon-800/50">
                Canales de WhatsApp Oficiales
              </h3>
              
              <div className="space-y-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.id}
                    href={`${c.waUrl}?text=${encodeURIComponent(
                      `Hola ${c.label.replace('WhatsApp ', '')}! Quisiera consultar por un turno en KORPOREST.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-coral-50/40 hover:bg-coral-500 border border-coral-100/80 hover:border-coral-500 text-carbon-900 hover:text-white transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-coral-500 group-hover:text-white shadow-xs">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-coral-600 group-hover:text-white transition-colors">
                          {c.label}
                        </div>
                        <div className="text-sm font-semibold tracking-wide mt-0.5">
                          {c.display}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-coral-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                      Abrir chat &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Form to WhatsApp (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-coral-100 shadow-xl shadow-coral-500/5">
              
              <div className="mb-8">
                <span className="text-xs font-bold tracking-widest text-coral-500 uppercase">
                  Formulario Directo
                </span>
                <h3 className="text-2xl font-extrabold text-carbon-900 mt-1">
                  Enviar Mensaje a WhatsApp
                </h3>
                <p className="text-sm text-carbon-800/70 mt-1.5 leading-relaxed">
                  Completá tus datos y serás redirigido de manera inmediata a la conversación oficial de WhatsApp con tu mensaje redactado y listo para enviar.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">
                    ¡Redirigiendo a WhatsApp!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                    Se abrió tu aplicación de WhatsApp con el mensaje prearmado. Si la ventana no apareció, podés contactarnos directamente a través de los números oficiales.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-bold uppercase tracking-wider text-carbon-800/80 mb-2"
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
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-carbon-900 placeholder:text-carbon-800/30 bg-white transition-all outline-none ${
                        errors.name
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500 ring-2 ring-red-400/20'
                          : 'border-coral-100 focus:border-coral-400 focus:ring-4 focus:ring-coral-400/15'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Topic / Specialty Selector */}
                  <div>
                    <label
                      htmlFor="form-topic"
                      className="block text-xs font-bold uppercase tracking-wider text-carbon-800/80 mb-2"
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
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm bg-white transition-all outline-none appearance-none cursor-pointer ${
                          errors.topic
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500 ring-2 ring-red-400/20'
                            : 'border-coral-100 focus:border-coral-400 focus:ring-4 focus:ring-coral-400/15'
                        } ${!formData.topic ? 'text-carbon-800/40' : 'text-carbon-900 font-medium'}`}
                      >
                        <option value="">Seleccioná una especialidad, técnica o insumo</option>
                        {CONTACT_TOPICS.map((topic) => (
                          <option key={topic} value={topic} className="text-carbon-900">
                            {topic}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-carbon-800/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.topic && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.topic}</span>
                      </p>
                    )}
                  </div>

                  {/* Destination WhatsApp Line Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-carbon-800/80 mb-2">
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
                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-coral-50 border-coral-400 ring-2 ring-coral-400/20'
                                : 'bg-white border-coral-100 hover:border-coral-200 text-carbon-800/70'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-xs font-bold ${
                                  isSelected ? 'text-coral-600' : 'text-carbon-800'
                                }`}
                              >
                                {c.label.replace('WhatsApp ', '')}
                              </span>
                              <span
                                className={`h-2.5 w-2.5 rounded-full ${
                                  isSelected ? 'bg-coral-500' : 'bg-gray-200'
                                }`}
                              />
                            </div>
                            <span className="block text-xs text-carbon-800/50 mt-1 font-mono">
                              {c.display}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-bold uppercase tracking-wider text-carbon-800/80 mb-2"
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
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm text-carbon-900 placeholder:text-carbon-800/30 bg-white transition-all outline-none resize-none ${
                        errors.message
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500 ring-2 ring-red-400/20'
                          : 'border-coral-100 focus:border-coral-400 focus:ring-4 focus:ring-coral-400/15'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-coral-500/25 hover:shadow-xl hover:shadow-coral-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Iniciar Conversación por WhatsApp</span>
                  </button>

                  <p className="text-center text-[11px] text-carbon-800/50 leading-relaxed">
                    Al hacer clic serás redirigido a la aplicación oficial de WhatsApp con el mensaje ya estructurado. No almacenamos datos en servidores ni bases de datos.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
