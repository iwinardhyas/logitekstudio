import { useParams } from 'react-router-dom'
import { services } from '../data/services.js'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  return (
    <>
      <PageHeader title={service.title} description={service.summary} />
      <section className="py-20">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-bold text-ink">Yang kami kerjakan</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.points.map((point) => (
              <li key={point} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBanner />
    </>
  )
}
