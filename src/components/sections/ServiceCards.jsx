import { Link } from 'react-router-dom'
import { services } from '../../data/services.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function ServiceCards({ showHeading = true }) {
  return (
    <section className="py-20 md:py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Layanan"
            title="Solusi digital dari ide sampai rilis"
            description="Kami menangani desain, pengembangan, hingga perawatan agar Anda bisa fokus ke bisnis."
          />
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link
                to={`/layanan/${s.slug}`}
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-accent-dark">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-accent-dark">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
