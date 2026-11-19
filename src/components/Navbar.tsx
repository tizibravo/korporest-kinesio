import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE, CONTACTS, PRIMARY_WA } from '../data/korporestData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-coral-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio') }}
            className="flex flex-col leading-none group"
          >
            <span className="text-xl font-extrabold tracking-tight text-carbon-900 group-hover:text-coral-500 transition-colors">
              KORPOREST
            </span>
            <span className="text-xs font-medium text-beige-300 tracking-widest uppercase">
              Pergamino
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm font-medium text-carbon-800 hover:text-coral-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PRIMARY_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-coral-400/30 hover:scale-105"
            >
              <Phone size={14} />
              Reservar Turno
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-carbon-800 hover:bg-coral-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-coral-100 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="block py-2.5 px-3 text-sm font-medium text-carbon-800 hover:text-coral-500 hover:bg-coral-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            {CONTACTS.map((c) => (
              <a
                key={c.id}
                href={c.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-coral-500 text-white py-2.5 rounded-full text-sm font-semibold"
              >
                <Phone size={14} />
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
