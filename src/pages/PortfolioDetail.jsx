import { Link, useParams } from 'react-router-dom'
import { portfolio } from '../data/portfolio.js'
import Container from '../components/ui/Container.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import NotFound from './NotFound.jsx'

export default function PortfolioDetail() {
  const { slug } = useParams()
  const item = portfolio.find((p) => p.slug === slug)
  if (!item) return <NotFound />

  return (
    <>
      <article className="py-16 md:py-20">
        <Container className="max-w-4xl">
          <Link to="/portfolio" className="text-sm font-medium text-accent-dark hover:underline">← Kembali ke Portfolio</Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-accent-dark">{item.category}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink md:text-5xl">{item.title}</h1>
          <p className="mt-3 text-slate-600">Klien: {item.client}</p>
          {item.image && (
            <div className="mt-10 overflow-hidden rounded-lg bg-surface">
              <img src={item.image} alt={item.title} className="mx-auto max-h-[44rem] w-auto object-contain" />
            </div>
          )}
          <p className="mt-10 text-lg leading-relaxed text-slate-700">{item.body}</p>
        </Container>
      </article>
      <CtaBanner />
    </>
  )
}
