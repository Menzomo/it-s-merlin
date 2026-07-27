import { Star } from 'lucide-react'

export function Satisfacao() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="glow-border-magenta flex flex-col items-center gap-6 rounded-3xl bg-card px-6 py-12 text-center">
          <div
            className="glow-border-green flex h-28 w-28 flex-col items-center justify-center rounded-full bg-background"
            aria-hidden="true"
          >
            <span className="font-marker text-3xl neon-green leading-none">100%</span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              satisfação
            </span>
          </div>

          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-neon-magenta text-neon-magenta" />
            ))}
          </div>

          <h2 className="font-marker max-w-2xl text-3xl md:text-4xl">
            <span className="neon-magenta">100%</span> <span className="neon-green">de satisfação</span>{' '}
            <span className="neon-magenta">em pesquisa</span> <span className="neon-green">com clientes</span>
          </h2>
          <p className="max-w-md text-pretty text-muted-foreground">
            Quem traz o pet aqui, volta sempre — e ainda indica pra quem ama bicho tanto quanto a
            gente.
          </p>
        </div>
      </div>
    </section>
  )
}
