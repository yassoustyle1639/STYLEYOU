import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Sparkles, 
  Search, 
  Globe, 
  ChevronDown, 
  X, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Tag, 
  Crown,
  Shirt,
  Flame,
  Gem,
  MoreVertical,
  ArrowRight,
  ArrowLeft,
  Compass,
  CheckCircle2,
  Sparkle
} from 'lucide-react';
import { Category, Currency, Language } from '../types';
import { translations } from '../data/translations';
import { formatPrice } from '../utils/currency';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cartCount: number;
  cartSubtotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAiStylist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  currency,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  cartCount,
  cartSubtotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAiStylist,
}) => {
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Lock background website scrolling when floating side menu is open
  React.useEffect(() => {
    if (floatingMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Prevent scrollbar layout jump
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [floatingMenuOpen]);

  const t = translations[language];

  // Luxury category items with custom icons & localized meta
  const navCategories = [
    { 
      id: 'all' as Category, 
      label: { ar: 'جميع التشكيلات', fr: 'Toutes les créations', en: 'All Creations' },
      desc: { ar: 'المجموعة الملكية الكاملة والحصرية', fr: 'Collection exclusive', en: 'Complete Collection' },
      icon: Crown,
      tag: { ar: 'VIP', fr: 'VIP', en: 'VIP' }
    },
    { 
      id: 'clothing' as Category, 
      label: { ar: 'أزياء السهرات والمخمل', fr: 'Haute Couture', en: 'Haute Couture' },
      desc: { ar: 'فساتين سهرة راقية وأقمشة فاخرة', fr: 'Robes de soirée & velours', en: 'Gowns & Royal Velvet' },
      badge: { ar: 'جديد', fr: 'Nouveau', en: 'New' },
      icon: Shirt,
    },
    { 
      id: 'cosmetics' as Category, 
      label: { ar: 'عناية وإكسير الذهب 24K', fr: 'Soin & Beauté 24K', en: '24K Gold Care' },
      desc: { ar: 'سيروم الذهب الخالص ومستحضرات النضارة', fr: 'Sérums précieux à l’or pur', en: 'Pure 24K Miracle Elixirs' },
      badge: { ar: 'الأكثر طلباً', fr: 'Tendance', en: 'Bestseller' },
      icon: Sparkles,
    },
    { 
      id: 'fragrance' as Category, 
      label: { ar: 'عطور النيش والعود', fr: 'Parfums de Niche', en: 'Niche Fragrance' },
      desc: { ar: 'عطور نادرة وزيوت عطرية ملكية', fr: 'Oud impérial & essences rares', en: 'Sovereign Royal Oud' },
      badge: { ar: 'فاخر', fr: 'Luxe', en: 'Luxury' },
      icon: Flame,
    },
    { 
      id: 'accessories' as Category, 
      label: { ar: 'ساعات ومجوهرات راقية', fr: 'Horlogerie & Bijoux', en: 'Fine Jewelry' },
      desc: { ar: 'أطقم مطلية وساعات استثنائية', fr: 'Montres & parures dorées', en: 'Timepieces & Gems' },
      icon: Gem,
    },
  ];

  const quickSearchTags = [
    { label: language === 'ar' ? 'سيروم الذهب 24K' : '24K Serum', q: 'ذهب' },
    { label: language === 'ar' ? 'فستان مخملي' : 'Velvet Gown', q: 'فستان' },
    { label: language === 'ar' ? 'عود ملكي' : 'Royal Oud', q: 'عود' },
    { label: language === 'ar' ? 'ألماس' : 'Diamond', q: 'ألماس' },
  ];

  const isRtl = language === 'ar';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070709] border-b border-[#1C1C24] shadow-2xl transition-all select-none">
      
      {/* 1. Main Luxury Header Row: 3-Dots Button, Brand Logo, Rich Search Bar, Customer Actions */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2.5 sm:gap-6">
          
          {/* Brand & 3-Dots Trigger Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* 3-DOTS FLOATING MENU TRIGGER BUTTON (أيقونة 3 نقاط في الأعلى) */}
            <button
              id="three-dots-menu-btn"
              onClick={() => setFloatingMenuOpen(true)}
              className="p-2 sm:p-2.5 rounded-full bg-[#121217] hover:bg-[#1E1E28] border border-[#2B2B38] hover:border-[#D4AF37] text-[#D4AF37] transition-all cursor-pointer shadow-md flex items-center justify-center shrink-0 group"
              aria-label="القائمة الجانبية العائمة (3 نقاط)"
              title={language === 'ar' ? 'القائمة الجانبية العائمة (3 نقاط)' : 'Floating Menu (3 dots)'}
            >
              <MoreVertical className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* Brand Logo & Royal Emblem */}
            <div
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none shrink-0"
              onClick={() => setSelectedCategory('all')}
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#1C1811] via-[#0E0D0A] to-[#1F190F] border border-[#D4AF37] flex items-center justify-center text-[#F5E8BE] font-serif-luxury font-black text-xs sm:text-sm shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                SY
              </div>
              <div className="flex flex-col text-start">
                <span className="font-serif-luxury text-lg sm:text-2xl font-extrabold tracking-[0.14em] sm:tracking-[0.16em] gold-gradient-text uppercase leading-none">
                  YASSOU STYLE
                </span>
                <span className="text-[8.5px] sm:text-[10px] tracking-[0.20em] sm:tracking-[0.24em] text-[#A69F8E] uppercase font-semibold mt-1">
                  FASHION & LUXE BEAUTY • ALGER
                </span>
              </div>
            </div>

          </div>

          {/* Central Rich Luxury Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg lg:max-w-xl mx-2 lg:mx-6 flex-col">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-[#D4AF37]">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'ar' ? 'ابحث في التشكيلة الملكية (فساتين، عطور النيش، سيروم الذهب...)' : 'Search royal collection (gowns, perfumes, 24K serum...)'}
                className="w-full ps-10 pe-9 py-2 rounded-full bg-[#121217] border border-[#2B2B38] focus:border-[#D4AF37] text-xs text-[#FAF7F0] placeholder:text-[#6F6A5E] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 end-0 pe-3 flex items-center text-[#8C867A] hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick search suggestion tags */}
            <div className="flex items-center gap-2 mt-1 ps-3 text-[10px] text-[#7A756B]">
              <span className="font-semibold">{language === 'ar' ? 'الأكثر طلباً:' : 'Trending:'}</span>
              {quickSearchTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(tag.q)}
                  className="text-[#C5BFAe] hover:text-[#D4AF37] transition-colors underline-offset-2 hover:underline"
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Action Icons: Language, VIP Stylist, Wishlist, Cart */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-full bg-[#121217] hover:bg-[#1A1A22] border border-[#2B2B38] hover:border-[#D4AF37]/50 text-[#C5BFAe] hover:text-[#D4AF37] transition-all text-xs font-semibold cursor-pointer"
                title={language === 'ar' ? 'تغيير اللغة' : 'Change language'}
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="uppercase text-[10.5px] font-bold tracking-wider">{language}</span>
                <ChevronDown className="w-3 h-3 text-[#8C867A]" />
              </button>

              {langOpen && (
                <div className="absolute end-0 mt-2 w-28 bg-[#121217] border border-[#2B2B38] rounded-xl shadow-2xl py-1 z-50 text-start">
                  <button
                    onClick={() => { setLanguage('ar'); setLangOpen(false); }}
                    className={`w-full px-3 py-1.5 text-xs text-start hover:bg-[#1C1C24] cursor-pointer ${language === 'ar' ? 'text-[#D4AF37] font-bold' : 'text-gray-300'}`}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => { setLanguage('fr'); setLangOpen(false); }}
                    className={`w-full px-3 py-1.5 text-xs text-start hover:bg-[#1C1C24] cursor-pointer ${language === 'fr' ? 'text-[#D4AF37] font-bold' : 'text-gray-300'}`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setLangOpen(false); }}
                    className={`w-full px-3 py-1.5 text-xs text-start hover:bg-[#1C1C24] cursor-pointer ${language === 'en' ? 'text-[#D4AF37] font-bold' : 'text-gray-300'}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* AI Stylist & Beauty Advisor Button */}
            <button
              id="header-stylist-btn"
              onClick={onOpenAiStylist}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#16140F] hover:bg-[#221C11] border border-[#D4AF37]/60 text-xs font-semibold text-[#F3E5AB] transition-all shadow-md group cursor-pointer"
              title="استشارة المنسق الذكي الملكي"
            >
              <div className="relative">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-0.5 -end-0.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              </div>
              <span className="hidden md:inline">{language === 'ar' ? 'المنسق الملكي الذكي' : 'AI Stylist'}</span>
            </button>

            {/* Wishlist Button */}
            <button
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-2 sm:p-2.5 rounded-full bg-[#121217] hover:bg-[#1A1A22] border border-[#262633] text-[#C5BFAe] hover:text-[#FFF] transition-colors cursor-pointer"
              aria-label="Wishlist"
              title="قائمة الرغبات الملكية"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -end-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#D4AF37] text-black font-extrabold text-[9px] sm:text-[10px] flex items-center justify-center shadow-md">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Luxury Shopping Bag Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#16140F] hover:bg-[#1F1A12] border border-[#D4AF37] text-[#FAF7F0] transition-all shadow-lg group cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -end-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#D4AF37] text-black font-black text-[9px] sm:text-[10px] flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="flex flex-col text-start">
                <span className="text-[9px] sm:text-[10px] text-[#A69F8E] font-medium leading-none">
                  {language === 'ar' ? 'الحقيبة' : 'My Bag'}
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#F3E5AB] leading-tight font-sans">
                  {formatPrice(cartSubtotal, currency)}
                </span>
              </div>
            </button>

          </div>

        </div>

        {/* Mobile Search Bar Row */}
        <div className="mt-2.5 md:hidden">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 text-[#D4AF37] absolute inset-y-0 start-3 my-auto pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'ar' ? 'ابحث في التشكيلة الملكية (فساتين، عطور، ذهب...)' : 'Search royal creations...'}
              className="w-full ps-9 pe-8 py-2 rounded-full bg-[#121217] border border-[#2B2B38] text-xs text-[#FAF7F0] placeholder:text-[#6F6A5E] focus:outline-none focus:border-[#D4AF37]"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 end-2.5 flex items-center text-gray-400">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>

      {/* 2. Sleek Modern Category Scroll Pills Bar */}
      <div className="w-full bg-[#08080C]/95 backdrop-blur-xl border-t border-[#1C1C28] py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5 px-1">
            {navCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  id={`nav-pill-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#E4C86C] to-[#D4AF37] text-black shadow-[0_2px_14px_rgba(212,175,55,0.35)] scale-[1.02]'
                      : 'bg-[#111117] hover:bg-[#1A1A24] text-[#C5BFAe] hover:text-[#FAF7F0] border border-[#21212E]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-black' : 'text-[#D4AF37]'}`} />
                  <span>{cat.label[language]}</span>

                  {/* Micro-badge */}
                  {cat.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-black tracking-wide uppercase ${
                      isSelected 
                        ? 'bg-black text-[#D4AF37]' 
                        : 'bg-[#1E190E] text-[#D4AF37] border border-[#D4AF37]/40'
                    }`}>
                      {cat.badge[language]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick VIP Assurance on Desktop */}
          <div className="hidden xl:flex items-center gap-4 text-[11px] text-[#A69F8E] shrink-0 ps-2 border-s border-[#1F1F2C]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'توصيل لـ 58 ولاية' : '58 Wilayas'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{language === 'ar' ? 'فحص الطرد قبل الدفع' : 'COD Inspection'}</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. ULTRA-MODERN FLOATING SIDE MENU (قائمة عائمة ذهبية ملكية فاخرة جداً ولا تزيح الموقع) */}
      {floatingMenuOpen && (
        <div 
          id="floating-side-menu-overlay"
          className="fixed inset-0 z-50 overflow-hidden" 
          role="dialog" 
          aria-modal="true"
        >
          {/* Pure Floating Semi-Transparent Backdrop with Warm Ambient Blur */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
            onClick={() => setFloatingMenuOpen(false)}
            onTouchMove={(e) => e.preventDefault()}
            onWheel={(e) => e.stopPropagation()}
          />

          {/* Floating Luxury Gold Drawer (عائمة بدون إزاحة الموقع والتمرير بداخلها فقط) */}
          <aside 
            className={`fixed top-0 bottom-0 ${isRtl ? 'right-0' : 'left-0'} z-50 w-full max-w-[340px] sm:max-w-[390px] h-full max-h-screen bg-gradient-to-b from-[#18130A] via-[#0C0B08] to-[#151007] backdrop-blur-2xl ${
              isRtl ? 'border-s-2 border-[#D4AF37]' : 'border-e-2 border-[#D4AF37]'
            } shadow-[0_0_90px_rgba(212,175,55,0.35)] flex flex-col overflow-hidden relative ${
              isRtl ? 'animate-in slide-in-from-right duration-300' : 'animate-in slide-in-from-left duration-300'
            }`}
            style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
          >
            {/* Ambient Gold Glow Orbs in Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#AA820A]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Floating Menu Top Header (شريط رأس ذهبي فخم وثابت) */}
            <div className="relative z-10 shrink-0">
              <div className="p-4 sm:p-5 border-b border-[#D4AF37]/35 bg-gradient-to-r from-[#20190D] via-[#2A2010] to-[#1B140A] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  {/* Shimmering Gold SY Crown Emblem */}
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8C6B13] p-[1.5px] shadow-[0_0_20px_rgba(212,175,55,0.45)]">
                    <div className="w-full h-full bg-[#120F0A] rounded-[14px] flex flex-col items-center justify-center">
                      <Crown className="w-3.5 h-3.5 text-[#F5E296] mb-0.5" />
                      <span className="font-serif-luxury font-black text-xs text-[#F5E296] tracking-wider leading-none">
                        SY
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="font-serif-luxury text-lg font-black tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5CE] via-[#D4AF37] to-[#F3E5AB] block leading-none">
                      YASSOU STYLE
                    </span>
                    <span className="text-[10px] text-[#E5C86C] tracking-[0.18em] uppercase font-bold flex items-center gap-1.5 mt-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                      {language === 'ar' ? 'البوتيك الملكي الفاخر' : 'Royal Haute Boutique'}
                    </span>
                  </div>
                </div>

                {/* Golden Circular Close Button */}
                <button
                  id="close-floating-menu-btn"
                  onClick={() => setFloatingMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#281F10] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/70 text-[#F5E296] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
                  title={language === 'ar' ? 'إغلاق القائمة' : 'Close menu'}
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Scrollable Collections Container in Floating Menu (منطقة التمرير المستقلة للقائمة فقط) */}
            <div 
              className="relative z-10 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-2"
              style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2 text-xs font-black text-[#F5E296] uppercase tracking-wider">
                    <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{language === 'ar' ? 'التشكيلات الملكية والأقسام' : 'Imperial Collections'}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-[#291F0E] px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                    2026 LUXE
                  </span>
                </div>

                {navCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setFloatingMenuOpen(false);
                      }}
                      className={`w-full p-3 rounded-2xl text-start transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C99E25] text-black font-extrabold shadow-[0_4px_25px_rgba(212,175,55,0.45)] border-2 border-[#FFF6D4] scale-[1.01]'
                          : 'bg-gradient-to-r from-[#1C170E]/90 via-[#231C11]/90 to-[#18130B]/90 hover:from-[#2B2212] hover:to-[#221A0E] text-[#FAF7F0] border border-[#D4AF37]/35 hover:border-[#D4AF37] shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner ${
                          isSelected 
                            ? 'bg-black text-[#D4AF37] font-bold shadow-md' 
                            : 'bg-gradient-to-br from-[#2D2312] to-[#181208] border border-[#D4AF37]/60 text-[#F5E296]'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-extrabold leading-tight ${
                            isSelected ? 'text-black font-black' : 'text-[#FAF7F0] group-hover:text-[#F5E296]'
                          }`}>
                            {cat.label[language]}
                          </div>
                          <div className={`text-[10.5px] mt-0.5 line-clamp-1 ${
                            isSelected ? 'text-black/85 font-medium' : 'text-[#A69F8E]'
                          }`}>
                            {cat.desc[language]}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cat.badge && (
                          <span className={`text-[9.5px] px-2.5 py-0.5 rounded-full font-black uppercase shrink-0 shadow-sm ${
                            isSelected 
                              ? 'bg-black text-[#D4AF37]' 
                              : 'bg-gradient-to-r from-[#D4AF37] to-[#B38714] text-black'
                          }`}>
                            {cat.badge[language]}
                          </span>
                        )}
                        <div className={`transition-transform duration-200 ${
                          isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                        } ${isSelected ? 'text-black' : 'text-[#D4AF37]'}`}>
                          {isRtl ? (
                            <ArrowLeft className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

            {/* Floating Menu Bottom VIP Gold Section (باقة الخدمات الملكية وكود الخصم - ثابتة بالأسفل) */}
            <div className="p-4 sm:p-5 border-t border-[#D4AF37]/35 space-y-3 bg-gradient-to-b from-[#140F08] to-[#1E170C] relative z-10 shrink-0">
              
              {/* Royal Language Selector with Gold Accents */}
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#1C160D] border border-[#D4AF37]/45">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F5E296]">
                  <Globe className="w-4 h-4 text-[#D4AF37]" />
                  <span>{language === 'ar' ? 'لغة العرض' : 'Language'}</span>
                </div>
                <div className="flex items-center gap-1">
                  {(['ar', 'fr', 'en'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-3 py-1 rounded-xl text-xs font-black uppercase transition-all cursor-pointer ${
                        language === lang
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38714] text-black shadow-md scale-105'
                          : 'text-[#A69F8E] hover:text-[#FAF7F0] hover:bg-[#281F11]'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Stylist Fast Trigger (زر ذهبي لامع للمنسق الملكي) */}
              <button
                onClick={() => {
                  setFloatingMenuOpen(false);
                  onOpenAiStylist();
                }}
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F5E296] to-[#C4971E] hover:brightness-110 text-black text-xs font-black flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_22px_rgba(212,175,55,0.4)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>{t.aiStylistBtn}</span>
              </button>

              {/* VIP WhatsApp Direct Button */}
              <a
                href="https://wa.me/213555000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-2xl bg-[#0E1A12] hover:bg-[#14261B] border border-emerald-400/60 text-xs font-bold text-emerald-300 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{language === 'ar' ? 'خدمة الزبائن VIP عبر الواتساب' : 'VIP Concierge WhatsApp'}</span>
              </a>

              {/* Royal Golden Coupon Box (بطاقة الكود الملكي بتطريز ذهبي) */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-[#2B200F] via-[#332612] to-[#251A0B] border-2 border-dashed border-[#D4AF37]/80 text-xs shadow-inner">
                <div className="flex items-center gap-2 text-xs text-[#FAF7F0]">
                  <Tag className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-semibold">{language === 'ar' ? 'كود الخصم الملكي:' : 'Royal Code:'}</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono font-black text-xs">
                  <span className="text-[#FFF2B2] bg-[#171107] px-2 py-0.5 rounded border border-[#D4AF37]/50 tracking-wider">
                    GOLD2026
                  </span>
                  <span className="text-emerald-400 font-sans font-extrabold text-[11px]">(-15%)</span>
                </div>
              </div>

              {/* Delivery Guarantee in Gold */}
              <div className="text-center text-[10.5px] text-[#D4AF37] font-semibold pt-1 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>
                  {language === 'ar' 
                    ? 'توصيل لـ 58 ولاية • فحص ومعاينة الطرد قبل الدفع' 
                    : '58 Wilayas COD • Inspect before payment'}
                </span>
              </div>

            </div>

          </aside>
        </div>
      )}

    </header>
  );
};

