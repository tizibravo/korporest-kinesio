import { Users, Target, Award, ArrowRight } from 'lucide-react'
import { TEAM, CONTACTS } from '../data/korporestData'
import Reveal from './Reveal'

export default function About() {
  const getWaUrl = (memberId: string) => {
    const contact = CONTACTS.find((c) => c.id === memberId)
    if (!contact) return '#'
    return `${contact.waUrl}?text=${encodeURIComponent(`Hola ${memberId === 'gisela' ? 'Gisela' : 'Vanesa'}! Me comunico desde la web de KORPOREST para hacer una consulta sobre su especialidad.`)}`
  }

  return (
    <section id="nosotros" className="py-24 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-16 space-y-4">
            <span className="eyebrow">Quiénes Somos</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-carbon-900 tracking-tight">
              Nuestro Equipo
            </h2>
            <p className="text-base text-carbon-700/60 max-w-2xl mx-auto leading-[1.7]">
              Trabajo en equipo, rehabilitación integral y búsqueda de la máxima calidad en cada tratamiento.
            </p>
          </div>
        </Reveal>

        {/* Philosophy cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Users size={22} className="text-coral-400" />,
              title: 'Trabajo en Equipo',
              desc: 'Abordamos cada situación desde todos los ángulos posibles, integrando la perspectiva médica, kinesiológica y personal del paciente.',
            },
            {
              icon: <Target size={22} className="text-coral-400" />,
              title: 'Rehabilitación al 100%',
              desc: 'Nuestro objetivo es lograr la recuperación completa del paciente, sin conformarnos con resultados parciales. Acompañamos desde el diagnóstico hasta el alta.',
            },
            {
              icon: <Award size={22} className="text-coral-400" />,
              title: 'Calidad y Personalización',
              desc: 'Cada paciente tiene una situación única. Evaluamos, intercambiamos ideas y definimos el tratamiento más adecuado para cada persona.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 border border-sand-200/40 hover:shadow-lg hover:shadow-coral-400/6 transition-all duration-500 group h-full">
                <div className="w-11 h-11 bg-blush-50 rounded-xl flex items-center justify-center mb-5 border border-blush-100/60 group-hover:bg-coral-400 group-hover:border-coral-400 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">{item.icon}</div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-carbon-900 mb-2.5">{item.title}</h3>
                <p className="text-sm text-carbon-700/60 leading-[1.7]">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Team members — Editorial fiches */}
        <div className="grid md:grid-cols-2 gap-8">
          {TEAM.map((member, i) => {
            const isCoral = member.color === 'coral'
            const specialties = isCoral
              ? ['Traumatología', 'Kinesiopilates']
              : ['Vascular', 'Linfático', 'Oncológico']

            return (
              <Reveal key={member.id} delay={i * 120}>
                <div
                  className={`rounded-[1.75rem] p-8 sm:p-10 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                    isCoral
                      ? 'bg-blush-50/60 border-blush-100 hover:shadow-coral-400/10'
                      : 'bg-sand-200/20 border-sand-200/50 hover:shadow-sand-400/10'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-serif font-bold text-white shadow-lg ${
                        isCoral
                          ? 'bg-coral-400 shadow-coral-400/30'
                          : 'bg-sand-400 shadow-sand-400/25'
                      }`}
                    >
                      {member.name.split(' ').pop()?.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-carbon-900">{member.name}</h3>
                      <p className="text-xs font-medium text-carbon-700/50 mt-1">{member.title}</p>
                    </div>
                  </div>

                  {/* Specialty tags with fine dividers */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {specialties.map((spec) => (
                      <span
                        key={spec}
                        className={`text-[0.6875rem] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full border ${
                          isCoral
                            ? 'bg-white text-coral-500 border-blush-100'
                            : 'bg-white text-sand-500 border-sand-200/50'
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className={`h-px ${isCoral ? 'bg-blush-100' : 'bg-sand-200/50'} mb-5`} />

                  <p className="text-sm text-carbon-700/70 leading-[1.7] mb-6">{member.description}</p>

                  {/* Direct WhatsApp button */}
                  <a
                    href={getWaUrl(member.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link ${
                      isCoral ? 'text-coral-500 hover:text-coral-600' : 'text-sand-500 hover:text-sand-400'
                    }`}
                  >
                    <span>Consultar con {member.name.split(' ').slice(-1)[0]}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Process — Dark editorial block */}
        <Reveal>
          <div className="mt-20 bg-carbon-900 rounded-[1.75rem] p-10 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-coral-400/8 rounded-full blur-[5rem]" />
            <div className="text-center mb-12 relative">
              <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-coral-400">Proceso Terapéutico</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-3">Nuestro Proceso de Atención</h3>
              <p className="text-white/50 text-sm mt-2">Un camino claro hacia tu recuperación</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { step: '01', title: 'Evaluación Inicial', desc: 'Anamnesis completa, exploración funcional y diagnóstico kinesiológico.' },
                { step: '02', title: 'Plan de Tratamiento', desc: 'Intercambio con el paciente y definición conjunta del protocolo terapéutico.' },
                { step: '03', title: 'Tratamiento Activo', desc: 'Sesiones personalizadas con seguimiento continuo y ajuste del plan.' },
                { step: '04', title: 'Alta y Prevención', desc: 'Criterio de alta con indicaciones para mantener los resultados a largo plazo.' },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="font-serif text-5xl font-bold text-coral-400/20 mb-3">{item.step}</div>
                  <h4 className="font-serif font-semibold text-white mb-2.5 text-base">{item.title}</h4>
                  <p className="text-white/50 text-xs leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
