import { Clock } from 'lucide-react'
import { NeonTitle } from '@/components/neon-title'

const horarios = [
  { dia: 'Terça a Sexta', horas: '8h30 às 18h', aberto: true },
  { dia: 'Sábado', horas: '8h às 17h', aberto: true },
  { dia: 'Domingo', horas: 'Fechado', aberto: false },
  { dia: 'Segunda', horas: 'Fechado', aberto: false },
]

export function Horario() {
  return (
    <section id="horario" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex items-center gap-3">
          <Clock className="h-8 w-8 text-neon-green" />
          <NeonTitle text="Horário de funcionamento" as="h2" start="green" className="text-4xl md:text-5xl" />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {horarios.map((h) => (
            <div
              key={h.dia}
              className={`rounded-2xl bg-card p-5 ${h.aberto ? 'glow-border-green' : 'border border-border'}`}
            >
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                {h.dia}
              </p>
              <p
                className={`mt-2 text-lg font-bold ${h.aberto ? 'text-neon-green' : 'text-muted-foreground'}`}
              >
                {h.horas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
