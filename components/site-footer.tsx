import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-merlin.png"
            alt="it's Merlin! Estética Animal"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover"
          />
          <div>
            <p className="font-marker text-base">
              <span className="neon-magenta">it&apos;s</span>{' '}
              <span className="neon-green">Merlin!</span>
            </p>
            <p className="text-xs text-muted-foreground">Estética Animal · Caxias do Sul/RS</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} it&apos;s Merlin! Pet Shop. Feito com carinho para os pets.
        </p>
      </div>
    </footer>
  )
}
