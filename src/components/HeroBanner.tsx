import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, ArrowRight, Truck, ShieldCheck, Gift, CheckCircle2, MessageCircle } from 'lucide-react';
import { Category, Language } from '../types';

interface HeroBannerProps {
  language: Language;
  onExploreClick: () => void;
  onOpenAiStylist: () => void;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  language,
  onExploreClick,
  onOpenAiStylist,
  onSelectCategory,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: language === 'ar' ? 'تشكيلة 2026 الحصرية' : '2026 Winter Sovereign Collection',
      title: language === 'ar' ? 'فخامة الأسود وسحر الذهب الخالص' : 'Black Majesty & Pure 24K Gold',
      subtitle: language === 'ar'
        ? 'أرقى تصاميم الأزياء الراقية، مستحضرات العناية بإكسير الذهب عيار 24 قيراط، وعطور النيش الملكية. توصيل لباب منزلك عبر 58 ولاية مع حق المعاينة قبل الدفع.'
        : 'World-class haute couture, 24K pure gold youth elixirs, and imperial niche perfumes. Direct delivery with parcel inspection before payment across all 58 Wilayas.',
      category: 'clothing' as Category,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
      tag: language === 'ar' ? 'أزياء السهرة' : 'Haute Couture',
    },
    {
      id: 2,
      badge: language === 'ar' ? 'إشراقة ملكية عيار 24K' : '24K Gold Youth Miracle',
      title: language === 'ar' ? 'إكسير الذهب الخالص للبشرة' : 'Pure 24K Liquid Gold Elixir',
      subtitle: language === 'ar'
        ? 'سيروم مجدد غني برقائق الذهب الحقيقي عيار 24 قيراط وحمض الهيالورونيك الثلاثي، يمنح بشرتك نضارة فورية وشباباً متجدداً دون أي ملمس دهني.'
        : 'Infused with pure 24-karat gold flakes and triple hyaluronic acid for instant luminosity and deep skin rejuvenation.',
      category: 'cosmetics' as Category,
      image: 'https://images.unsplash.com/photo-1608248597359-25f0a0d45d8b?q=80&w=1200&auto=format&fit=crop',
      tag: language === 'ar' ? 'سيروم الذهب' : '24K Skincare',
    },
    {
      id: 3,
      badge: language === 'ar' ? 'عطور النيش الأسطورية' : 'Imperial Niche Fragrances',
      title: language === 'ar' ? 'عبير العود الملكي والعنبر الأسود' : 'Sovereign Royal Oud & Amber',
      subtitle: language === 'ar'
        ? 'توليفة نادرة من دهن العود المعتق والورد في زجاجة كريستال إيطالية مذهبة. فوحان استثنائي وثبات يدوم لأيام كاملة.'
        : 'Rare aged Cambodian oud and precious damask rose in a hand-gilded crystal flacon. Majestic projection and sillage.',
      category: 'fragrance' as Category,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
      tag: language === 'ar' ? 'عطور نيش' : 'Royal Oud',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  // Algerian WhatsApp Concierge Link
  const whatsappUrl = `https://wa.me/213555000000?text=${encodeURIComponent(
    `السلام عليكم متجر STYLE YOU، أرغب في استفسار وطلب منتجات من تشكيلة (${slide.title}). يرجى تزويدي بالتفاصيل ومدة التوصيل.`
  )}`;

  return (
    <div className="relative w-full max-w-full overflow-hidden bg-[#070709] border-b border-[#1C1C24]">
      
      {/* 1. Main Editorial Hero Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-start">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16140F] border border-[#D4AF37]/50 text-[#F5E8BE] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{slide.badge}</span>
            </div>

            {/* Headline in Timeless Luxury Font */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F0] leading-[1.15]">
              <span className="gold-gradient-text block">
                {slide.title}
              </span>
            </h1>

            {/* Subtitle with generous line-height */}
            <p className="text-sm sm:text-base text-[#B0AA9B] leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            {/* Clean, Coordinated Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Primary Gold Catalog Button */}
              <button
                id="hero-explore-btn"
                onClick={() => {
                  onSelectCategory(slide.category);
                  onExploreClick();
                }}
                className="gold-btn px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] cursor-pointer"
              >
                <span>{language === 'ar' ? 'تصفح المجموعة الملكية' : 'Explore Collection'}</span>
                {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              {/* Secondary WhatsApp Direct Concierge */}
              <a
                id="hero-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#121612] hover:bg-[#182218] border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'طلب فوري عبر الواتساب' : 'WhatsApp Order'}</span>
              </a>

              {/* AI Stylist link */}
              <button
                id="hero-ai-stylist-btn"
                onClick={onOpenAiStylist}
                className="text-xs text-[#D4AF37] hover:text-[#FFF] font-medium flex items-center gap-1.5 px-3 py-2 underline underline-offset-4 decoration-[#D4AF37]/50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'استشارة المنسق الذكي' : 'AI Stylist'}</span>
              </button>

            </div>

            {/* Slide Indicators */}
            <div className="pt-4 flex items-center gap-2">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-10 bg-[#D4AF37]'
                      : 'w-3 bg-[#24242E] hover:bg-[#D4AF37]/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Clean Editorial Visual Frame (No cluttered cards on top) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Clean bottom caption tag */}
              <div className="absolute bottom-5 inset-x-5 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#F5E8BE] font-semibold">
                  {slide.tag}
                </span>
                <span className="text-[11px] text-[#C5BFAe] font-medium">
                  {language === 'ar' ? 'معاينة قبل الدفع' : 'COD Available'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Sleek 4-Pillar Algerian Trust Strip (Clean, unified, non-duplicated) */}
      <div className="border-t border-[#1C1C24] bg-[#0A0A0E] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-start">
            
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#16140F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Truck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs text-[#FAF7F0] truncate">
                  {language === 'ar' ? 'توصيل لـ 58 ولاية' : '58 Wilayas Delivery'}
                </h4>
                <p className="text-[10px] text-[#8C867A] truncate">
                  {language === 'ar' ? 'حتى باب منزلك في 24-48 ساعة' : 'Fast door-to-door'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#16140F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs text-[#FAF7F0] truncate">
                  {language === 'ar' ? 'فحص الطرد قبل الدفع' : 'Parcel Inspection'}
                </h4>
                <p className="text-[10px] text-[#8C867A] truncate">
                  {language === 'ar' ? 'عاين طلبيتك قبل تسليم المبلغ' : 'Check before paying COD'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#16140F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs text-[#FAF7F0] truncate">
                  {language === 'ar' ? 'أصالة 100% مضمونة' : '100% Authentic'}
                </h4>
                <p className="text-[10px] text-[#8C867A] truncate">
                  {language === 'ar' ? 'خامات ملكية وذهب 24K معتمد' : 'Certified pure materials'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#16140F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Gift className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs text-[#FAF7F0] truncate">
                  {language === 'ar' ? 'تغليف إهداء ملكي مجاني' : 'Royal Gift Packaging'}
                </h4>
                <p className="text-[10px] text-[#8C867A] truncate">
                  {language === 'ar' ? 'علبة مخملية سوداء مطرزة بالذهب' : 'Black & gold luxury box'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
