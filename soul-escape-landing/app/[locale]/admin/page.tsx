import { SiteHeader, Footer } from '../../components/site';
import { Locale } from '../../i18n';

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <main className='grain min-h-screen'><SiteHeader locale={locale} /><section className='max-w-6xl mx-auto px-4 py-16'><h1 className='text-4xl text-sea font-semibold mb-4'>Soul Escape Module</h1><p className='text-lg'>Scalable bilingual page for Soul Escape wellness platform with booking workflows, emotional recovery content, and Algerian therapeutic tourism context.</p></section><Footer locale={locale} /></main>;
}
