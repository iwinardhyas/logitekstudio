import { useState } from 'react'
import { services } from '../../data/services.js'
import { site } from '../../data/site.js'
import Button from '../ui/Button.jsx'

// TODO: sesuaikan rentang anggaran dengan harga Logitek Studio
const budgets = ['< Rp 25 juta', 'Rp 25 – 75 juta', 'Rp 75 – 150 juta', '> Rp 150 juta', 'Belum tahu']

const inputClass =
  'mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3.5 text-sm font-normal text-ink outline-none placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent-soft'

const labelClass = 'block text-sm font-medium text-ink'

const empty = { name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }

// Belum ada backend: form dikirim sebagai pesan WhatsApp. Ganti handleSubmit jika pakai Formspree/EmailJS.
export default function ContactForm() {
  const [form, setForm] = useState(empty)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [`Halo ${site.name}, saya ${form.name}${form.company ? ` dari ${form.company}` : ''}.`]
    if (form.service) lines.push(`Kebutuhan: ${form.service}`)
    if (form.budget) lines.push(`Anggaran: ${form.budget}`)
    lines.push(`Email: ${form.email}`)
    if (form.phone) lines.push(`Telepon: ${form.phone}`)
    lines.push('', form.message)
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className={labelClass}>
        Nama Lengkap
        <input name="name" required autoComplete="name" placeholder="Masukkan nama" value={form.name} onChange={update} className={inputClass} />
      </label>
      <label className={labelClass}>
        Email
        <input name="email" type="email" required autoComplete="email" placeholder="Masukkan email kerja" value={form.email} onChange={update} className={inputClass} />
      </label>
      <label className={labelClass}>
        Nomor Telepon
        <input name="phone" type="tel" autoComplete="tel" placeholder="Masukkan nomor telepon" value={form.phone} onChange={update} className={inputClass} />
      </label>
      <label className={labelClass}>
        Perusahaan
        <input name="company" autoComplete="organization" placeholder="Masukkan nama perusahaan" value={form.company} onChange={update} className={inputClass} />
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        Kebutuhan
        <select name="service" value={form.service} onChange={update} className={inputClass}>
          <option value="">Pilih kebutuhan</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Lainnya">Lainnya</option>
        </select>
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        Anggaran
        <select name="budget" value={form.budget} onChange={update} className={inputClass}>
          <option value="">Pilih anggaran</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        Pesan
        <textarea name="message" required rows={5} placeholder="Ceritakan kebutuhan Anda" value={form.message} onChange={update} className={inputClass} />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" className="w-full">Kirim via WhatsApp</Button>
      </div>
    </form>
  )
}
