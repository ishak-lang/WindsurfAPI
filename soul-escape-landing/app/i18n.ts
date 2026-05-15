export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const isRTL = (locale: Locale) => locale === 'ar';

export const dictionary = {
  en: {
    brand: 'Soul Escape',
    nav: ['Home', 'Experiences', 'Programs', 'Corporate', 'About', 'Blog', 'Contact'],
    heroTitle: 'Escape the noise, return to yourself.',
    heroSubtitle: 'Therapeutic wellness tourism in Algeria for emotional recovery and mindful living.',
  },
  ar: {
    brand: 'سول إسكيب',
    nav: ['الرئيسية', 'التجارب', 'البرامج', 'الشركات', 'من نحن', 'المدونة', 'تواصل'],
    heroTitle: 'اهرب من الضجيج… وعد إلى نفسك.',
    heroSubtitle: 'منصة جزائرية للسياحة العلاجية والتعافي النفسي والرفاه العميق.',
  }
};
