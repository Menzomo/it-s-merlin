import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { QuemSomos } from '@/components/quem-somos'
import { BemEstar } from '@/components/bem-estar'
import { Servicos } from '@/components/servicos'
import { Satisfacao } from '@/components/satisfacao'
import { Horario } from '@/components/horario'
import { Contato } from '@/components/contato'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <QuemSomos />
        <BemEstar />
        <Servicos />
        <Satisfacao />
        <Horario />
        <Contato />
      </main>
      <SiteFooter />
    </div>
  )
}
