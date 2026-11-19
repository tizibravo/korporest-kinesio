import { MapPin, Phone, ArrowUp } from 'lucide-react'
import { SITE, CONTACTS, NAV_LINKS, PRIMARY_WA } from '../data/korporestData'

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 76
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-carbon-900 text-white pt-20 pb-12 border-t border-carbon-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                KORPOREST
              </span>
              <span className="text-xs font-semibold text-coral-400 tracking-widest uppercase mt-1">
                Pergamino · Kinesiología y Fisiatría
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm font-normal">
              Centro de Kinesiología y Fisiatría dirigido por las licenciadas Gisela Pou y Vanesa Pou. Compromiso con la rehabilitación integral y la calidad de vida de cada paciente.
            </p>

            {/* Address badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-coral-400 shrink-0" />
              <span>{SITE.address}</span>
            </div>

            {/* Social */}
            <div className="pt-2">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-coral-400 transition-colors bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10"
              >
                <InstagramIcon className="w-4 h-4 text-coral-400" />
                <span>{SITE.instagram}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-coral-400">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-sm text-white/65 hover:text-coral-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Lines (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-coral-400">
              Atención y Turnos
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Coordinamos consultas directamente por WhatsApp con cada profesional:
            </p>

            <div className="space-y-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.id}
                  href={c.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-coral-500/20 text-coral-400 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white/50">
                        {c.label}
                      </div>
                      <div className="text-sm font-semibold tracking-wide">
                        {c.display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-coral-400 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} KORPOREST Pergamino. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-coral-400 transition-colors cursor-pointer text-white/60"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
