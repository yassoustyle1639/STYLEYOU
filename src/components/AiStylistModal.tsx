import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShoppingBag, Wand2 } from 'lucide-react';
import { Currency, Language, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/currency';
import { translations } from '../data/translations';

interface AiStylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currency: Currency;
  onAddEnsembleToCart: (products: Product[]) => void;
  onQuickViewProduct: (product: Product) => void;
}

export const AiStylistModal: React.FC<AiStylistModalProps> = ({
  isOpen,
  onClose,
  language,
  currency,
  onAddEnsembleToCart,
  onQuickViewProduct,
}) => {
  if (!isOpen) return null;

  const t = translations[language];

  const [occasion, setOccasion] = useState<'gala' | 'daily' | 'business' | 'gift'>('gala');
  const [style, setStyle] = useState<'bold' | 'classic' | 'modern'>('bold');
  const [targetGender, setTargetGender] = useState<'women' | 'men' | 'unisex'>('women');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedEnsemble, setGeneratedEnsemble] = useState<{
    clothing: Product;
    cosmetic: Product;
    fragrance: Product;
    rationale: { ar: string; en: string; fr: string };
  } | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      // Intelligently select complementary items from PRODUCTS
      let clothingItem = PRODUCTS.find(
        (p) => p.category === 'clothing' && (targetGender === 'unisex' || p.gender === targetGender || p.gender === 'unisex')
      ) || PRODUCTS.find((p) => p.category === 'clothing')!;

      if (targetGender === 'men') {
        clothingItem = PRODUCTS.find((p) => p.id === 'cloth-02') || clothingItem;
      } else if (occasion === 'daily') {
        clothingItem = PRODUCTS.find((p) => p.id === 'cloth-03') || clothingItem;
      } else if (style === 'classic') {
        clothingItem = PRODUCTS.find((p) => p.id === 'cloth-04') || clothingItem;
      } else {
        clothingItem = PRODUCTS.find((p) => p.id === 'cloth-01') || clothingItem;
      }

      let cosmeticItem = PRODUCTS.find((p) => p.category === 'cosmetics')!;
      if (style === 'bold') {
        cosmeticItem = PRODUCTS.find((p) => p.id === 'cosm-02') || cosmeticItem;
      } else {
        cosmeticItem = PRODUCTS.find((p) => p.id === 'cosm-01') || cosmeticItem;
      }

      let fragranceItem = PRODUCTS.find((p) => p.category === 'fragrance')!;
      if (occasion === 'gala' || style === 'bold') {
        fragranceItem = PRODUCTS.find((p) => p.id === 'frag-01') || fragranceItem;
      } else {
        fragranceItem = PRODUCTS.find((p) => p.id === 'frag-02') || fragranceItem;
      }

      let rationale = {
        ar: 'تناغم ساحر بين عمق الأسود وفخامة الذهب عيار 24 قيراط. يمنحك الفستان/البدلة حضوراً قيادياً مهيباً، بينما يعزز السيروم/الروج إشراقة وجهك، ويكتمل السحر بنفحات العود والعنبر التي تترك أثراً لا يُمحى.',
        en: 'A magnetic synergy between midnight velvet and liquid 24K radiance. The couture tailoring commands the room, while the beauty treatment enlivens your aura, capped by an unforgettable trail of rare royal oud.',
        fr: 'Une alchimie parfaite entre l’ébène profond et l’or 24 carats. La coupe magistrale sublime la silhouette tandis que le soin rehausse votre teint, scellé par le sillage envoûtant d’un oud séculaire.'
      };

      setGeneratedEnsemble({
        clothing: clothingItem,
        cosmetic: cosmeticItem,
        fragrance: fragranceItem,
        rationale,
      });
      setIsGenerating(false);
    }, 1000);
  };

  const ensembleProducts = generatedEnsemble
    ? [generatedEnsemble.clothing, generatedEnsemble.cosmetic, generatedEnsemble.fragrance]
    : [];

  const ensembleTotalUSD = ensembleProducts.reduce((sum, p) => sum + p.price, 0);
  const bundleDiscountUSD = ensembleTotalUSD * 0.1; // 10% bundle discount
  const discountedTotalUSD = ensembleTotalUSD - bundleDiscountUSD;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="ai-stylist-modal-card"
        className="relative w-full max-w-3xl bg-[#0E0E12] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-6 text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#1E190E] via-[#121216] to-[#0E0E12] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-luxury font-bold text-xl text-[#FAF7F0]">
                {t.aiStylistTitle}
              </h2>
              <p className="text-xs text-[#A8A193]">
                {t.aiStylistSubtitle}
              </p>
            </div>
          </div>

          <button
            id="close-ai-stylist-btn"
            onClick={onClose}
            className="p-2 rounded-full text-[#A8A193] hover:text-[#FFF] hover:bg-[#1A1A20]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Preferences Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* 1. Occasion */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#EAE8E0]">
                {t.occasionLabel}
              </label>
              <select
                id="stylist-occasion-select"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value as any)}
                className="w-full bg-[#141419] border border-[#2B2B35] text-xs text-[#F3E5AB] rounded-lg p-2.5 focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="gala">{t.occasionGala}</option>
                <option value="daily">{t.occasionDaily}</option>
                <option value="business">{t.occasionBusiness}</option>
                <option value="gift">{t.occasionGift}</option>
              </select>
            </div>

            {/* 2. Aesthetic Style */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#EAE8E0]">
                {t.styleLabel}
              </label>
              <select
                id="stylist-style-select"
                value={style}
                onChange={(e) => setStyle(e.target.value as any)}
                className="w-full bg-[#141419] border border-[#2B2B35] text-xs text-[#F3E5AB] rounded-lg p-2.5 focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="bold">{t.styleBold}</option>
                <option value="classic">{t.styleClassic}</option>
                <option value="modern">{t.styleModern}</option>
              </select>
            </div>

            {/* 3. Gender / Department */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#EAE8E0]">
                {language === 'ar' ? 'القسم المستهدف' : 'Target Category'}
              </label>
              <select
                id="stylist-gender-select"
                value={targetGender}
                onChange={(e) => setTargetGender(e.target.value as any)}
                className="w-full bg-[#141419] border border-[#2B2B35] text-xs text-[#F3E5AB] rounded-lg p-2.5 focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="women">{t.genderWomen}</option>
                <option value="men">{t.genderMen}</option>
                <option value="unisex">{t.genderUnisex}</option>
              </select>
            </div>

          </div>

          {/* Generate Button */}
          <div className="flex justify-center pt-2">
            <button
              id="generate-ensemble-btn"
              onClick={handleGenerate}
              disabled={isGenerating}
              className="gold-btn px-8 py-3.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-xl shadow-[#D4AF37]/20"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>{language === 'ar' ? 'جارٍ تنسيق إطلالتك الفاخرة...' : 'Harmonizing your luxury ensemble...'}</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>{t.generateRecommendation}</span>
                </>
              )}
            </button>
          </div>

          {/* Curated Ensemble Display */}
          {generatedEnsemble && (
            <div className="mt-8 pt-6 border-t border-[#22222A] space-y-6 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-luxury font-bold text-base sm:text-lg text-[#F4F4F0]">
                    {t.recommendationTitle}
                  </h3>
                  <p className="text-xs text-[#8C867A]">
                    {language === 'ar' ? 'مجموعة متكاملة تضم زياً راقياً، مستحضراً تجميلياً، وعطراً أيقونياً' : 'Coordinated Couture, Cosmetics & Haute Parfumerie'}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201C12] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'خصم 10% على الباقة' : '10% Ensemble Privilege'}</span>
                </div>
              </div>

              {/* 3 Item Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ensembleProducts.map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-[#141419] border border-[#262630] flex flex-col justify-between space-y-2 hover:border-[#D4AF37]/50 transition-colors"
                  >
                    <div 
                      className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#0A0A0C] cursor-pointer"
                      onClick={() => onQuickViewProduct(item)}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name[language]}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <span className="text-[10px] text-[#D4AF37] font-semibold uppercase">
                        {idx === 0 ? (language === 'ar' ? 'الزي الملكي' : 'Couture Attire') :
                         idx === 1 ? (language === 'ar' ? 'لمسة الجمال' : 'Cosmetic Glow') :
                                     (language === 'ar' ? 'العطر الأيقوني' : 'Signature Scent')}
                      </span>
                      <h4 className="font-serif-luxury text-xs font-semibold text-[#FAF7F0] line-clamp-1">
                        {item.name[language]}
                      </h4>
                      <div className="text-xs font-bold text-[#F3E5AB] mt-1">
                        {formatPrice(item.price, currency)}
                      </div>
                    </div>

                    <button
                      onClick={() => onQuickViewProduct(item)}
                      className="w-full py-1.5 rounded bg-[#1C1C24] hover:bg-[#252530] text-[11px] text-[#D5CEBC] font-medium transition-colors"
                    >
                      {t.quickView}
                    </button>
                  </div>
                ))}
              </div>

              {/* Rationale Box */}
              <div className="p-4 rounded-xl bg-[#15151C] border border-[#D4AF37]/30 space-y-1.5 text-xs text-[#C8C2B3]">
                <div className="font-bold text-[#F3E5AB] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{t.recommendationWhy}</span>
                </div>
                <p className="leading-relaxed">
                  {generatedEnsemble.rationale[language]}
                </p>
              </div>

              {/* Ensemble Bundle Action Bar */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#1C170E] via-[#14141A] to-[#1C170E] border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#A8A193]">{language === 'ar' ? 'إجمالي الإطلالة المتناسقة:' : 'Complete Look Total:'}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-[#F3E5AB]">
                      {formatPrice(discountedTotalUSD, currency)}
                    </span>
                    <span className="text-xs text-[#7A756C] line-through">
                      {formatPrice(ensembleTotalUSD, currency)}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold">
                      ({language === 'ar' ? 'وفرت 10%' : '10% Bundle Saved'})
                    </span>
                  </div>
                </div>

                <button
                  id="add-full-ensemble-btn"
                  onClick={() => {
                    onAddEnsembleToCart(ensembleProducts);
                    onClose();
                  }}
                  className="w-full sm:w-auto gold-btn px-6 py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{language === 'ar' ? 'إضافة الإطلالة الكاملة إلى الحقيبة' : 'Add Complete Look to Bag'}</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
