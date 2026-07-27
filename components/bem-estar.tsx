import Image from 'next/image'
import { ShieldCheck, Sparkles, Leaf } from 'lucide-react'
import { NeonTitle } from '@/components/neon-title'

const itens = [
  {
    icon: Leaf,
    color: 'green' as const,
    title: 'Cuidado hipoalergênico',
    desc: 'Produtos suaves e seguros para pets de pele sensível e que precisam de atenção extra.',
  },
  {
    icon: ShieldCheck,
    color: 'magenta' as const,
    title: 'Ambiente low-stress',
    desc: 'Espaço calmo e acolhedor para reduzir a ansiedade e deixar seu pet tranquilo.',
  },
  {
    icon: Sparkles,
    color: 'green' as const,
    title: 'Seguro e higiênico',
    desc: 'Higiene rigorosa e manejo cuidadoso do começo ao fim do atendimento.',
  },
]

export function BemEstar() {
  return (
    <section id="bem-estar" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <div className="glow-border-green overflow-hidden rounded-3xl bg-card">
            <Image
              src="/images/spa-dog.png"
              alt="Pet relaxando durante o banho em ambiente tranquilo"
              width={720}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <NeonTitle text="Bem-estar em primeiro lugar" as="h2" start="green" className="text-4xl md:text-5xl" />
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Pets sensíveis merecem cuidado especial. Por isso o nosso ambiente é pensado para ser
            seguro, calmo e sem estresse — do primeiro carinho ao secar.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {itens.map((item) => {
              const Icon = item.icon
              const glow = item.color === 'green' ? 'glow-border-green' : 'glow-border-magenta'
              const neon = item.color === 'green' ? 'text-neon-green' : 'text-neon-magenta'
              return (
                <div key={item.title} className={`${glow} flex gap-4 rounded-2xl bg-card p-5`}>
                  <Icon className={`h-7 w-7 shrink-0 ${neon}`} />
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
