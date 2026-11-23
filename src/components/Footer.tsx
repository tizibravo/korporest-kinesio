import { MapPin, ArrowUp, ArrowRight } from 'lucide-react'
import { SITE, CONTACTS, NAV_LINKS } from '../data/korporestData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-carbon-900 text-white pt-20 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral-400/6 rounded-full blur-[6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                KORPOREST
              </span>
              <span className="text-[0.6875rem] font-semibold text-coral-400 tracking-[0.2em] uppercase mt-1.5">
                Pergamino · Kinesiología y Fisiatría
              </span>
            </div>

            <p className="text-sm text-white/55 leading-[1.7] max-w-sm">
              Centro de Kinesiología y Fisiatría dirigido por las licenciadas Gisela Pou y Vanesa Pou. Compromiso con la rehabilitación integral y la calidad de vida de cada paciente.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/75">
              <MapPin className="w-4 h-4 text-coral-400 shrink-0" />
              <span>{SITE.address}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-coral-400">
              Navegación
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-sm text-white/55 hover:text-coral-400 transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Lines */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-coral-400">
              Atención y Turnos
            </h4>
            <p className="text-xs text-white/55 leading-relaxed">
              Coordinamos consultas directamente por WhatsApp con cada profesional:
            </p>

            <div className="space-y-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.id}
                  href={`${c.waUrl}?text=${encodeURIComponent(`Hola ${c.id === 'gisela' ? 'Gisela' : 'Vanesa'}! Quisiera consultar por un turno en KORPOREST.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-coral-400/20 text-coral-400 flex items-center justify-center font-serif text-sm font-bold">
                      {c.id === 'gisela' ? 'G' : 'V'}
                    </div>
                    <div>
                      <div className="text-[0.6875rem] font-medium text-white/45">
                        {c.id === 'gisela' ? 'Lic. Gisela Pou' : 'Lic. Vanesa Pou'}
                      </div>
                      <div className="text-sm font-semibold tracking-wide">
                        {c.display}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} KORPOREST Pergamino. Todos los derechos reservados.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-coral-400 transition-colors cursor-pointer text-white/50"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
