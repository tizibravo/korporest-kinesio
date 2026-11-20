import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { CONTACTS, SITE } from '../data/korporestData'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">

      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-sand-200/40 overflow-hidden animate-fade-up luminous-border">

          {/* Header */}
          <div className="bg-coral-400 text-white p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/8 rounded-full blur-2xl" />
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-tight">
                    KORPOREST Pergamino
                  </h3>
                  <p className="text-[11px] text-white/75 mt-0.5">
                    Atención por WhatsApp
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
                aria-label="Cerrar ventana de WhatsApp"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/85 mt-3.5 leading-relaxed relative">
              Hola, ¿con cuál de nuestras especialistas te gustaría comunicarte?
            </p>
          </div>

          {/* Options */}
          <div className="p-4 space-y-2.5 bg-white">
            {CONTACTS.map((c) => {
              const isGisela = c.id === 'gisela'
              const area = isGisela
                ? 'Traumatología & Kinesiopilates'
                : 'Flebolinfática & Oncológica'
              const customMessage = `Hola ${isGisela ? 'Gisela' : 'Vanesa'}! Me comunico desde la web de KORPOREST para hacer una consulta.`

              return (
                <a
                  key={c.id}
                  href={`${c.waUrl}?text=${encodeURIComponent(customMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-blush-50/50 hover:bg-coral-400 border border-blush-100/70 hover:border-coral-400 text-carbon-900 hover:text-white transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white group-hover:bg-white/20 flex items-center justify-center text-coral-500 group-hover:text-white font-serif font-bold text-sm shadow-sm transition-colors">
                      {isGisela ? 'G' : 'V'}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-coral-500 group-hover:text-white transition-colors">
                        {isGisela ? 'Lic. Gisela Pou' : 'Lic. Vanesa Pou'}
                      </div>
                      <div className="text-[11px] text-carbon-700/55 group-hover:text-white/80 transition-colors">
                        {area}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-coral-400 group-hover:text-white">
                    →
                  </span>
                </a>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-ivory-200 border-t border-sand-200/30 text-[10px] text-carbon-700/45 text-center">
            {SITE.address}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir WhatsApp Korporest"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Subtle pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-pulse-ring pointer-events-none" />
        )}

        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 fill-current" />
        )}
      </button>
    </div>
  )
}
