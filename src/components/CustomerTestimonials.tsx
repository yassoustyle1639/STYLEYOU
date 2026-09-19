import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';
import { Language } from '../types';

interface CustomerTestimonialsProps {
  language: Language;
}

export const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ language }) => {
  const reviews = [
    {
      name: language === 'ar' ? 'أمينة بن عيسى' : 'Amina B.',
      city: language === 'ar' ? 'الجزائر العاصمة (حيدرة)' : 'Algiers (Hydra)',
      product: language === 'ar' ? 'فستان السهرة المخملي الأسود' : 'Velvet Gown',
      comment: language === 'ar'
        ? 'الفستان يفوق الوصف والقماش مخملي ملكي ثقيل مع خياطة وتطريز ذهبي فائق الإتقان. التوصيل وصل في أقل من 24 ساعة، وقمت بمعاينة الفستان قبل تسليم المبلغ لمندوب التوصيل. تجربة تسوق راقية جداً تضاهي بوتيكات باريس.'
        : 'The gown exceeded my expectations. The velvet is royal, heavy, and the gold embroidery is breathtaking. Delivered in 24 hours with package inspection before COD.',
      date: 'منذ يومين',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'ياسين بلقاسم' : 'Yassine B.',
      city: language === 'ar' ? 'وهران (حي الصديقية)' : 'Oran',
      product: language === 'ar' ? 'بدلة التوكسيدو الملكية + عطر العود 24K' : 'Royal Tuxedo & 24K Oud',
      comment: language === 'ar'
        ? 'قصة البدلة إيطالية مثالية ومضبوطة تماماً على مقاسي، وعطر العود الملكي ثباته خرافي يدوم ليومين كاملين. التغليف الملكي الأسود والذهبي كان تحفة فنية. شكراً لفريق الكونسيرج على التعامل الراقي.'
        : 'Tailoring is crisp Italian perfection. The 24K Royal Oud has insane projection and longevity. Stunning black & gold luxury box.',
      date: 'منذ 4 أيام',
      rating: 5,
    },
    {
      name: language === 'ar' ? 'الدكتورة مريم كمال' : 'Dr. Meriem K.',
      city: language === 'ar' ? 'سطيف' : 'Setif',
      product: language === 'ar' ? 'إكسير الذهب عيار 24 قيراط' : '24K Gold Elixir',
      comment: language === 'ar'
        ? 'أول سيروم ذهب يعطيني نضارة حقيقية ولمعة فورية بدون أي ملمس دهني. رقائق الذهب تذوب بسلاسة في البشرة. أعجبني جداً احترام مواعيد التوصيل وحسن معاملة المندوب.'
        : 'The finest 24K skincare elixir. Gold flakes absorb effortlessly leaving radiant, plump skin. Punctual delivery and polite courier.',
      date: 'منذ أسبوع',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#09090C] border-t border-[#1C1C24] text-start w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17140E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'تجارب عملاء النخبة في الجزائر' : 'Verified Algerian Client Reviews'}</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#FAF7F0]">
            {language === 'ar' ? 'ثقة أكثر من 12,000 عميل عبر 58 ولاية' : 'Trusted by Over 12,000 VIP Clients'}
          </h2>
          <p className="text-xs sm:text-sm text-[#8C867A]">
            {language === 'ar' 
              ? 'نفخر بتقديم تجربة تسوق استثنائية مع حق المعاينة والفحص المسبق عند الاستلام.'
              : 'Delivering unparalleled haute couture luxury with full parcel inspection before payment.'}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#111116] border border-[#21212B] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between space-y-4 shadow-xl relative group"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute top-5 end-5 group-hover:text-[#D4AF37]/40 transition-colors" />

              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                  <span className="text-[10px] text-[#8C867A] ms-2">{rev.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#C8C2B3] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer info */}
              <div className="pt-4 border-t border-[#1F1F28] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#FAF7F0]">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-[#D4AF37] font-medium block">
                    {rev.city}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-1 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{language === 'ar' ? 'طلب مستلم' : 'Verified'}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
