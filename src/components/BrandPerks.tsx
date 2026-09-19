import React from 'react';
import { ShieldCheck, Gift, Truck, Headphones } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface BrandPerksProps {
  language: Language;
}

export const BrandPerks: React.FC<BrandPerksProps> = ({ language }) => {
  const t = translations[language];

  const perks = [
    {
      icon: ShieldCheck,
      title: t.perkAuthentic,
      desc: t.perkAuthenticDesc,
    },
    {
      icon: Gift,
      title: t.perkPackaging,
      desc: t.perkPackagingDesc,
    },
    {
      icon: Truck,
      title: t.perkShipping,
      desc: t.perkShippingDesc,
    },
    {
      icon: Headphones,
      title: t.perkSupport,
      desc: t.perkSupportDesc,
    },
  ];

  return (
    <section className="py-16 bg-[#0B0B0E] border-y border-[#202026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, idx) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121216] border border-[#26262F] hover:border-[#D4AF37]/50 transition-all text-start space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1D190F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury font-bold text-base text-[#FAF7F0] group-hover:text-[#F3E5AB] transition-colors">
                  {perk.title}
                </h3>
                <p className="text-xs text-[#9E9789] leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
