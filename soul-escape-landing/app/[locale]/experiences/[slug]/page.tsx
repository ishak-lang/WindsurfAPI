import { SiteHeader, Footer } from '../../../components/site';
import { Locale } from '../../../i18n';

export default async function Page({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  return <main className='grain min-h-screen'><SiteHeader locale={locale} /><section className='max-w-6xl mx-auto px-4 py-16'><h1 className='text-4xl text-sea font-semibold mb-4'>Retreat: {slug}</h1><p className='text-lg'>Immersive detail page with schedule, healing outcomes, gallery, testimonials, and booking CTA.</p></section><Footer locale={locale} /></main>;
}
