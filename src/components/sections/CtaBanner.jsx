import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function CtaBanner() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal className="rounded-3xl bg-navy px-8 py-14 text-center md:px-16">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">Punya ide aplikasi?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Ceritakan cara kerja tim Anda sehari-hari, kami bantu rancang aplikasi yang paling pas.
          </p>
          <Button to="/kontak" className="mt-8">Mulai Diskusi</Button>
        </Reveal>
      </Container>
    </section>
  )
}
