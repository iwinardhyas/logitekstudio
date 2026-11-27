import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <p className="text-sm font-semibold text-accent-dark">404</p>
        <h1 className="mt-2 text-4xl font-bold text-ink">Halaman tidak ditemukan</h1>
        <p className="mt-4 text-slate-600">Halaman yang Anda cari mungkin sudah dipindahkan atau tidak ada.</p>
        <Button to="/" className="mt-8">Kembali ke Beranda</Button>
      </Container>
    </section>
  )
}
