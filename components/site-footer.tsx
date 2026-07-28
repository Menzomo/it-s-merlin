import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-4 py-10 text-center sm:grid-cols-[1fr_auto_1fr]">
        <div className="flex items-center justify-center gap-3 sm:justify-self-start">
          <Image
            src="/images/logo-merlin.png"
            alt="it's Merlin! Estética Animal"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover"
          />
          <div className="text-left">
            <p className="font-marker text-base">
              <span className="neon-magenta">it&apos;s</span>{' '}
              <span className="neon-green">Merlin!</span>
            </p>
            <p className="text-xs text-muted-foreground">Estética Animal · Caxias do Sul/RS</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground sm:col-start-2">
          © {new Date().getFullYear()} it&apos;s Merlin! Pet Shop. Feito com carinho para os pets.
        </p>
      </div>
    </footer>
  )
}
