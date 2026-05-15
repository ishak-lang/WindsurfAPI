import { locales, isRTL, Locale } from '../i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <html lang={locale} dir={isRTL(locale) ? 'rtl' : 'ltr'}><body>{children}</body></html>;
}
