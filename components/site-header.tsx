'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#bem-estar', label: 'Bem-estar' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#horario', label: 'Horário' },
  { href: '#contato', label: 'Contato' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo-merlin.png"
            alt="it's Merlin! Estética Animal"
            width={48}
            height={48}
            className="h-11 w-11 rounded-lg object-cover"
            priority
          />
          <span className="font-marker text-lg">
            <span className="neon-magenta">it&apos;s</span>{' '}
            <span className="neon-green">Merlin!</span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-neon-green"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href="https://wa.me/5554996424914"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-border-magenta hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'grid overflow-hidden border-t border-border transition-all md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-t-0',
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-neon-green"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5554996424914"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-bold text-primary-foreground"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
