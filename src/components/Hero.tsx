import { Calendar, ArrowDown, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react'
import { SITE, CONTACTS, PRIMARY_WA } from '../data/korporestData'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const offset = 76
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16 bg-gradient-to-b from-white via-coral-50/25 to-white"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-coral-100/50 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-coral-50 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-beige-300/10 blur-3xl" />
        
        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Copy (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-coral-100 shadow-sm shadow-coral-500/5">
              <span className="flex h-2 w-2 rounded-full bg-coral-500 animate-ping" />
              <span className="text-xs font-semibold tracking-wide uppercase text-coral-600">
                Atención personalizada en Pergamino
              </span>
              <span className="text-coral-200">|</span>
              <span className="text-xs font-medium text-carbon-800/70">
                Lic. Gisela & Lic. Vanesa Pou
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-carbon-900 leading-[1.12]">
              <span className="block text-carbon-900">KORPOREST</span>
              <span className="block text-coral-500 text-3xl sm:text-4xl lg:text-5xl font-bold mt-1">
                Pergamino
              </span>
              <span className="block text-lg sm:text-2xl font-semibold text-carbon-800/90 mt-3 font-jakarta">
                Kinesiología, Rehabilitación Traumatológica y Flebolinfática
              </span>
            </h1>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg text-carbon-800/75 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {SITE.description}
            </p>

            {/* Highlights row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-coral-100/70 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-coral-500 shrink-0" />
                <span className="text-xs font-semibold text-carbon-800 leading-tight">
                  Rehabilitación 100% Integral
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-coral-100/70 shadow-xs">
                <HeartHandshake className="w-5 h-5 text-coral-500 shrink-0" />
                <span className="text-xs font-semibold text-carbon-800 leading-tight">
                  Atención Interdisciplinaria
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-coral-100/70 shadow-xs">
                <Sparkles className="w-5 h-5 text-beige-500 shrink-0" />
                <span className="text-xs font-semibold text-carbon-800 leading-tight">
                  Técnicas Especializadas
                </span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('#contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-coral-500/25 hover:shadow-xl hover:shadow-coral-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Turno o Consulta</span>
              </button>

              <a
                href={PRIMARY_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-coral-50/50 text-carbon-900 hover:text-coral-600 font-semibold text-sm border border-coral-200 transition-all duration-200 shadow-xs hover:border-coral-400"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            {/* Direct Professional Channels */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-carbon-800/60 font-medium">
              <span>Líneas directas oficiales:</span>
              {CONTACTS.map((c) => (
                <a
                  key={c.id}
                  href={c.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-coral-600 transition-colors font-semibold underline decoration-coral-200 hover:decoration-coral-500 underline-offset-4"
                >
                  <span>{c.display}</span>
                  <span className="text-carbon-800/40">({c.id === 'gisela' ? 'Gisela' : 'Vanesa'})</span>
                </a>
              ))}
            </div>

          </div>

          {/* Visual Architecture Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame with soft clinical shadow */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-coral-100 shadow-2xl shadow-coral-500/10 backdrop-blur-sm">
                
                {/* Header card badge */}
                <div className="flex items-center justify-between border-b border-coral-50 pb-5 mb-6">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-coral-500 uppercase">
                      Centro de Kinesiología y Fisiatría
                    </span>
                    <h2 className="text-xl font-bold text-carbon-900 mt-0.5">
                      Abordaje Integral
                    </h2>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-coral-50 flex items-center justify-center text-coral-600 font-bold text-xs border border-coral-100">
                    KP
                  </div>
                </div>

                {/* Specialties quick preview */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-coral-50/60 border border-coral-100/70 transition-all hover:bg-coral-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold text-coral-600">Área Traumatológica</span>
                        <h3 className="text-sm font-semibold text-carbon-900 mt-0.5">Lic. Gisela Pou</h3>
                      </div>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white text-coral-600 border border-coral-100">
                        Kinesiopilates
                      </span>
                    </div>
                    <p className="text-xs text-carbon-800/70 mt-1.5 leading-relaxed">
                      Rehabilitación funcional de lesiones musculo-esqueléticas y método Pilates terapéutico.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-beige-300/10 border border-beige-300/30 transition-all hover:bg-beige-300/15">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold text-beige-500">Área Flebolinfática</span>
                        <h3 className="text-sm font-semibold text-carbon-900 mt-0.5">Lic. Vanesa Pou</h3>
                      </div>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white text-beige-500 border border-beige-300/30">
                        Oncológica
                      </span>
                    </div>
                    <p className="text-xs text-carbon-800/70 mt-1.5 leading-relaxed">
                      Rehabilitación vascular, drenaje linfático manual y acompañamiento kinésico oncológico.
                    </p>
                  </div>
                </div>

                {/* Patient focus guarantee */}
                <div className="mt-6 pt-5 border-t border-coral-50 flex items-center justify-between text-xs text-carbon-800/75">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-medium">Evaluación personalizada</span>
                  </div>
                  <span className="font-semibold text-coral-600">Hasta el alta médica</span>
                </div>

              </div>

              {/* Floating aesthetic pill top-right */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-coral-500 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-coral-500/30 rotate-1">
                Atención 1 a 1
              </div>

              {/* Floating aesthetic pill bottom-left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-carbon-900 text-white text-xs font-medium px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 -rotate-1">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Merced 1271 · Pergamino</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Smooth scroll prompt indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <button
          type="button"
          onClick={() => scrollToSection('#nosotros')}
          aria-label="Ir a la sección Nosotros"
          className="p-2 text-carbon-800/40 hover:text-coral-500 transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
