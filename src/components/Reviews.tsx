import { Star, ExternalLink, HeartHandshake, Sparkles } from 'lucide-react'
import { SITE } from '../data/korporestData'

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
    <section id="resenas" className="py-20 bg-white relative overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[22rem] bg-coral-100/35 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-beige-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Card Container */}
        <div className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-white via-coral-50/40 to-white p-8 sm:p-12 lg:p-14 border border-coral-100 shadow-xl shadow-coral-500/5 overflow-hidden">
          
          {/* Top aesthetic accent strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-coral-400 via-coral-500 to-beige-300" />

          <div className="text-center space-y-6 max-w-2xl mx-auto">
            
            {/* Stars row & Google badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-coral-200/80 shadow-xs">
                <GoogleIcon className="w-4 h-4" />
                <span className="text-xs font-bold text-carbon-900 tracking-wide">
                  Google Maps
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-semibold text-coral-600 bg-coral-50 px-3 py-1 rounded-full border border-coral-100">
                <Sparkles className="w-3 h-3 text-coral-500" />
                <span>Tu experiencia nos importa</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-carbon-900 tracking-tight leading-tight">
              ¿Ya te atendiste en KORPOREST?{' '}
              <span className="text-coral-500 block sm:inline">
                Dejanos tu reseña en Google
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-carbon-800/75 leading-relaxed font-normal">
              Agradecemos profundamente tu confianza en nuestro centro. Compartir cómo fue tu experiencia de atención y tratamiento ayuda a que más personas en Pergamino y la región nos conozcan y encuentren la rehabilitación que necesitan.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-coral-500/25 hover:shadow-xl hover:shadow-coral-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                  <GoogleIcon className="w-3.5 h-3.5" />
                </div>
                <span>Dejar reseña en Google</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Sub-note */}
            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-carbon-800/50">
              <HeartHandshake className="w-4 h-4 text-coral-400 shrink-0" />
              <span>Solo te tomará un minuto y tu opinión es de gran valor para nuestro equipo.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
