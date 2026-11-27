import PageHeader from '../components/ui/PageHeader.jsx'
import ServiceCards from '../components/sections/ServiceCards.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function Service() {
  return (
    <>
      <PageHeader
        title="Layanan"
        description="Dari perencanaan hingga perawatan, kami siap mendampingi transformasi digital bisnis Anda."
      />
      <ServiceCards showHeading={false} />
      <CtaBanner />
    </>
  )
}
