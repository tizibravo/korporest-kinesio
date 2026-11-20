import { Star, ExternalLink, HeartHandshake } from 'lucide-react'
import { SITE } from '../data/korporestData'
import Reveal from './Reveal'

function GoogleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  )
}

export default function Reviews() {
  return (
    <section id="resenas" className="py-20 sm:py-24 bg-ivory-100 relative overflow-hidden">

      {/* Ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[24rem] bg-blush-100/30 rounded-full blur-[6rem]" />
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-sand-200/15 rounded-full blur-[5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* VIP Invitation Card */}
        <Reveal>
          <div className="relative mx-auto max-w-4xl rounded-[1.75rem] p-8 sm:p-12 lg:p-14 border border-blush-100/60 luminous-border overflow-hidden bg-gradient-to-br from-ivory-100 via-blush-50/50 to-ivory-200">

            {/* Top luminous strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-coral-400 to-sand-300" />

            {/* Decorative gold stars background */}
            <div className="absolute top-6 right-8 flex gap-1.5 opacity-20">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="absolute bottom-6 left-8 flex gap-1.5 opacity-15">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
              ))}
            </div>

            <div className="text-center space-y-7 max-w-2xl mx-auto relative">

              {/* Google badge & gold stars */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sand-200/50 shadow-sm">
                  <GoogleIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold text-carbon-900 tracking-wide">
                    Google Maps
                  </span>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold-400 text-gold-400 drop-shadow-sm"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Eyebrow */}
              <span className="block text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-coral-500">
                Tu experiencia nos importa
              </span>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-carbon-900 tracking-tight leading-tight">
                ¿Ya te atendiste en KORPOREST?
                <span className="block text-coral-400 italic font-medium mt-1.5">
                  Dejanos tu reseña en Google
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-carbon-700/70 leading-[1.7]">
                Agradecemos profundamente tu confianza en nuestro centro. Compartir cómo fue tu experiencia de atención y tratamiento ayuda a que más personas en Pergamino y la región nos conozcan y encuentren la rehabilitación que necesitan.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-coral-400 hover:bg-coral-500 text-white font-semibold text-sm tracking-wide transition-all duration-400 shadow-xl shadow-coral-400/20 hover:shadow-2xl hover:shadow-coral-400/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                    <GoogleIcon className="w-4 h-4" />
                  </div>
                  <span>Dejar reseña en Google</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>

              {/* Sub-note */}
              <div className="pt-4 flex items-center justify-center gap-2 text-xs text-carbon-700/45">
                <HeartHandshake className="w-4 h-4 text-coral-300 shrink-0" />
                <span>Solo te tomará un minuto y tu opinión es de gran valor para nuestro equipo.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
