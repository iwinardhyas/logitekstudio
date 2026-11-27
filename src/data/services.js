// lead + emphasis = judul dua baris di kartu akordeon beranda.
// image: path di /public, contoh '/images/solusi/aplikasi-lapangan.jpg'. Kosong = placeholder gradasi.
// tone: warna kartu saat tidak ada gambar ('light' | 'navy' | 'teal').
export const services = [
  {
    slug: 'aplikasi-lapangan',
    title: 'Aplikasi Lapangan',
    lead: 'Aplikasi',
    emphasis: 'Lapangan',
    summary: 'Aplikasi mobile untuk inspektor dan petugas lapangan yang tetap jalan tanpa sinyal.',
    description:
      'Checklist inspeksi, foto berlokasi, tanda tangan digital, dan formulir yang tersimpan di perangkat. Data tersinkron otomatis begitu koneksi kembali.',
    points: ['Mode offline penuh', 'Foto dengan GPS & waktu', 'Formulir & checklist dinamis', 'Sinkronisasi otomatis'],
    image: '/images/solusi/aplikasi-lapangan.webp',
    tone: 'light',
  },
  {
    slug: 'sistem-laporan',
    title: 'Sistem Laporan',
    lead: 'Sistem',
    emphasis: 'Laporan',
    summary: 'Laporan harian dari lapangan langsung masuk, rapi, dan siap diekspor.',
    description:
      'Ganti laporan kertas dan rekap manual. Laporan terkumpul di satu tempat, bisa difilter, dan diekspor ke PDF atau Excel dengan satu klik.',
    points: ['Template laporan sesuai SOP', 'Ekspor PDF & Excel', 'Alur persetujuan', 'Riwayat & jejak audit'],
    image: '/images/solusi/sistem-laporan.webp',
    tone: 'navy',
  },
  {
    slug: 'dashboard-admin',
    title: 'Dashboard Admin',
    lead: 'Dashboard',
    emphasis: 'Admin',
    summary: 'Pantau tim, progres, dan data penting dalam satu layar.',
    description:
      'Lihat siapa mengerjakan apa, di mana, dan kapan. Grafik dan peta yang diperbarui langsung membantu Anda mengambil keputusan lebih cepat.',
    points: ['Ringkasan real-time', 'Peta sebaran tugas', 'Manajemen pengguna & hak akses', 'Notifikasi'],
    image: '/images/solusi/dashboard-admin.webp',
    tone: 'light',
  },
  {
    slug: 'integrasi-sistem',
    title: 'Integrasi Sistem',
    lead: 'Integrasi',
    emphasis: 'Sistem',
    summary: 'Hubungkan aplikasi baru dengan sistem yang sudah Anda pakai.',
    description:
      'Sambungkan ke ERP, spreadsheet, atau API pihak ketiga agar data tidak perlu diketik ulang dan setiap tim melihat angka yang sama.',
    points: ['Integrasi API & webhook', 'Sinkronisasi spreadsheet', 'Migrasi data', 'Maintenance berkala'],
    image: '/images/solusi/integrasi-sistem.webp',
    tone: 'teal',
  },
]
