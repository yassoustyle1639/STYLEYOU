import React, { useState } from 'react';
import { Mail, Check, MapPin, Phone, Instagram, Send } from 'lucide-react';
import { Category, Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
  onSelectCategory: (cat: Category) => void;
  onOpenAiStylist: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onSelectCategory,
  onOpenAiStylist,
}) => {
  const t = translations[language];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#070709] border-t border-[#D4AF37]/25 text-start text-[#B5B0A2] w-full max-w-full overflow-hidden">
      {/* VIP Newsletter Strip */}
      <div className="border-b border-[#202026] py-12 bg-gradient-to-b from-[#0F0E12] to-[#070709]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest">
                {t.newsletterTitle}
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F7F2]">
                {language === 'ar' ? 'انضم إلى دائرة النخبة الخاصة بـ STYLE YOU' : 'Step Into the Inner Circle of STYLE YOU'}
              </h3>
              <p className="text-xs text-[#9E9789] max-w-md">
                {t.newsletterSubtitle}
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 rounded-xl bg-[#172517] border border-emerald-500/50 text-emerald-300 flex items-center gap-3 text-xs">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>{t.newsletterSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-[#D4AF37] absolute start-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.newsletterPlaceholder}
                      className="w-full bg-[#121217] border border-[#2F2F3B] rounded-lg ps-10 pe-4 py-3 text-xs text-[#FFF] placeholder:text-[#6C665C] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="gold-btn px-6 py-3 rounded-lg text-xs font-bold whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    <span>{t.newsletterBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1A1813] border border-[#D4AF37]/50 flex items-center justify-center">
                <span className="font-serif-luxury font-bold text-xs gold-gradient-text tracking-wider">SY</span>
              </div>
              <span className="font-serif-luxury font-bold text-xl gold-gradient-text tracking-[0.15em] uppercase">
                {t.brandName}
              </span>
            </div>

            <p className="text-xs text-[#8C867A] leading-relaxed">
              {t.footerAbout}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#D4AF37]">
              <span className="font-semibold">{language === 'ar' ? 'التوصيل لكافة الولايات:' : 'Coverage:'}</span>
              <span className="text-[#A8A193] text-[11px]">58 ولاية جزائرية • الجزائر • وهران • قسنطينة • سطيف</span>
            </div>
          </div>

          {/* Quick Categories Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#FAF7F0] uppercase tracking-wider">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('clothing')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  {t.clothing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('cosmetics')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  {t.cosmetics}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fragrance')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  {t.fragrance}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('accessories')}
                  className="hover:text-[#F3E5AB] transition-colors"
                >
                  {t.accessories}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAiStylist}
                  className="text-[#D4AF37] hover:underline font-semibold"
                >
                  ✨ {t.aiStylistBtn}
                </button>
              </li>
            </ul>
          </div>

          {/* VIP Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#FAF7F0] uppercase tracking-wider">
              {t.footerCustomerCare}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#perks" className="hover:text-[#F3E5AB] transition-colors">
                  {language === 'ar' ? 'تتبع الشحنات' : 'Track Royal Parcel'}
                </a>
              </li>
              <li>
                <a href="#perks" className="hover:text-[#F3E5AB] transition-colors">
                  {language === 'ar' ? 'شهادة أصالة الذهب' : 'Gold Authenticity Seal'}
                </a>
              </li>
              <li>
                <a href="#perks" className="hover:text-[#F3E5AB] transition-colors">
                  {language === 'ar' ? 'تغليف الهدايا الملكية' : 'Bespoke Gift Service'}
                </a>
              </li>
              <li>
                <a href="#perks" className="hover:text-[#F3E5AB] transition-colors">
                  {language === 'ar' ? 'استشارة خبير التجميل' : 'Beauty Consultation'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#FAF7F0] uppercase tracking-wider">
              {language === 'ar' ? 'خدمة العملاء والكونسيرج (الجزائر)' : 'VIP Concierge Algeria'}
            </h4>
            <div className="space-y-2 text-xs text-[#8C867A]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span dir="ltr">+213 (0) 555 00 00 00 / 023 00 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>contact@style-you.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sidi Yahia / Hydra, Alger • Oran • Constantine</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & payment icons */}
        <div className="mt-12 pt-6 border-t border-[#1C1C24] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A756C]">
          <div>{t.footerCopyright}</div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded bg-[#15151A] border border-[#D4AF37]/50 text-[10px] text-[#F3E5AB] font-bold">الدفع عند الاستلام (COD)</span>
            <span className="px-2 py-0.5 rounded bg-[#15151A] border border-[#292933] text-[10px] text-[#C5BFAe]">البطاقة الذهبية EDAHABIA</span>
            <span className="px-2 py-0.5 rounded bg-[#15151A] border border-[#292933] text-[10px] text-[#C5BFAe]">CIB</span>
            <span className="px-2 py-0.5 rounded bg-[#15151A] border border-[#292933] text-[10px] text-[#C5BFAe]">VISA / MASTERCARD</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
