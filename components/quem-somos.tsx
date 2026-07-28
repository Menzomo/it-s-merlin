import { Heart, Users } from 'lucide-react'
import { NeonTitle } from '@/components/neon-title'

export function QuemSomos() {
  return (
    <section id="quem-somos" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <NeonTitle text="Quem somos" as="h2" className="text-4xl md:text-5xl" />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              O <span className="font-bold text-foreground">it&apos;s Merlin!</span> é um pet shop
              pequeno, familiar e apaixonado por bichos. Somos{' '}
              <span className="neon-magenta font-bold">duas pessoas</span> cuidando de cada pet como
              se fosse nosso: com calma, atenção e aquele carinho de quem entende que seu melhor
              amigo é parte da família.
            </p>
            <p className="mt-12 text-pretty text-lg leading-relaxed text-muted-foreground ">
              Sem correria e sem linha de produção — aqui o atendimento é próximo, personalizado e
              feito no ritmo de cada animal.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="glow-border-green flex items-center gap-4 rounded-2xl bg-card p-5">
              <Users className="h-8 w-8 shrink-0 text-neon-green" />
              <div>
                <p className="font-marker text-2xl neon-green">2</p>
                <p className="text-sm text-muted-foreground">pessoas dedicadas ao seu pet</p>
              </div>
            </div>
            <div className="glow-border-magenta flex items-center gap-4 rounded-2xl bg-card p-5">
              <Heart className="h-8 w-8 shrink-0 text-neon-magenta" />
              <div>
                <p className="font-marker text-2xl neon-magenta">100%</p>
                <p className="text-sm text-muted-foreground">amor por bichos, sempre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
