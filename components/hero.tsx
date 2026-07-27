import Image from 'next/image'
import { MapPin, PawPrint } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="glow-border-green inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-neon-green">
            <PawPrint className="h-4 w-4" />
            Estética Animal
          </span>

          <h1 className="font-marker text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            <span className="neon-magenta">it&apos;s</span>{' '}
            <span className="neon-green">Merlin!</span>
          </h1>

          <p className="max-w-md text-pretty text-2xl font-bold text-foreground sm:text-3xl">
            Seu pet merece um <span className="neon-magenta">spa</span> e{' '}
            <span className="neon-green">tanto!</span>
          </p>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Banho, tosa e muito carinho num ambiente leve, seguro e divertido. Aqui cada
            focinho sai brilhando e feliz da vida.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/5554996424914?text=Ol%C3%A1!%20Quero%20agendar%20um%20hor%C3%A1rio%20no%20it%27s%20Merlin."
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border-magenta rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-border px-6 py-3 text-base font-bold text-foreground transition-colors hover:border-neon-green hover:text-neon-green"
            >
              Ver serviços
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-neon-green" />
            Rua Miguel Bertelli, 340 · Cidade Nova · Caxias do Sul/RS
          </div>
        </div>

        <div className="relative">
          <div className="glow-border-magenta overflow-hidden rounded-3xl bg-card">
            <Image
              src="/images/hero-dog.png"
              alt="Cachorro tosado e feliz sob luzes neon"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
