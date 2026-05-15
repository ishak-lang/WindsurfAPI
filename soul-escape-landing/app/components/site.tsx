'use client';
import Link from 'next/link';
import { Locale, dictionary, isRTL } from '../i18n';

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  const next = locale === 'ar' ? 'en' : 'ar';
  return <header className='sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-sand/40'><div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'><Link href={`/${locale}`} className='text-2xl font-semibold text-sea'>{t.brand}</Link><nav className='hidden md:flex gap-6'>{t.nav.map((n)=><span key={n}>{n}</span>)}</nav><Link href={`/${next}`} className='px-4 py-2 rounded-full border border-sea text-sea'>{next.toUpperCase()}</Link></div></header>;
}

export function Hero({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  return <section className='relative min-h-[70vh] flex items-center'>
    <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")] bg-cover bg-center'/>
    <div className='absolute inset-0 bg-sea/45'/>
    <div className='relative max-w-5xl px-4 mx-auto text-white'>
      <h1 className='text-5xl font-bold mb-4'>{t.heroTitle}</h1><p className='text-xl mb-8 max-w-2xl'>{t.heroSubtitle}</p>
      <div className='flex gap-3'><button className='px-6 py-3 rounded-full bg-white text-sea'>Book Experience</button><button className='px-6 py-3 rounded-full border border-white'>Discover Programs</button></div>
    </div>
  </section>;
}

export function GridCards() {
  const items = ['Yoga Retreats','Meditation','Digital Detox','Journaling Therapy','Sound Healing','Sahara Experience','Mineral Baths','Corporate Wellness'];
  return <section className='max-w-7xl mx-auto px-4 py-16'><div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>{items.map((item)=><article key={item} className='rounded-3xl bg-white/80 p-5 shadow-soft'>{item}</article>)}</div></section>;
}

export function Footer({ locale }: { locale: Locale }) {
  return <footer className='bg-sea text-white py-10 px-4 text-center'>© 2026 Soul Escape · {isRTL(locale) ? 'الجزائر' : 'Algeria'}</footer>;
}
