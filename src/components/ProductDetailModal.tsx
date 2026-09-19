import React, { useState, useRef } from 'react';
import { X, Star, ShieldCheck, Gift, Truck, ShoppingBag, Heart, Check, Sparkles, MessageCircle } from 'lucide-react';
import { Currency, Language, Product, ProductShade } from '../types';
import { formatPrice } from '../utils/currency';
import { translations } from '../data/translations';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  language: Language;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number, size?: string, shade?: ProductShade) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  language,
  currency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  if (!product) return null;

  const t = translations[language];
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes ? product.sizes[0] : undefined
  );
  const [selectedShade, setSelectedShade] = useState<ProductShade | undefined>(
    product.shades ? product.shades[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'fragrance'>('details');

  const modalScrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);

  const handleModalScroll = () => {
    if (!modalScrollRef.current) return;
    const container = modalScrollRef.current;
    const width = container.clientWidth;
    if (width > 0) {
      const idx = Math.round(container.scrollLeft / width);
      if (idx !== selectedImgIndex && idx >= 0 && idx < product.images.length) {
        setSelectedImgIndex(idx);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!modalScrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - modalScrollRef.current.offsetLeft;
    scrollStartLeft.current = modalScrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !modalScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - modalScrollRef.current.offsetLeft;
    const walk = x - startX.current;
    modalScrollRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current || !modalScrollRef.current) return;
    isDragging.current = false;
    const container = modalScrollRef.current;
    const width = container.clientWidth;
    if (width > 0) {
      const targetIdx = Math.round(container.scrollLeft / width);
      container.scrollTo({ left: targetIdx * width, behavior: 'smooth' });
      setSelectedImgIndex(targetIdx);
    }
  };

  const handleSelectThumb = (index: number) => {
    setSelectedImgIndex(index);
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({
        left: index * modalScrollRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize, selectedShade);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="product-detail-modal"
        className="relative w-full max-w-4xl bg-[#0E0E12] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-product-modal-btn"
          onClick={onClose}
          className="absolute top-4 end-4 z-20 p-2 rounded-full bg-[#18181F]/80 text-[#D5CEBC] hover:text-[#FFF] hover:bg-[#25252E] border border-[#2E2E38] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-y-auto max-h-[85vh]">
          
          {/* Gallery Column */}
          <div className="md:col-span-6 bg-[#08080A] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-e border-[#202026]">
            
            {/* Primary Large Image with Smooth Touch & Mouse Drag Swipe (NO ARROWS) */}
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#121216] border border-[#26262B] group">
              
              <div
                ref={modalScrollRef}
                onScroll={handleModalScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none touch-auto select-none cursor-grab active:cursor-grabbing"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-full shrink-0 snap-center snap-always relative overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`${product.name[language]} - صورة ${idx + 1}`}
                      draggable={false}
                      className="w-full h-full object-cover object-center pointer-events-none select-none transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>

              {product.badgeText && (
                <div className="absolute top-3 start-3 z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded text-xs font-bold bg-[#0A0A0C]/90 text-[#F3E5AB] border border-[#D4AF37]/50">
                    {product.badgeText[language]}
                  </span>
                </div>
              )}

              {/* Dynamic Counter Badge */}
              {product.images.length > 1 && (
                <div className="absolute top-3 end-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-[#F3E5AB] pointer-events-none">
                  {selectedImgIndex + 1} / {product.images.length}
                </div>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1 scrollbar-none">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectThumb(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      selectedImgIndex === idx
                        ? 'border-[#D4AF37] shadow-md shadow-[#D4AF37]/30 scale-105'
                        : 'border-[#26262B] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Seals */}
            <div className="mt-6 pt-4 border-t border-[#1C1C22] grid grid-cols-2 gap-2 text-start text-[11px] text-[#A69E8F]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.authenticityNotice}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.freeShippingNotice}</span>
              </div>
            </div>

          </div>

          {/* Details & Actions Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-start">
            
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {product.subcategory}
                </span>
                <div className="flex items-center gap-1 text-xs text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-[#D4AF37]" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-[#8C867A]">({product.reviewsCount} {t.reviews})</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FAF7F0] leading-snug">
                  {product.name[language]}
                </h2>
                <p className="text-xs sm:text-sm text-[#A8A193] mt-1 font-normal">
                  {product.tagline[language]}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-bold text-[#F3E5AB]">
                  {formatPrice(product.price, currency)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#7A756C] line-through">
                    {formatPrice(product.originalPrice, currency)}
                  </span>
                )}
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#201C12] text-[#D4AF37] border border-[#D4AF37]/30">
                  {language === 'ar' ? 'شامل الضرائب الفاخرة' : 'Taxes Included'}
                </span>
              </div>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-[#C8C2B3] leading-relaxed">
                {product.description[language]}
              </p>

              {/* Shade / Color Picker (for Cosmetics) */}
              {product.shades && product.shades.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#202026]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A8A193] font-medium">{t.selectShade}:</span>
                    <span className="text-[#F3E5AB] font-semibold">
                      {selectedShade ? (language === 'ar' ? selectedShade.nameAr : selectedShade.name) : ''}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.shades.map((shade, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedShade(shade)}
                        className={`group relative p-1 rounded-full border-2 transition-all ${
                          selectedShade?.name === shade.name
                            ? 'border-[#D4AF37] scale-110 shadow-md shadow-[#D4AF37]/40'
                            : 'border-transparent hover:border-[#D4AF37]/50'
                        }`}
                        title={shade.name}
                      >
                        <span
                          className="block w-6 h-6 rounded-full border border-black shadow-inner"
                          style={{ backgroundColor: shade.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size / Volume Picker */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#202026]">
                  <div className="text-xs text-[#A8A193] font-medium">{t.selectSize}:</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.sizes.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all ${
                          selectedSize === size
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-sm'
                            : 'bg-[#15151A] text-[#D5CEBC] border-[#2A2A30] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 pt-2 border-t border-[#202026]">
                <span className="text-xs text-[#A8A193] font-medium">
                  {language === 'ar' ? 'الكمية المطلوبة:' : 'Quantity:'}
                </span>
                <div className="flex items-center border border-[#2E2E38] rounded-lg bg-[#141418] overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm text-[#E0DDD5] hover:bg-[#202028] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-bold text-[#F3E5AB]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm text-[#E0DDD5] hover:bg-[#202028] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Tabs for detailed breakdown */}
              <div className="pt-2 border-t border-[#202026]">
                <div className="flex items-center gap-4 border-b border-[#202026] text-xs pb-2">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-1 font-semibold transition-all relative ${
                      activeTab === 'details' ? 'text-[#D4AF37]' : 'text-[#8C867A] hover:text-[#CCC]'
                    }`}
                  >
                    {t.details}
                    {activeTab === 'details' && (
                      <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#D4AF37]"></span>
                    )}
                  </button>

                  {product.fragranceNotes && (
                    <button
                      onClick={() => setActiveTab('fragrance')}
                      className={`pb-1 font-semibold transition-all relative ${
                        activeTab === 'fragrance' ? 'text-[#D4AF37]' : 'text-[#8C867A] hover:text-[#CCC]'
                      }`}
                    >
                      {t.fragrancePyramid}
                      {activeTab === 'fragrance' && (
                        <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#D4AF37]"></span>
                      )}
                    </button>
                  )}

                  {product.ingredients && (
                    <button
                      onClick={() => setActiveTab('ingredients')}
                      className={`pb-1 font-semibold transition-all relative ${
                        activeTab === 'ingredients' ? 'text-[#D4AF37]' : 'text-[#8C867A] hover:text-[#CCC]'
                      }`}
                    >
                      {t.composition}
                      {activeTab === 'ingredients' && (
                        <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#D4AF37]"></span>
                      )}
                    </button>
                  )}
                </div>

                <div className="pt-3 text-xs text-[#B5B0A2]">
                  {activeTab === 'details' && (
                    <ul className="space-y-1.5 list-disc list-inside">
                      {product.details[language].map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'fragrance' && product.fragranceNotes && (
                    <div className="space-y-2">
                      <div>
                        <span className="font-bold text-[#F3E5AB]">{t.topNotes}: </span>
                        <span>{product.fragranceNotes.top[language === 'ar' ? 'ar' : 'en']}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#F3E5AB]">{t.heartNotes}: </span>
                        <span>{product.fragranceNotes.heart[language === 'ar' ? 'ar' : 'en']}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#F3E5AB]">{t.baseNotes}: </span>
                        <span>{product.fragranceNotes.base[language === 'ar' ? 'ar' : 'en']}</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ingredients' && product.ingredients && (
                    <p className="leading-relaxed">
                      {product.ingredients[language === 'ar' ? 'ar' : 'en']}
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* Actions Bar */}
            <div className="space-y-2.5 pt-4 border-t border-[#202026]">
              <div className="flex items-center gap-3">
                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3.5 px-6 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                    addedSuccess
                      ? 'bg-emerald-500 text-black shadow-emerald-500/20'
                      : 'gold-btn'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>{t.addedToCart}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.addToCart}</span>
                    </>
                  )}
                </button>

                <button
                  id="modal-wishlist-toggle-btn"
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3.5 rounded-lg border transition-all ${
                    isWishlisted
                      ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                      : 'bg-[#18181E] text-[#D5CEBC] border-[#2E2E38] hover:border-[#D4AF37]/50'
                  }`}
                  title={isWishlisted ? t.removeFromWishlist : t.saveToWishlist}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-black text-black' : ''}`} />
                </button>
              </div>

              {/* Direct WhatsApp Ordering */}
              <a
                id="modal-whatsapp-order-btn"
                href={`https://wa.me/213555000000?text=${encodeURIComponent(
                  `مرحباً متجر STYLE YOU، أود طلب المنتج التالي:\nالمنتج: ${product.name[language] || product.name.ar}\nالسعر: ${formatPrice(product.price, currency)}${selectedSize ? `\nالمقاس: ${selectedSize}` : ''}${selectedShade ? `\nالدرجة: ${selectedShade.name}` : ''}\nالكمية: ${quantity}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-emerald-600/40"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>{language === 'ar' ? 'طلب فوري عبر الواتساب (الدفع عند الاستلام)' : 'Fast Order via WhatsApp (COD)'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
