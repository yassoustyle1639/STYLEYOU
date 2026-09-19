import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { formatPrice } from '../utils/currency';
import { translations } from '../data/translations';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  language: Language;
  currency: Currency;
  onRemoveFromWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  language,
  currency,
  onRemoveFromWishlist,
  onAddToCart,
  onQuickView,
}) => {
  if (!isOpen) return null;

  const t = translations[language];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-y-0 end-0 max-w-full flex pl-10 rtl:pl-0 rtl:pr-10"
        onClick={onClose}
      >
        <div 
          id="wishlist-drawer-panel"
          className="w-screen max-w-md bg-[#0D0D11] border-s rtl:border-s-0 rtl:border-e border-[#D4AF37]/30 shadow-2xl flex flex-col h-full text-start"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-[#202026] flex items-center justify-between bg-[#121216]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-full bg-[#1F1C14] border border-[#D4AF37]/40 text-[#D4AF37]">
                <Heart className="w-5 h-5 fill-[#D4AF37]" />
              </div>
              <div>
                <h2 className="font-serif-luxury font-bold text-base text-[#F4F4F0]">
                  {t.wishlistTitle}
                </h2>
                <span className="text-xs text-[#8C867A]">
                  ({wishlist.length} {language === 'ar' ? 'قطع محفوظة' : 'saved items'})
                </span>
              </div>
            </div>

            <button
              id="close-wishlist-btn"
              onClick={onClose}
              className="p-2 rounded-full text-[#A8A193] hover:text-[#FFF] hover:bg-[#202028] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#18181F] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <p className="text-sm text-[#A8A193] max-w-xs">
                  {t.emptyWishlist}
                </p>
                <button
                  id="empty-wishlist-explore-btn"
                  onClick={onClose}
                  className="gold-btn px-5 py-2.5 rounded-lg text-xs font-bold"
                >
                  {t.startShopping}
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  id={`wishlist-item-${product.id}`}
                  className="p-3 rounded-xl bg-[#141418] border border-[#23232A] flex gap-3 relative group"
                >
                  {/* Thumbnail */}
                  <div 
                    onClick={() => {
                      onClose();
                      onQuickView(product);
                    }}
                    className="w-20 h-24 rounded-lg overflow-hidden bg-[#0A0A0C] border border-[#2C2C35] shrink-0 cursor-pointer"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 
                        onClick={() => {
                          onClose();
                          onQuickView(product);
                        }}
                        className="font-serif-luxury font-semibold text-xs text-[#FAF7F0] line-clamp-1 hover:text-[#F3E5AB] cursor-pointer"
                      >
                        {product.name[language]}
                      </h4>
                      <p className="text-[11px] text-[#8C867A] line-clamp-1 mt-0.5">
                        {product.tagline[language]}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-bold text-[#F3E5AB]">
                        {formatPrice(product.price, currency)}
                      </span>

                      <button
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#D4AF37] hover:bg-[#F3E5AB] text-black transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{t.addToCart}</span>
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveFromWishlist(product)}
                    className="absolute top-2 end-2 p-1 text-[#7A756C] hover:text-red-400 transition-colors"
                    title={t.removeFromWishlist}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
