import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, Copy, Check, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface VipPromoBannerProps {
  language: Language;
  onExploreCatalog: () => void;
  onApplyCoupon: (code: string) => boolean;
}

export const VipPromoBanner: React.FC<VipPromoBannerProps> = ({
  language,
  onExploreCatalog,
  onApplyCoupon,
}) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  // Countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('GOLD2026');
    onApplyCoupon('GOLD2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-10 sm:py-12 bg-[#070709] border-y border-[#D4AF37]/25 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#14120C] via-[#1F1A10] to-[#121118] border border-[#D4AF37]/60 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.15)] p-5 sm:p-8 md:p-12 w-full">
          
          {/* Subtle background ambient light */}
          <div className="absolute top-0 end-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start">
            
            {/* Left offer details */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A2213] border border-[#D4AF37]/60 text-[#F5E8BE] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{language === 'ar' ? 'عرض النخبة الحصري لولاية الجزائر والـ 58 ولاية' : 'VIP Sovereign Offer'}</span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-[#FAF7F0] leading-tight">
                {language === 'ar' ? (
                  <>
                    خصم استثنائي <span className="gold-gradient-text">15% إضافي</span> مع شحن مجاني لكافة ولايات الجزائر
                  </>
                ) : (
                  <>
                    Exclusive <span className="gold-gradient-text">15% VIP Privilege</span> & Free Nationwide Delivery
                  </>
                )}
              </h3>

              <p className="text-xs sm:text-sm text-[#B5B0A2] max-w-2xl leading-relaxed">
                {language === 'ar'
                  ? 'استخدم كود الخصم الملكي عند إتمام الطلب للحصول على خصم 15% فوري على أي قطعة من الأزياء أو العطور ومستحضرات التجميل، بالإضافة إلى خدمة التوصيل الفاخر المجاني.'
                  : 'Apply sovereign code GOLD2026 to unlock an immediate 15% discount across all haute couture and prestige beauty creations.'}
              </p>

              {/* Promo code box & action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-[#0B0B0E] border border-[#D4AF37]/60 px-4 py-2.5 rounded-xl">
                  <span className="text-[11px] text-[#8C867A] uppercase tracking-wider">الكود:</span>
                  <span className="font-mono font-bold text-sm sm:text-base text-[#F3E5AB] tracking-widest">
                    GOLD2026
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-[#D4AF37] hover:text-[#FFF] transition-colors ms-2"
                    title="نسخ الكود"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <button
                  onClick={() => {
                    handleCopyCode();
                    onExploreCatalog();
                  }}
                  className="gold-btn px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg"
                >
                  <span>{copied ? 'تم تطبيق الخصم!' : 'تطبيق الكود والتسوق'}</span>
                  {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Right countdown timer */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
              <div className="bg-[#0B0B0E]/80 backdrop-blur-md border border-[#D4AF37]/40 rounded-2xl p-6 text-center space-y-3 w-full max-w-xs shadow-2xl">
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#D4AF37] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>{language === 'ar' ? 'ينتهي العرض الخاص خلال:' : 'Offer expires in:'}</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[#141419] border border-[#2B2B38] rounded-xl p-2.5">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#FAF7F0] block">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-[#8C867A]">ساعة</span>
                  </div>

                  <div className="bg-[#141419] border border-[#2B2B38] rounded-xl p-2.5">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#FAF7F0] block">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-[#8C867A]">دقيقة</span>
                  </div>

                  <div className="bg-[#141419] border border-[#2B2B38] rounded-xl p-2.5">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#D4AF37] block">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-[#8C867A]">ثانية</span>
                  </div>
                </div>

                <span className="text-[11px] text-[#A8A193] block">
                  توصيل سريع مجاني • فحص الطرد قبل الدفع
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
