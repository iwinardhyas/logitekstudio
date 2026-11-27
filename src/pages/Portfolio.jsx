import { portfolio } from '../data/portfolio.js'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import PortfolioCard from '../components/ui/PortfolioCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Portfolio" description="Beberapa project yang telah kami kerjakan bersama klien." />
      <section className="py-20">
        <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  )
}
