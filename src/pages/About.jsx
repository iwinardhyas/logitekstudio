import { site } from '../data/site.js'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

// TODO: tambah visi-misi dan profil tim
const values = [
  { title: 'Berangkat dari lapangan', text: 'Kami mempelajari cara kerja pengguna sehari-hari sebelum menulis satu baris kode.' },
  { title: 'Tetap jalan tanpa sinyal', text: 'Data tersimpan di perangkat dan tersinkron otomatis saat koneksi kembali.' },
  { title: 'Cepat & mudah dipelajari', text: 'Antarmuka ringkas sehingga tim bisa langsung memakai tanpa pelatihan panjang.' },
]

export default function About() {
  return (
    <>
      <PageHeader title={`Tentang ${site.name}`} description={site.tagline} />
      <section className="pt-20">
        <Container className="max-w-3xl">
          <p className="text-xl leading-relaxed text-ink">{site.about}</p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="rounded-2xl border border-slate-200 bg-white p-7">
              <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-accent" />
              <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-slate-600">{v.text}</p>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  )
}
