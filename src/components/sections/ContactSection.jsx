import { offices } from '../../data/home.js'
import { site } from '../../data/site.js'
import Container from '../ui/Container.jsx'
import Eyebrow from '../ui/Eyebrow.jsx'
import Media from '../ui/Media.jsx'
import Reveal from '../ui/Reveal.jsx'
import ContactForm from './ContactForm.jsx'

const iconProps = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal className="order-2 rounded-lg bg-surface p-6 md:p-10 lg:order-1">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ink">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-3 text-ink hover:text-accent-dark">
                <svg {...iconProps}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 7l9 6 9-6" /></svg>
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">WhatsApp</p>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-3 text-ink hover:text-accent-dark">
                <svg {...iconProps}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" /></svg>
                {site.phone}
              </a>
            </div>
          </div>
          <p className="mt-8 mb-8 leading-relaxed text-slate-700">
            Ceritakan kebutuhan Anda melalui formulir di bawah ini. Tim kami akan menghubungi Anda dalam 1×24 jam kerja.
          </p>
          <ContactForm />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Hubungi Kami</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight font-medium tracking-tight text-ink md:text-6xl">
              Punya Pekerjaan Lapangan yang Ingin Didigitalkan?
              <span className="mt-1 block font-extrabold text-accent-dark">Ayo Mulai Sekarang!</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-5">
            {offices.map((o, i) => (
              <Reveal key={o.name} delay={i * 100}>
                <div
                  className={`relative overflow-hidden rounded-lg border p-7 ${
                    i === 0 ? 'border-accent bg-accent-soft/40' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="relative z-10 max-w-[60%]">
                    <h3 className="text-2xl font-semibold text-ink">{o.name}</h3>
                    <p className="mt-2 text-slate-700">{o.address}</p>
                  </div>
                  <Media
                    src={o.image}
                    alt={`Foto ${o.name}`}
                    tone="light"
                    fill
                    className="left-auto w-2/5 [mask-image:linear-gradient(to_right,transparent,black_35%)]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
