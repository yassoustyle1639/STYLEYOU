import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ArrowLeft, ShoppingBag, ShieldCheck, Tag, Check } from 'lucide-react';
import { CartItem, Currency, Language } from '../types';
import { formatPrice } from '../utils/currency';
import { translations } from '../data/translations';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
  currency: Currency;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenCheckout: () => void;
  couponCode: string;
  appliedCoupon: string | null;
  couponDiscountPercent: number;
  onApplyCoupon: (code: string) => boolean;
  onRemoveCoupon: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  language,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
  appliedCoupon,
  couponDiscountPercent,
  onApplyCoupon,
  onRemoveCoupon,
}) => {
  if (!isOpen) return null;

  const t = translations[language];
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState(false);

  // Subtotal in base USD (200 USD = 20,000.00 د.ج free delivery threshold)
  const subtotalUSD = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThresholdUSD = 200;
  const isFreeShipping = subtotalUSD >= freeShippingThresholdUSD;
  const amountNeededUSD = Math.max(0, freeShippingThresholdUSD - subtotalUSD);
  const progressPercent = Math.min(100, (subtotalUSD / freeShippingThresholdUSD) * 100);

  const discountAmountUSD = (subtotalUSD * couponDiscountPercent) / 100;
  const shippingUSD = isFreeShipping || items.length === 0 ? 0 : 6;
  const totalUSD = Math.max(0, subtotalUSD - discountAmountUSD + shippingUSD);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const success = onApplyCoupon(promoInput.trim().toUpperCase());
    if (!success) {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 3000);
    } else {
      setPromoInput('');
      setPromoError(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-y-0 end-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10"
        onClick={onClose}
      >
        <div 
          id="cart-drawer-panel"
          className="w-screen max-w-md bg-[#0D0D11] border-s rtl:border-s-0 rtl:border-e border-[#D4AF37]/30 shadow-2xl flex flex-col h-full text-start"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-[#202026] flex items-center justify-between bg-[#121216]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-full bg-[#1F1C14] border border-[#D4AF37]/40 text-[#D4AF37]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif-luxury font-bold text-base text-[#F4F4F0]">
                  {t.cartTitle}
                </h2>
                <span className="text-xs text-[#8C867A]">
                  ({items.reduce((s, i) => s + i.quantity, 0)} {language === 'ar' ? 'قطع' : 'items'})
                </span>
              </div>
            </div>

            <button
              id="close-cart-btn"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8A193] hover:text-[#FFF] hover:bg-[#202028] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-5 py-3 bg-[#16161C] border-b border-[#202026]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[#C8C2B3] font-medium">
                {isFreeShipping
                  ? t.shippingProgressFree
                  : t.shippingProgressNeed.replace(
                      '{amount}',
                      formatPrice(amountNeededUSD, currency)
                    )}
              </span>
              <span className="text-[#D4AF37] font-bold">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#25252E] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#AA8224] to-[#F3E5AB] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#18181F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <p className="text-sm text-[#A8A193] max-w-xs">
                  {t.emptyCart}
                </p>
                <button
                  id="empty-cart-start-shopping"
                  onClick={onClose}
                  className="gold-btn px-5 py-2.5 rounded-lg text-xs font-bold"
                >
                  {t.startShopping}
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  id={`cart-item-${item.id}`}
                  className="p-3 rounded-xl bg-[#141418] border border-[#23232A] flex gap-3 relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#0A0A0C] border border-[#2C2C35] shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name[language]}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif-luxury font-semibold text-xs text-[#FAF7F0] line-clamp-1">
                        {item.product.name[language]}
                      </h4>
                      <div className="text-[11px] text-[#A69E8F] mt-0.5 space-y-0.5">
                        {item.selectedSize && (
                          <div>
                            <span>{language === 'ar' ? 'المقاس: ' : 'Size: '}</span>
                            <span className="text-[#F3E5AB]">{item.selectedSize}</span>
                          </div>
                        )}
                        {item.selectedShade && (
                          <div className="flex items-center gap-1">
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-black"
                              style={{ backgroundColor: item.selectedShade.hex }}
                            />
                            <span>
                              {language === 'ar' ? item.selectedShade.nameAr : item.selectedShade.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#2A2A33] rounded bg-[#0D0D10]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-0.5 text-xs text-[#D5CEBC] hover:bg-[#202028]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-[#F3E5AB]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-0.5 text-xs text-[#D5CEBC] hover:bg-[#202028]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#F3E5AB]">
                        {formatPrice(item.product.price * item.quantity, currency)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-2 end-2 p-1 text-[#7A756C] hover:text-red-400 transition-colors"
                    title={language === 'ar' ? 'حذف من الحقيبة' : 'Remove item'}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Coupon Code Section */}
          {items.length > 0 && (
            <div className="p-4 bg-[#111116] border-t border-[#202026]">
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-[#1C2818] border border-emerald-500/40 rounded-lg px-3 py-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Check className="w-4 h-4" />
                    <span className="font-semibold">{appliedCoupon} (-{couponDiscountPercent}%)</span>
                  </div>
                  <button
                    onClick={onRemoveCoupon}
                    className="text-[#999] hover:text-[#FFF] text-xs underline"
                  >
                    {language === 'ar' ? 'إلغاء' : 'Remove'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#D4AF37] absolute start-2.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="coupon-code-input"
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="GOLD2026"
                        className="w-full bg-[#18181F] border border-[#2E2E38] rounded-lg ps-8 pe-3 py-2 text-xs text-[#F4F4F0] uppercase tracking-wider focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <button
                      id="apply-coupon-btn"
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-[#201C12] hover:bg-[#2D2617] border border-[#D4AF37]/50 text-xs font-semibold text-[#F3E5AB] transition-colors"
                    >
                      {t.applyCoupon}
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[11px] text-red-400 pt-0.5">{t.invalidCoupon}</p>
                  )}
                </form>
              )}
            </div>
          )}

          {/* Footer Totals & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-5 bg-[#14141A] border-t border-[#202026] space-y-3">
              <div className="space-y-1.5 text-xs text-[#B8B2A4]">
                <div className="flex items-center justify-between">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold text-[#E0DDD5]">
                    {formatPrice(subtotalUSD, currency)}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex items-center justify-between text-emerald-400">
                    <span>{t.discount} ({appliedCoupon})</span>
                    <span className="font-semibold">
                      -{formatPrice(discountAmountUSD, currency)}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span>{t.shipping}</span>
                  <span className="font-semibold text-[#E0DDD5]">
                    {shippingUSD === 0 ? (
                      <span className="text-emerald-400 font-bold">{t.freeShipping}</span>
                    ) : (
                      formatPrice(shippingUSD, currency)
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#25252E] text-sm text-[#FAF7F0] font-bold">
                  <span>{t.total}</span>
                  <span className="text-base text-[#F3E5AB]">
                    {formatPrice(totalUSD, currency)}
                  </span>
                </div>
              </div>

              <button
                id="drawer-checkout-btn"
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full gold-btn py-3.5 px-6 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/15"
              >
                <span>{t.checkoutBtn}</span>
                {language === 'ar' ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#7A756C] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{language === 'ar' ? 'دفع آمن ومحمي بأعلى معايير التشفير' : 'Encrypted & Secure Luxury Checkout'}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
