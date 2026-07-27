import { Check, PawPrint } from 'lucide-react'
import { NeonTitle } from '@/components/neon-title'

const planos = [
  {
    nome: 'Básica',
    color: 'green' as const,
    tagline: 'O essencial caprichado',
    itens: ['Banho com produtos adequados', 'Secagem e escovação', 'Tosa higiênica', 'Corte de unhas'],
    destaque: false,
  },
  {
    nome: 'Premium',
    color: 'magenta' as const,
    tagline: 'A escolha favorita da galera',
    itens: [
      'Tudo da Básica',
      'Tosa na tesoura ou máquina',
      'Limpeza de ouvidos',
      'Perfume e acabamento',
    ],
    destaque: true,
  },
  {
    nome: 'Luxo',
    color: 'green' as const,
    tagline: 'Spa completo de rei e rainha',
    itens: [
      'Tudo da Premium',
      'Hidratação especial de pelagem',
      'Cuidado hipoalergênico',
      'Mimo extra de brinde',
    ],
    destaque: false,
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-col gap-3">
          <NeonTitle text="Nossos serviços" as="h2" className="text-4xl md:text-5xl" />
          <p className="max-w-xl text-pretty text-lg text-muted-foreground">
            Escolha o pacote com a cara do seu pet. Todos com muito carinho incluso.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {planos.map((plano) => {
            const glow = plano.color === 'green' ? 'glow-border-green' : 'glow-border-magenta'
            const neon = plano.color === 'green' ? 'neon-green' : 'neon-magenta'
            const check = plano.color === 'green' ? 'text-neon-green' : 'text-neon-magenta'
            return (
              <div
                key={plano.nome}
                className={`${glow} relative flex flex-col rounded-3xl bg-card p-6 ${plano.destaque ? 'md:-translate-y-3' : ''}`}
              >
                {plano.destaque && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    Mais pedida
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <PawPrint className={`h-6 w-6 ${check}`} />
                  <h3 className={`font-marker text-3xl ${neon}`}>{plano.nome}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plano.tagline}</p>

                <ul className="mt-6 flex flex-col gap-3">
                  {plano.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${check}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5554996424914?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20tosa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:scale-105 ${
                    plano.destaque
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border text-foreground hover:border-neon-green hover:text-neon-green'
                  }`}
                >
                  Agendar {plano.nome}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
