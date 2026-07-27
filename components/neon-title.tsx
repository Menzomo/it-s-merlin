import { cn } from '@/lib/utils'

type NeonTitleProps = {
  text: string
  className?: string
  /** cor da primeira palavra: 'magenta' ou 'green' */
  start?: 'magenta' | 'green'
  as?: 'h1' | 'h2' | 'h3'
}

/**
 * Título estilo banner de promoção: fonte marcador com brilho neon,
 * alternando magenta e verde entre as palavras.
 */
export function NeonTitle({ text, className, start = 'magenta', as = 'h2' }: NeonTitleProps) {
  const Tag = as
  const words = text.split(' ')
  const colors = ['neon-magenta', 'neon-green'] as const
  const offset = start === 'magenta' ? 0 : 1

  return (
    <Tag className={cn('font-marker leading-[1.05] tracking-wide text-balance', className)}>
      {words.map((word, i) => (
        <span key={i} className={colors[(i + offset) % 2]}>
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
