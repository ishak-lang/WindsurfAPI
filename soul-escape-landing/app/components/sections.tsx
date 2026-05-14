'use client';

import { useState } from 'react';

export function Header() {
  const links = ['الرئيسية', 'التجارب', 'البرنامج', 'لماذا نحن', 'الأسئلة', 'احجز الآن'];
  const ids = ['home', 'experiences', 'program', 'why', 'faq', 'booking'];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ivory/80 border-b border-sand/40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-sea">Soul Escape</div>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l, i) => <a key={l} href={`#${ids[i]}`} className="hover:text-sea transition">{l}</a>)}
        </nav>
        <a href="#booking" className="bg-sea text-white px-4 py-2 rounded-full text-sm hover:bg-sea/90">احجز تجربتك</a>
      </div>
    </header>
  );
}

export function ExperienceCard({ title, description, items, cta }: any) {
  return <article className="bg-white/80 rounded-3xl p-6 shadow-soft hover:-translate-y-1 transition reveal"><h3 className="text-xl text-sea font-semibold mb-2">{title}</h3><p className="text-sm mb-4">{description}</p><ul className="space-y-2 text-sm mb-4">{items.map((i:string)=><li key={i}>• {i}</li>)}</ul><button className="text-sea font-medium">{cta}</button></article>;
}

export function ProgramSchedule({ title, entries }: any) {
  return <section className="bg-white/70 rounded-3xl p-6 shadow-soft reveal"><h3 className="text-2xl text-sea font-semibold mb-6">{title}</h3><div className="space-y-4 border-r-2 border-sand pr-4">{entries.map((e:any)=><div key={e.time}><p className="text-gold font-semibold">{e.time}</p><p>{e.activity}</p></div>)}</div></section>;
}

export function FAQ() {
  const faqs = [
    ['هل Soul Escape مركز طبي؟', 'لا. Soul Escape تقدم تجارب استشفاء وسياحة علاجية ورفاهية، ولا تقدم تشخيصاً أو علاجاً طبياً مباشراً.'],
    ['هل التجربة مناسبة للجميع؟', 'التجارب مناسبة لمن يبحث عن الراحة، الهدوء، التأمل، والطبيعة. في حال وجود حالة صحية خاصة، يُنصح باستشارة مختص قبل المشاركة.'],
    ['هل يمكن تخصيص البرنامج؟', 'نعم، يمكن تخصيص التجربة حسب عدد المشاركين، مدة الإقامة، نوع الأنشطة، والموقع.'],
    ['هل توجد إقامة؟', 'بعض التجارب تشمل الإقامة أو يتم تنسيقها حسب الطلب مع منتجعات أو أماكن إقامة مناسبة.'],
    ['هل الأنشطة إجبارية؟', 'لا، التجربة مصممة بمرونة. يمكن للمشارك اختيار ما يناسبه حسب راحته.']
  ];
  return <div className="space-y-3">{faqs.map(([q,a])=><details key={q} className="bg-white/80 rounded-2xl p-4"><summary className="cursor-pointer text-sea font-medium">س: {q}</summary><p className="mt-2 text-sm">ج: {a}</p></details>)}</div>;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return <form onSubmit={(e)=>{e.preventDefault();setSent(true);}} className="grid md:grid-cols-2 gap-4 bg-white/80 p-6 rounded-3xl shadow-soft">
    {['الاسم الكامل','رقم الهاتف / واتساب','البريد الإلكتروني','المدينة أو البلد','عدد المشاركين','التاريخ المفضل'].map((f)=><label key={f} className="text-sm">{f}<input className="w-full mt-1 rounded-xl border border-sand p-2 bg-ivory"/></label>)}
    <label className="text-sm">نوع التجربة المطلوبة<select className="w-full mt-1 rounded-xl border border-sand p-2 bg-ivory"><option>تجربة البحر والهدوء</option><option>تجربة الحمامات المعدنية</option><option>تجربة مخصصة</option></select></label>
    <label className="text-sm md:col-span-2">رسالة قصيرة<textarea className="w-full mt-1 rounded-xl border border-sand p-2 bg-ivory" rows={4} /></label>
    <button className="bg-sea text-white rounded-full py-3">أرسل طلب الحجز</button><a href="#" className="rounded-full py-3 text-center border border-eucalyptus text-eucalyptus">تواصل معنا عبر واتساب</a>
    {sent && <p className="md:col-span-2 text-eucalyptus">تم استلام طلبك مبدئياً وسيتم التواصل معك قريباً.</p>}
  </form>;
}
