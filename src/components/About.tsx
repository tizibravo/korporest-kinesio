import { Users, Target, Award } from 'lucide-react'
import { TEAM } from '../data/korporestData'

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-3">
          <span className="inline-block bg-coral-50 text-coral-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-coral-100">
            Quiénes somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-carbon-900">
            Nuestro Equipo
          </h2>
          <p className="text-base text-carbon-800/60 max-w-2xl mx-auto leading-relaxed">
            Trabajo en equipo, rehabilitación integral y búsqueda de la máxima calidad en cada tratamiento.
          </p>
        </div>

        {/* Philosophy cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <Users size={22} className="text-coral-500" />,
              title: 'Trabajo en Equipo',
              desc: 'Abordamos cada situación desde todos los ángulos posibles, integrando la perspectiva médica, kinesiológica y personal del paciente.',
            },
            {
              icon: <Target size={22} className="text-coral-500" />,
              title: 'Rehabilitación al 100%',
              desc: 'Nuestro objetivo es lograr la recuperación completa del paciente, sin conformarnos con resultados parciales. Acompañamos desde el diagnóstico hasta el alta.',
            },
            {
              icon: <Award size={22} className="text-coral-500" />,
              title: 'Calidad y Personalización',
              desc: 'Cada paciente tiene una situación única. Evaluamos, intercambiamos ideas y definimos el tratamiento más adecuado para cada persona.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-coral-50 rounded-2xl p-6 border border-coral-100 hover:shadow-md hover:shadow-coral-100 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-coral-200 transition-shadow">
                {item.icon}
              </div>
              <h3 className="font-bold text-carbon-900 mb-2">{item.title}</h3>
              <p className="text-sm text-carbon-800/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className={`rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${
                member.color === 'coral'
                  ? 'bg-coral-50 border-coral-100 hover:shadow-coral-100'
                  : 'bg-beige-300/10 border-beige-300/30 hover:shadow-beige-300/20'
              }`}
            >
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg ${
                    member.color === 'coral'
                      ? 'bg-coral-500 shadow-coral-400/40'
                      : 'bg-beige-500 shadow-beige-500/40'
                  }`}
                >
                  {member.name.split(' ').pop()?.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-carbon-900">{member.name}</h3>
                  <p className="text-xs font-medium text-carbon-800/50">{member.title}</p>
                </div>
              </div>
              <div
                className={`inline-block text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-4 ${
                  member.color === 'coral'
                    ? 'bg-coral-500 text-white'
                    : 'bg-beige-300 text-white'
                }`}
              >
                {member.area}
              </div>
              <p className="text-sm text-carbon-800/70 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-20 bg-carbon-900 rounded-3xl p-10 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Nuestro Proceso de Atención</h3>
            <p className="text-white/50 text-sm">Un camino claro hacia tu recuperación</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Evaluación Inicial', desc: 'Anamnesis completa, exploración funcional y diagnóstico kinesiológico.' },
              { step: '02', title: 'Plan de Tratamiento', desc: 'Intercambio con el paciente y definición conjunta del protocolo terapéutico.' },
              { step: '03', title: 'Tratamiento Activo', desc: 'Sesiones personalizadas con seguimiento continuo y ajuste del plan.' },
              { step: '04', title: 'Alta y Prevención', desc: 'Criterio de alta con indicaciones para mantener los resultados a largo plazo.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-black text-coral-500/20 mb-2">{item.step}</div>
                <h4 className="font-bold text-white mb-2 text-sm">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
