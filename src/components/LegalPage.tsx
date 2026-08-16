import { PageHero } from "./PageHero";
import type { Locale } from "@/lib/i18n";
const copy = {
  ro: { notice:"Șablon de pre-lansare", body:"Această pagină este rezervată documentului juridic final. Datele companiei, operatorul de date, perioadele de retenție, temeiurile juridice și canalele de contact trebuie completate și revizuite înainte de publicarea comercială." },
  ru: { notice:"Предпусковой шаблон", body:"Эта страница зарезервирована под финальный юридический документ. Реквизиты компании, оператор данных, сроки хранения, правовые основания и каналы связи должны быть заполнены и проверены до коммерческого запуска." },
  en: { notice:"Pre-launch template", body:"This page is reserved for the final legal document. Company identity, data controller details, retention periods, legal bases and contact channels must be completed and reviewed before commercial launch." },
};
export function LegalPage({ locale, title }: { locale: Locale; title: string }) { const c=copy[locale]; return <PageHero eyebrow={c.notice} title={title} intro={c.body}><section className="section-pad bg-sand"><div className="container-shell max-w-3xl"><div className="rounded-3xl border border-wheat/50 bg-white p-7"><p className="text-sm leading-7 text-forest-950/65">{c.body}</p></div></div></section></PageHero> }
