// Testimoni wajib dari klien sungguhan, dengan izin mereka untuk dipublikasikan.
// draft: true = contoh tampilan. Hanya muncul saat `npm run dev` dan tidak ikut ke build produksi.
// Kalau tidak ada testimoni non-draft, section Testimoni otomatis disembunyikan di website live.
// photo: path di /public (opsional), contoh '/images/testimoni/nama.webp'. Kosong = inisial nama.
export const testimonials = [
  {
    draft: true,
    name: 'Ibu Rahma',
    business: 'Laundry Bersih Kilat',
    type: 'Usaha laundry kiloan',
    city: 'Palu',
    photo: '',
    quote:
      'Dulu pesanan dicatat di buku dan sering ada cucian tertukar. Sekarang tiap cucian punya nomor, dan pelanggan langsung dapat pesan WhatsApp waktu cuciannya selesai.',
    result: 'Rekap pemasukan harian tinggal lihat di HP',
  },
  {
    draft: true,
    name: 'Pak Hendra',
    business: 'Toko Bangunan Sinar Jaya',
    type: 'Toko bahan bangunan',
    city: 'Donggala',
    photo: '',
    quote:
      'Saya bisa cek stok semen dan besi dari rumah, tidak perlu lagi telepon karyawan ke gudang. Laporan penjualan juga sudah rapi tiap sore.',
    result: 'Stok gudang terpantau dari HP',
  },
  {
    draft: true,
    name: 'Mbak Sari',
    business: 'Dapur Sari Catering',
    type: 'Katering rumahan',
    city: 'Sigi',
    photo: '',
    quote:
      'Kurir kami sering antar ke desa yang sinyalnya hilang-timbul. Aplikasinya tetap jalan, foto bukti antar tersimpan, lalu terkirim sendiri waktu sinyal ada.',
    result: 'Bukti pengiriman tetap tercatat tanpa sinyal',
  },
]
