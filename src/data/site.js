// TODO: konfirmasi kota; ganti link sosmed dengan akun asli
const city = 'Palu'

export const site = {
  name: 'Logitek Studio',
  legalName: 'PT Logika Teknologi Studio',
  tagline: 'Solusi Digital untuk Bisnis yang Terus Tumbuh.',
  description:
    'Kami membangun aplikasi mobile dan web untuk pekerjaan nyata di lapangan: cepat, bisa dipakai tanpa sinyal, dan mudah dipelajari.',
  about: `PT Logika Teknologi Studio adalah studio pengembangan perangkat lunak yang berbasis di ${city}. Kami membangun aplikasi mobile dan web untuk pekerjaan nyata di lapangan, seperti alat kerja inspektor, sistem laporan, dan dashboard admin. Kami memulai dari cara kerja pengguna sehari-hari, lalu membuat aplikasi yang cepat, bisa dipakai tanpa sinyal, dan mudah dipelajari.`,
  email: 'kontak@logitekstudio.my.id',
  phone: '0851-5543-4616',
  whatsapp: '6285155434616',
  address: `${city}, Indonesia`,
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],
}

export const navLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Portofolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Tentang Kami', to: '/tentang' },
]
