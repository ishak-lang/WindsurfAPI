import { Footer, GridCards, Hero, SiteHeader } from '../components/site';
import { Locale } from '../i18n';

export default async function LocaleHome({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <main className='grain'><SiteHeader locale={locale} /><Hero locale={locale} /><GridCards /><Footer locale={locale} /></main>;
}
