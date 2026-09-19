import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowUpDown,
  Search,
  X,
  Square,
  Grid2X2
} from 'lucide-react';
import { 
  Category, 
  Currency, 
  Language, 
  Product, 
  CartItem, 
  ProductShade, 
  Order 
} from './types';
import { PRODUCTS } from './data/products';
import { translations } from './data/translations';
import { formatPrice } from './utils/currency';

import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AiStylistModal } from './components/AiStylistModal';
import { VipPromoBanner } from './components/VipPromoBanner';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [currency, setCurrency] = useState<Currency>('DZD');

  // Sync document RTL/LTR
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  // Filtering & Search state
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Display mode: 1 product per row or 2 products per row
  const [gridColumns, setGridColumns] = useState<1 | 2>(() => {
    try {
      const saved = localStorage.getItem('noir_grid_columns');
      return saved === '1' ? 1 : 2;
    } catch {
      return 2;
    }
  });

  const handleSetGridColumns = (cols: 1 | 2) => {
    setGridColumns(cols);
    try {
      localStorage.setItem('noir_grid_columns', String(cols));
    } catch (e) {
      console.error(e);
    }
  };

  // Cart & Wishlist with localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('noir_dor_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('noir_dor_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('noir_dor_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('noir_dor_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAiStylistOpen, setIsAiStylistOpen] = useState(false);

  // Coupon state
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscountPercent, setCouponDiscountPercent] = useState<number>(0);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  // Cart Handlers
  const handleAddToCart = (
    product: Product,
    quantity = 1,
    size?: string,
    shade?: ProductShade
  ) => {
    const itemId = `${product.id}-${size || 'default'}-${shade?.name || 'default'}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          quantity,
          selectedSize: size,
          selectedShade: shade,
        },
      ];
    });

    const formattedDZD = formatPrice(product.price, 'DZD');
    showToast(
      language === 'ar'
        ? `تمت إضافة "${product.name.ar}" (${formattedDZD}) إلى حقيبتك الفاخرة`
        : `Added "${product.name[language]}" to your bag`
    );
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(
          language === 'ar'
            ? `تم حذف "${product.name.ar}" من قائمة الرغبات`
            : `Removed from wishlist`
        );
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(
          language === 'ar'
            ? `تمت إضافة "${product.name.ar}" إلى قائمة الرغبات الملكية`
            : `Added to wishlist`
        );
        return [...prev, product];
      }
    });
  };

  // Coupon handling
  const handleApplyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'GOLD2026') {
      setAppliedCoupon('GOLD2026');
      setCouponDiscountPercent(15);
      showToast(language === 'ar' ? 'تم تطبيق كود النخبة GOLD2026 (خصم 15%)' : 'VIP coupon applied (15% off)');
      return true;
    } else if (clean === 'STYLE10' || clean === 'NOIR10') {
      setAppliedCoupon('STYLE10');
      setCouponDiscountPercent(10);
      showToast(language === 'ar' ? 'تم تطبيق كود STYLE10 (خصم 10%)' : 'Coupon applied (10% off)');
      return true;
    } else if (clean === 'VIP20') {
      setAppliedCoupon('VIP20');
      setCouponDiscountPercent(20);
      showToast(language === 'ar' ? 'تم تطبيق كود VIP20 (خصم 20%)' : 'VIP coupon applied (20% off)');
      return true;
    }
    return false;
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscountPercent(0);
    showToast(language === 'ar' ? 'تم إلغاء كود الخصم' : 'Coupon removed');
  };

  const handleAddEnsembleToCart = (products: Product[]) => {
    products.forEach((prod) => {
      handleAddToCart(prod, 1);
    });
    setIsAiStylistOpen(false);
    setIsCartOpen(true);
    showToast(
      language === 'ar'
        ? 'تمت إضافة باقة الإطلالة المتكاملة إلى حقيبتك!'
        : 'Curated Ensemble added to bag!'
    );
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName =
          item.name.ar.toLowerCase().includes(q) ||
          item.name.en.toLowerCase().includes(q) ||
          item.name.fr.toLowerCase().includes(q);
        const matchTagline =
          item.tagline.ar.toLowerCase().includes(q) ||
          item.tagline.en.toLowerCase().includes(q) ||
          item.tagline.fr.toLowerCase().includes(q);
        const matchSub = item.subcategory.toLowerCase().includes(q);

        if (!matchName && !matchTagline && !matchSub) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const cartSubtotalUSD = cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#070709] text-[#FAF7F0] selection:bg-[#D4AF37] selection:text-black">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 start-6 z-50 p-4 rounded-2xl bg-[#141419] border border-[#D4AF37] text-xs font-semibold text-[#F3E5AB] shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <div className="w-7 h-7 rounded-full bg-[#201A0E] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Luxury Navigation Header */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        currency={currency}
        setCurrency={setCurrency}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        cartSubtotal={cartSubtotalUSD}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAiStylist={() => setIsAiStylistOpen(true)}
      />

      {/* YASSOU STYLE Luxury Hero */}
      <section className="relative min-h-[78vh] flex items-center overflow-hidden border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=85&w=2200&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/75 to-[#050505]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 py-20 sm:py-28">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-black/35 px-4 py-2 text-[10px] sm:text-xs tracking-[0.28em] uppercase text-[#F3E5AB] backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> YASSOU STYLE
            </span>
            <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[0.08em] text-[#FAF7F0]">
              YASSOU <span className="gold-gradient-text">STYLE</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#F3E5AB] font-light tracking-wide">Your style. Your signature.</p>
            <p className="text-base sm:text-lg text-[#E7E1D5] leading-relaxed max-w-xl">فخامتك تبدأ من اختيارك.</p>
            <p className="text-sm sm:text-base text-[#BDB6A8] leading-7 max-w-xl">{t.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button onClick={scrollToCatalog} className="gold-btn px-7 py-3.5 rounded-xl text-sm font-extrabold">{t.heroCtaShop}</button>
              <button onClick={() => setIsAiStylistOpen(true)} className="px-7 py-3.5 rounded-xl text-sm font-bold border border-[#D4AF37]/60 bg-black/35 text-[#F3E5AB] hover:bg-[#D4AF37]/10 transition-all">{t.heroCtaAdvisor}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Categories */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-end justify-between gap-4 mb-7">
          <div><span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">{t.curatedHighlights}</span><h2 className="font-serif-luxury text-2xl sm:text-3xl mt-2 text-[#FAF7F0]">{language === 'ar' ? 'اختاري بصمتك' : language === 'fr' ? 'Choisissez votre signature' : 'Choose your signature'}</h2></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {[
            {cat:'clothing' as Category, title:t.clothing, image:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop'},
            {cat:'cosmetics' as Category, title:t.cosmetics, image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop'},
            {cat:'fragrance' as Category, title:t.fragrance, image:'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=900&auto=format&fit=crop'},
            {cat:'accessories' as Category, title:t.accessories, image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=900&auto=format&fit=crop'}
          ].map((item) => (
            <button key={item.cat} onClick={() => { setSelectedCategory(item.cat); scrollToCatalog(); }} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#111116] text-start">
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-x-4 bottom-4"><div className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] mb-1">YASSOU STYLE</div><div className="text-sm sm:text-base font-bold text-white">{item.title}</div></div>
            </button>
          ))}
        </div>
      </section>

      {/* Brand Promise */}
      <section id="perks" className="border-y border-[#D4AF37]/15 bg-[#0C0C10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[['✦',t.perkAuthentic,t.perkAuthenticDesc],['◈',t.perkPackaging,t.perkPackagingDesc],['◇',t.perkShipping,t.perkShippingDesc],['✧',t.perkSupport,t.perkSupportDesc]].map(([icon,title,desc])=>(
            <div key={title} className="space-y-2"><div className="text-[#D4AF37] text-xl">{icon}</div><h3 className="text-xs sm:text-sm font-bold text-[#F8F4EA]">{title}</h3><p className="text-[10px] sm:text-xs text-[#8C867A] leading-5">{desc}</p></div>
          ))}
        </div>
      </section>

      {/* Main Catalog Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 overflow-hidden">

        {/* Results count, View Mode Toggle (1 or 2 per row) & Sort */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-4 mb-6 border-b border-[#1C1C24] text-xs">
          <span className="text-[#8C867A] font-medium">
            <strong className="text-[#D4AF37]">{filteredProducts.length}</strong> {language === 'ar' ? 'قطعة متوفرة' : 'items available'}
          </span>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Layout Toggle: 1 in row vs 2 in row */}
            <div 
              id="grid-layout-toggle"
              className="flex items-center p-1 bg-[#111116] border border-[#262633] rounded-xl gap-1"
            >
              <button
                id="toggle-1-col-btn"
                type="button"
                onClick={() => handleSetGridColumns(1)}
                title={language === 'ar' ? 'عرض صورة واحدة في كل سطر' : '1 product per row'}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  gridColumns === 1
                    ? 'bg-[#D4AF37] text-black font-extrabold shadow-sm'
                    : 'text-[#8C867A] hover:text-[#FAF7F0] hover:bg-[#1A1A22]'
                }`}
              >
                <Square className="w-3.5 h-3.5" />
                <span className="font-bold text-xs">1</span>
                <span className="text-[10px] hidden xs:inline">{language === 'ar' ? 'بالسطر' : '/row'}</span>
              </button>

              <button
                id="toggle-2-col-btn"
                type="button"
                onClick={() => handleSetGridColumns(2)}
                title={language === 'ar' ? 'عرض صورتين في كل سطر' : '2 products per row'}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  gridColumns === 2
                    ? 'bg-[#D4AF37] text-black font-extrabold shadow-sm'
                    : 'text-[#8C867A] hover:text-[#FAF7F0] hover:bg-[#1A1A22]'
                }`}
              >
                <Grid2X2 className="w-3.5 h-3.5" />
                <span className="font-bold text-xs">2</span>
                <span className="text-[10px] hidden xs:inline">{language === 'ar' ? 'بالسطر' : '/row'}</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#111116] border border-[#262633] text-xs text-[#FAF7F0] rounded-xl px-3 py-1.5 focus:border-[#D4AF37] focus:outline-none cursor-pointer"
              >
                <option value="featured">{language === 'ar' ? 'المميزة أولاً' : 'Featured'}</option>
                <option value="price-asc">{language === 'ar' ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                <option value="price-desc">{language === 'ar' ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                <option value="rating">{language === 'ar' ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Search Badge */}
        {searchQuery && (
          <div className="mb-6 p-3 rounded-xl bg-[#141419] border border-[#2B2B38] flex items-center justify-between text-xs text-[#C5BFAe]">
            <span>
              {language === 'ar' ? 'نتائج البحث عن:' : 'Results for:'} <strong className="text-[#F3E5AB]">"{searchQuery}"</strong>
            </span>
            <button onClick={() => setSearchQuery('')} className="text-[#D4AF37] hover:underline flex items-center gap-1">
              <X className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'إلغاء البحث' : 'Clear'}</span>
            </button>
          </div>
        )}

        {/* Product Cards Grid (Toggled between 1 per row and 2 per row) */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-[#0F0F14] border border-[#202028] rounded-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#18181F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Search className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#F4F4F0]">
              {language === 'ar' ? 'لم يتم العثور على قطع تطابق بحثك' : 'No masterpieces found'}
            </h3>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="gold-btn px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              {language === 'ar' ? 'عرض كافة المجموعات' : 'View All Collections'}
            </button>
          </div>
        ) : (
          <div className={`grid transition-all duration-300 ${
            gridColumns === 1
              ? 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8'
              : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
                currency={currency}
                isWishlisted={wishlist.some((p) => p.id === product.id)}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Mid-Page VIP Countdown Promo Banner */}
      <VipPromoBanner
        language={language}
        onExploreCatalog={scrollToCatalog}
        onApplyCoupon={handleApplyCoupon}
      />

      {/* Algerian Customer Reviews & Social Proof */}
      <CustomerTestimonials language={language} />

      {/* Luxury Footer */}
      <Footer
        language={language}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToCatalog();
        }}
        onOpenAiStylist={() => setIsAiStylistOpen(true)}
      />

      {/* Modals & Slide-over Panels */}
      {/* 1. Product Detail / Quick View Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        language={language}
        currency={currency}
        isWishlisted={quickViewProduct ? wishlist.some((p) => p.id === quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={(product, qty, size, shade) => {
          handleAddToCart(product, qty, size, shade);
          setQuickViewProduct(null);
          setIsCartOpen(true);
        }}
      />

      {/* 2. Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        language={language}
        currency={currency}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        couponCode={appliedCoupon || ''}
        appliedCoupon={appliedCoupon}
        couponDiscountPercent={couponDiscountPercent}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />

      {/* 3. Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        language={language}
        currency={currency}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={(product) => {
          handleAddToCart(product, 1);
          setIsWishlistOpen(false);
          setIsCartOpen(true);
        }}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 4. Express Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        language={language}
        currency={currency}
        couponDiscountPercent={couponDiscountPercent}
        appliedCoupon={appliedCoupon}
        onOrderCompleted={(order) => {
          setCart([]);
          setAppliedCoupon(null);
          setCouponDiscountPercent(0);
        }}
      />

      {/* 5. AI Stylist & Beauty Advisor Modal */}
      <AiStylistModal
        isOpen={isAiStylistOpen}
        onClose={() => setIsAiStylistOpen(false)}
        language={language}
        currency={currency}
        onAddEnsembleToCart={handleAddEnsembleToCart}
        onQuickViewProduct={(p) => setQuickViewProduct(p)}
      />

    </div>
  );
}
