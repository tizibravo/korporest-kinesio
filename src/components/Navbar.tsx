import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import { NAV_LINKS, CONTACTS, IMAGE_ASSETS } from '../data/korporestData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-sand-200/60 shadow-[0_4px_30px_-10px_rgba(30,30,36,0.08)]'
          : 'bg-white/40 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            className="flex flex-col leading-none group"
          >
            <img
              src={IMAGE_ASSETS.logo}
              alt="KORPOREST"
              className="h-10 md:h-12 w-auto max-w-[12rem] object-cover object-left rounded-md"
            />
            <span className="text-[0.625rem] font-medium text-[#7AC7D4] tracking-[0.2em] uppercase mt-0.5">
              Pergamino · Kinesiología
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-carbon-700 hover:text-coral-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-coral-400 group-hover:w-full transition-all duration-400 ease-out" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACTS[0].waNumber}?text=${encodeURIComponent('Hola! Quisiera reservar un turno o hacer una consulta en KORPOREST.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-coral-400 hover:bg-coral-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-coral-400/20 hover:shadow-lg hover:shadow-coral-400/30 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Reservar Turno
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-carbon-700 hover:bg-blush-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-sand-200/50 px-5 pb-6 pt-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="block py-3 px-4 text-sm font-medium text-carbon-700 hover:text-coral-400 hover:bg-blush-50/60 rounded-xl transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2.5">
            <a
              href={`https://wa.me/${CONTACTS[0].waNumber}?text=${encodeURIComponent('Hola! Quisiera reservar un turno o hacer una consulta en KORPOREST.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center bg-coral-400 text-white py-3 rounded-full text-sm font-semibold shadow-md shadow-coral-400/20"
            >
              <Calendar className="w-4 h-4" />
              Reservar Turno
            </a>
            {CONTACTS.map((c) => (
              <a
                key={c.id}
                href={`${c.waUrl}?text=${encodeURIComponent(`Hola ${c.id === 'gisela' ? 'Gisela' : 'Vanesa'}! Quisiera consultar por un turno en KORPOREST.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-blush-50 text-coral-500 border border-blush-100 py-3 rounded-full text-sm font-semibold"
              >
                {c.id === 'gisela' ? 'Gisela Pou' : 'Vanesa Pou'} · {c.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
