import React, { useState, useRef } from 'react';
import { Heart, ShoppingBag, Check, MessageCircle, Eye } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { formatPrice } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  language: Language;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  language,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag tracking for mouse & touch
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);
  const dragDistance = useRef(0);

  const images = product.images && product.images.length > 0
    ? product.images
    : ['https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'];

  const totalImages = images.length;

  // Track active slide on scroll (hardware-accelerated snap)
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const width = container.clientWidth;
    if (width > 0) {
      const activeIdx = Math.round(container.scrollLeft / width);
      if (activeIdx !== currentImageIndex && activeIdx >= 0 && activeIdx < totalImages) {
        setCurrentImageIndex(activeIdx);
      }
    }
  };

  // Mouse Drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isMouseDown.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStartLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    dragDistance.current = Math.abs(walk);
    scrollRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isMouseDown.current || !scrollRef.current) return;
    isMouseDown.current = false;
    const container = scrollRef.current;
    const width = container.clientWidth;
    if (width > 0) {
      const targetIdx = Math.round(container.scrollLeft / width);
      container.scrollTo({
        left: targetIdx * width,
        behavior: 'smooth',
      });
      setCurrentImageIndex(targetIdx);
    }
  };

  // Touch handlers for mobile (allow vertical page scrolling while detecting horizontal swipe)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current !== null && touchStartY.current !== null) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      // Only count as carousel horizontal drag if horizontal motion clearly dominates
      if (deltaX > deltaY && deltaX > 8) {
        dragDistance.current = deltaX;
      }
    }
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth',
      });
      setCurrentImageIndex(index);
    }
  };

  const handleCardClick = () => {
    if (dragDistance.current > 12) {
      // User was swiping or dragging, do not open quick view
      dragDistance.current = 0;
      return;
    }
    onQuickView(product);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const formattedPriceDZD = formatPrice(product.price, currency);
  const productName = product.name[language] || product.name.ar;

  // Algerian WhatsApp Direct Order Link
  const whatsappUrl = `https://wa.me/213555000000?text=${encodeURIComponent(
    `السلام عليكم، أود طلب هذا المنتج من متجر STYLE YOU:\n- المنتج: ${productName}\n- السعر: ${formattedPriceDZD}\n- المعرف: ${product.id}\nيرجى تأكيد التوصيل لموقعي والدفع عند الاستلام. شكراً!`
  )}`;

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={handleCardClick}
      className="group bg-[#0B0B0E] rounded-2xl border border-[#1C1C24] hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9),0_0_20px_-5px_rgba(212,175,55,0.15)] w-full min-w-0"
    >
      {/* 1. Interactive Swipeable / Draggable Image Carousel (NO ARROWS) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#121217] select-none">
        
        {/* Horizontal Snap Scroll Container for Touch Swipe & Mouse Drag */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none touch-auto select-none cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-full shrink-0 snap-center snap-always relative overflow-hidden"
            >
              <img
                src={img}
                alt={`${productName} - صورة ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges (Category/Discount) */}
        <div className="absolute top-3 start-3 z-10 flex flex-col gap-1.5 items-start pointer-events-none">
          {product.badgeText && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-black shadow-md">
              {product.badgeText[language] || product.badgeText.ar}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#9E1B1B] text-white shadow-sm">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Dynamic Image Counter (e.g. 1 / 3) */}
        {totalImages > 1 && (
          <div className="absolute top-3 end-14 z-10 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#F3E5AB] pointer-events-none">
            {currentImageIndex + 1} / {totalImages}
          </div>
        )}

        {/* Top-Right Wishlist Heart */}
        <button
          id={`wishlist-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 end-3 z-20 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ${
            isWishlisted
              ? 'bg-[#D4AF37] text-black shadow-lg scale-105'
              : 'bg-black/50 text-[#C5BFAe] hover:text-white hover:bg-black/80'
          }`}
          aria-label="Add to Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-black' : ''}`} />
        </button>

        {/* Pagination Dots at Bottom of Image (Clickable & Active Indicator) */}
        {totalImages > 1 && (
          <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentImageIndex === idx
                    ? 'w-5 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                    : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Show image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Quick View Tag on Hover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 text-xs font-semibold text-[#F3E5AB] flex items-center gap-1.5 shadow-xl">
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
            {language === 'ar' ? 'عرض التفاصيل' : 'Quick View'}
          </span>
        </div>
      </div>

      {/* 2. Structured Product Information & Actions */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4 text-start min-w-0">
        
        {/* Category, Title & Tagline */}
        <div className="space-y-1 sm:space-y-1.5 min-w-0">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#A89F8B] font-semibold tracking-wider uppercase">
            <span className="truncate">
              {product.category === 'clothing' ? 'أزياء راقية • COUTURE' :
               product.category === 'cosmetics' ? 'عناية بالذهب 24K' :
               product.category === 'fragrance' ? 'عطور نيش • NICHE' : 'مجوهرات فاخرة'}
            </span>
            {product.stockLeft && product.stockLeft <= 4 && (
              <span className="text-amber-400 font-bold text-[9px] sm:text-[10px] shrink-0 ms-1">
                {language === 'ar' ? `بقي ${product.stockLeft}` : `Few left`}
              </span>
            )}
          </div>

          <h3 className="font-serif-luxury font-bold text-xs sm:text-base text-[#FAF7F0] group-hover:text-[#F3E5AB] transition-colors line-clamp-1">
            {productName}
          </h3>

          <p className="text-[11px] sm:text-xs text-[#8C867A] line-clamp-1 leading-relaxed">
            {product.tagline[language] || product.tagline.ar}
          </p>
        </div>

        {/* Price Row */}
        <div className="pt-2 border-t border-[#1C1C24] flex items-baseline justify-between min-w-0">
          <div className="min-w-0">
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-lg text-[#F3E5AB] tracking-tight">
                {formattedPriceDZD}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-[#6F6B61] line-through font-normal">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#7A756C] block mt-0.5 truncate">
              {language === 'ar' ? 'معاينة قبل الدفع • 58 ولاية' : 'Inspection before COD'}
            </span>
          </div>

          <span className="text-[11px] sm:text-xs text-[#D4AF37] font-semibold shrink-0">
            ★ {product.rating}
          </span>
        </div>

        {/* 3. Clearly Coordinated Action Buttons */}
        <div className="pt-1 flex flex-col gap-1.5 sm:gap-2" onClick={(e) => e.stopPropagation()}>
          
          {/* Main Action: Add to Cart */}
          <button
            id={`add-to-cart-btn-${product.id}`}
            onClick={handleAdd}
            className={`w-full py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
              justAdded
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#070709] shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="truncate">{language === 'ar' ? 'تمت الإضافة' : 'Added'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="truncate">{language === 'ar' ? 'أضف للحقيبة' : 'Add to Bag'}</span>
              </>
            )}
          </button>

          {/* Secondary Action: Direct WhatsApp Order */}
          <a
            id={`whatsapp-card-btn-${product.id}`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl bg-[#121612] hover:bg-[#182218] border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 text-[10px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-1.5 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{language === 'ar' ? 'طلب بالواتساب' : 'WhatsApp'}</span>
          </a>

        </div>

      </div>

    </div>
  );
};
