import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { portfolio } from '../../data/portfolio.js'
import { posts } from '../../data/posts.js'
import Container from '../ui/Container.jsx'
import Media from '../ui/Media.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const tones = ['navy', 'teal', 'light']

const items = [
  ...portfolio.map((p) => ({ key: p.slug, tag: 'Portofolio', title: p.title, image: p.image, to: `/portfolio/${p.slug}` })),
  ...posts.map((p) => ({ key: p.slug, tag: 'Artikel', title: p.title, image: p.image, to: `/blog/${p.slug}` })),
]

export default function Highlights() {
  const track = useRef(null)

  const scroll = (dir) => track.current.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="overflow-hidden rounded-2xl bg-surface py-14 md:py-16">
          <div className="flex flex-col gap-8 px-6 md:px-12 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Sorotan" title="Hasil Kerja Kami" highlight="di Lapangan" className="mb-0" />
            <div className="flex flex-col gap-6 lg:max-w-sm lg:items-end">
              <p className="text-slate-600">
                Jelajahi studi kasus, portofolio, dan artikel kami untuk melihat bagaimana pekerjaan lapangan diubah
                menjadi sistem yang rapi dan terukur.
              </p>
              <div className="flex gap-3">
                {[
                  { dir: -1, label: 'Geser ke kiri', d: 'M15 6l-6 6 6 6' },
                  { dir: 1, label: 'Geser ke kanan', d: 'M9 6l6 6-6 6' },
                ].map(({ dir, label, d }) => (
                  <button
                    key={dir}
                    type="button"
                    aria-label={label}
                    onClick={() => scroll(dir)}
                    className="grid h-12 w-12 place-items-center rounded-md border border-slate-300 bg-white text-ink transition-colors hover:border-accent hover:text-accent-dark"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={d} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Reveal>
            <div
              ref={track}
              className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 md:scroll-px-12 md:px-12"
            >
              {items.map((item, i) => (
                <Link
                  key={item.key}
                  to={item.to}
                  className="group relative aspect-[3/4] w-[75%] shrink-0 snap-start overflow-hidden rounded-lg sm:w-[45%] lg:w-[calc((100%-3.75rem)/3.5)]"
                >
                  <Media
                    src={item.image}
                    alt=""
                    tone={tones[i % tones.length]}
                    fill
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/5" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block rounded-sm border border-white/60 px-3 py-1 text-sm font-medium text-white">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 line-clamp-3 text-2xl leading-snug font-bold text-white">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
