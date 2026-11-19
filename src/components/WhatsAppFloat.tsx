import { useState } from 'react'
import { MessageCircle, X, Phone, Sparkles } from 'lucide-react'
import { CONTACTS, SITE } from '../data/korporestData'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-coral-100 overflow-hidden animate-fade-up">
          
          {/* Header */}
          <div className="bg-coral-500 text-white p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">
                    KORPOREST Pergamino
                  </h3>
                  <p className="text-[11px] text-white/80">
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
            <p className="text-xs text-white/90 mt-3 leading-relaxed">
              Hola 👋 ¿Con cuál de nuestras especialistas te gustaría comunicarte?
            </p>
          </div>

          {/* Options */}
          <div className="p-4 space-y-2.5 bg-white">
            {CONTACTS.map((c) => {
              const isGisela = c.id === 'gisela'
              const area = isGisela
                ? 'Traumatología & Kinesiopilates'
                : 'Flebolinfática & Oncológica'
              const customMessage = `Hola ${c.label.replace(
                'WhatsApp ',
                ''
              )}! Me comunico desde la web de KORPOREST para hacer una consulta.`

              return (
                <a
                  key={c.id}
                  href={`${c.waUrl}?text=${encodeURIComponent(customMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-coral-50/50 hover:bg-coral-500 border border-coral-100/80 hover:border-coral-500 text-carbon-900 hover:text-white transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center text-coral-500 group-hover:text-white shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-coral-600 group-hover:text-white transition-colors">
                        {c.label.replace('WhatsApp ', '')}
                      </div>
                      <div className="text-[11px] text-carbon-800/60 group-hover:text-white/80 transition-colors">
                        {area}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-coral-500 group-hover:text-white">
                    &rarr;
                  </span>
                </a>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 text-[10px] text-carbon-800/50 text-center">
            {SITE.address}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir WhatsApp Korporest"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/35 hover:shadow-xl hover:shadow-emerald-500/45 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {/* Pulsing indicator ring */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />
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
