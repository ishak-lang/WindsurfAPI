import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Soul Escape | تجارب استشفاء وسياحة علاجية في الشرق الجزائري',
  description:
    'Soul Escape تقدم تجارب استشفاء وسياحة علاجية هادئة في الشرق الجزائري، تجمع بين الطبيعة، التأمل، اليوغا، الحمامات المعدنية، الغذاء الصحي، والمرافقة الشخصية.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans">{children}</body>
    </html>
  );
}
