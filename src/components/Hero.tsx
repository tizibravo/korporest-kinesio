import { Calendar, ArrowDown, MapPin, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react'
import { SITE, CONTACTS } from '../data/korporestData'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20 bg-gradient-to-b from-ivory-100 via-blush-50/40 to-ivory-100"
    >
      {/* Decorative organic background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-15%] right-[-10%] w-[34rem] h-[34rem] rounded-full bg-blush-100/40 blur-[6rem]" />
        <div className="absolute top-[35%] left-[-8%] w-96 h-96 rounded-full bg-sand-200/30 blur-[5rem]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[28rem] h-[28rem] rounded-full bg-blush-50/50 blur-[5rem]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#1E1E24 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-sand-200/60 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-coral-400" />
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-carbon-700">
                Merced 1271 · Pergamino, Buenos Aires
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-[3.75rem] font-bold text-carbon-900 leading-[1.08] tracking-tight">
              Kinesiología y
              <br />
              <span className="italic font-medium text-coral-400">rehabilitación</span> integral
              <span className="block text-2xl sm:text-3xl lg:text-[2.25rem] font-normal text-carbon-700/80 mt-4 font-serif">
                Traumatológica & Flebolinfática
              </span>
            </h1>

            {/* Value proposition */}
            <p className="text-base sm:text-lg text-carbon-700/70 leading-[1.7] max-w-xl font-normal">
              {SITE.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sand-200/50">
                <ShieldCheck className="w-4.5 h-4.5 text-coral-400 shrink-0" />
                <span className="text-xs font-semibold text-carbon-700">Rehabilitación Integral</span>
              </div>
              <div className="inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sand-200/50">
                <HeartHandshake className="w-4.5 h-4.5 text-coral-400 shrink-0" />
                <span className="text-xs font-semibold text-carbon-700">Atención Interdisciplinaria</span>
              </div>
              <div className="inline-flex items-center gap-2.5 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-2xl border border-sand-200/50">
                <Sparkles className="w-4.5 h-4.5 text-sand-500 shrink-0" />
                <span className="text-xs font-semibold text-carbon-700">Técnicas Especializadas</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('#contacto')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-coral-400 hover:bg-coral-500 text-white font-semibold text-sm tracking-wide transition-all duration-400 shadow-xl shadow-coral-400/20 hover:shadow-2xl hover:shadow-coral-400/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Turno o Consulta</span>
              </button>

              <a
                href={`https://wa.me/${CONTACTS[0].waNumber}?text=${encodeURIComponent('Hola! Me comunico desde la web de KORPOREST para hacer una consulta.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/80 backdrop-blur-sm text-carbon-900 hover:text-coral-500 font-semibold text-sm border border-sand-200/60 transition-all duration-300 hover:border-coral-300 hover:bg-white"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            {/* Direct Professional Channels */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-carbon-700/55 font-medium">
              <span className="tracking-wide uppercase text-[0.6875rem] font-semibold">Líneas directas:</span>
              {CONTACTS.map((c) => (
                <a
                  key={c.id}
                  href={`${c.waUrl}?text=${encodeURIComponent(`Hola ${c.id === 'gisela' ? 'Gisela' : 'Vanesa'}! Me comunico desde la web de KORPOREST.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-coral-500 transition-colors font-semibold underline decoration-coral-200 hover:decoration-coral-400 underline-offset-4"
                >
                  <span>{c.display}</span>
                  <span className="text-carbon-700/35">({c.id === 'gisela' ? 'Gisela' : 'Vanesa'})</span>
                </a>
              ))}
            </div>
          </div>

          {/* Visual Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Editorial showcase card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.75rem] p-7 sm:p-8 border border-sand-200/50 shadow-2xl shadow-coral-400/8">

                {/* Card header */}
                <div className="flex items-center justify-between border-b border-sand-200/40 pb-5 mb-6">
                  <div>
                    <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-coral-400 uppercase">
                      Centro de Kinesiología
                    </span>
                    <h2 className="font-serif text-xl font-semibold text-carbon-900 mt-1">
                      Abordaje Integral
                    </h2>
                  </div>
                  <div className="h-11 w-11 rounded-2xl bg-blush-50 flex items-center justify-center text-coral-500 font-serif font-bold text-sm border border-blush-100">
                    KP
                  </div>
                </div>

                {/* Specialties preview */}
                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-blush-50/50 border border-blush-100/60 transition-all duration-300 hover:bg-blush-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[0.6875rem] font-semibold tracking-wide text-coral-500 uppercase">Área Traumatológica</span>
                        <h3 className="text-sm font-semibold text-carbon-900 mt-1">Lic. Gisela Pou</h3>
                      </div>
                      <span className="text-[0.6875rem] font-medium px-2.5 py-1 rounded-full bg-white text-coral-500 border border-blush-100">
                        Kinesiopilates
                      </span>
                    </div>
                    <p className="text-xs text-carbon-700/65 mt-2 leading-relaxed">
                      Rehabilitación funcional de lesiones musculo-esqueléticas y método Pilates terapéutico.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-sand-200/25 border border-sand-200/40 transition-all duration-300 hover:bg-sand-200/35">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[0.6875rem] font-semibold tracking-wide text-sand-500 uppercase">Área Flebolinfática</span>
                        <h3 className="text-sm font-semibold text-carbon-900 mt-1">Lic. Vanesa Pou</h3>
                      </div>
                      <span className="text-[0.6875rem] font-medium px-2.5 py-1 rounded-full bg-white text-sand-500 border border-sand-200/40">
                        Oncológica
                      </span>
                    </div>
                    <p className="text-xs text-carbon-700/65 mt-2 leading-relaxed">
                      Rehabilitación vascular, drenaje linfático manual y acompañamiento oncológico integral: prehabilitación, durante y después del tratamiento.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-5 border-t border-sand-200/40 flex items-center justify-between text-xs text-carbon-700/70">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-medium">Evaluación personalizada</span>
                  </div>
                  <span className="font-semibold text-coral-500">Hasta el alta médica</span>
                </div>
              </div>

              {/* Floating pills */}
              <div className="absolute -top-4 -right-3 sm:-right-4 bg-coral-400 text-white text-xs font-semibold px-4 py-2 rounded-2xl shadow-lg shadow-coral-400/30 rotate-2">
                Atención 1 a 1
              </div>
              <div className="absolute -bottom-4 -left-3 sm:-left-4 bg-carbon-900 text-white text-xs font-medium px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 -rotate-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Merced 1271 · Pergamino</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <button
          type="button"
          onClick={() => scrollToSection('#nosotros')}
          aria-label="Ir a la sección Nosotros"
          className="p-2 text-carbon-700/30 hover:text-coral-400 transition-colors animate-bounce"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
