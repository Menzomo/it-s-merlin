import { MapPin, Phone } from 'lucide-react'
import { NeonTitle } from '@/components/neon-title'

const WHATSAPP_URL =
  'https://wa.me/5554996424914?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20um%20hor%C3%A1rio.'
const MAPS_QUERY = encodeURIComponent("it's Merlin Rua Miguel Bertelli 340 Cidade Nova Caxias do Sul RS")

export function Contato() {
  return (
    <section id="contato" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <NeonTitle text="Vamos marcar?" as="h2" className="text-4xl md:text-5xl" />
        <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
          Chama a gente no WhatsApp e garanta o horário do seu melhor amigo. É rapidinho!
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border-magenta flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-6 w-6" />
              (54) 99642-4914
            </a>

            <div className="glow-border-green flex items-start gap-4 rounded-2xl bg-card p-6">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-neon-green" />
              <div>
                <h3 className="font-bold text-foreground">Onde estamos</h3>
                <p className="mt-1 text-muted-foreground">
                  Rua Miguel Bertelli, 340
                  <br />
                  Cidade Nova · Caxias do Sul/RS
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-bold text-neon-green underline-offset-4 hover:underline"
                >
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="glow-border-magenta overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mapa da localização do it's Merlin Pet Shop"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
