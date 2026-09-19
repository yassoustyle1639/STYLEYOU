import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, UserCheck, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { CartItem, Currency, CustomerInfo, Language, Order } from '../types';
import { formatPrice } from '../utils/currency';
import { translations } from '../data/translations';

export const ALGERIAN_WILAYAS = [
  { code: '01', nameAr: '01 - أدرار', nameFr: '01 - Adrar' },
  { code: '02', nameAr: '02 - الشلف', nameFr: '02 - Chlef' },
  { code: '03', nameAr: '03 - الأغواط', nameFr: '03 - Laghouat' },
  { code: '04', nameAr: '04 - أم البواقي', nameFr: '04 - Oum El Bouaghi' },
  { code: '05', nameAr: '05 - باتنة', nameFr: '05 - Batna' },
  { code: '06', nameAr: '06 - بجاية', nameFr: '06 - Béjaïa' },
  { code: '07', nameAr: '07 - بسكرة', nameFr: '07 - Biskra' },
  { code: '08', nameAr: '08 - بشار', nameFr: '08 - Béchar' },
  { code: '09', nameAr: '09 - البليدة', nameFr: '09 - Blida' },
  { code: '10', nameAr: '10 - البويرة', nameFr: '10 - Bouira' },
  { code: '11', nameAr: '11 - تمنراست', nameFr: '11 - Tamanrasset' },
  { code: '12', nameAr: '12 - تبسة', nameFr: '12 - Tébessa' },
  { code: '13', nameAr: '13 - تلمسان', nameFr: '13 - Tlemcen' },
  { code: '14', nameAr: '14 - تيارت', nameFr: '14 - Tiaret' },
  { code: '15', nameAr: '15 - تيزي وزو', nameFr: '15 - Tizi Ouzou' },
  { code: '16', nameAr: '16 - الجزائر (العاصمة)', nameFr: '16 - Alger' },
  { code: '17', nameAr: '17 - الجلفة', nameFr: '17 - Djelfa' },
  { code: '18', nameAr: '18 - جيجل', nameFr: '18 - Jijel' },
  { code: '19', nameAr: '19 - سطيف', nameFr: '19 - Sétif' },
  { code: '20', nameAr: '20 - سعيدة', nameFr: '20 - Saïda' },
  { code: '21', nameAr: '21 - سكيكدة', nameFr: '21 - Skikda' },
  { code: '22', nameAr: '22 - سيدي بلعباس', nameFr: '22 - Sidi Bel Abbès' },
  { code: '23', nameAr: '23 - عنابة', nameFr: '23 - Annaba' },
  { code: '24', nameAr: '24 - قالمة', nameFr: '24 - Guelma' },
  { code: '25', nameAr: '25 - قسنطينة', nameFr: '25 - Constantine' },
  { code: '26', nameAr: '26 - المدية', nameFr: '26 - Médéa' },
  { code: '27', nameAr: '27 - مستغانم', nameFr: '27 - Mostaganem' },
  { code: '28', nameAr: '28 - المسيلة', nameFr: '28 - M\'Sila' },
  { code: '29', nameAr: '29 - معسكر', nameFr: '29 - Mascara' },
  { code: '30', nameAr: '30 - ورقلة', nameFr: '30 - Ouargla' },
  { code: '31', nameAr: '31 - وهران', nameFr: '31 - Oran' },
  { code: '32', nameAr: '32 - البيض', nameFr: '32 - El Bayadh' },
  { code: '33', nameAr: '33 - إليزي', nameFr: '33 - Illizi' },
  { code: '34', nameAr: '34 - برج بوعريريج', nameFr: '34 - Bordj Bou Arreridj' },
  { code: '35', nameAr: '35 - بومرداس', nameFr: '35 - Boumerdès' },
  { code: '36', nameAr: '36 - الطارف', nameFr: '36 - El Tarf' },
  { code: '37', nameAr: '37 - تندوف', nameFr: '37 - Tindouf' },
  { code: '38', nameAr: '38 - تيسمسيلت', nameFr: '38 - Tissemsilt' },
  { code: '39', nameAr: '39 - الوادي', nameFr: '39 - El Oued' },
  { code: '40', nameAr: '40 - خنشلة', nameFr: '40 - Khenchela' },
  { code: '41', nameAr: '41 - سوق أهراس', nameFr: '41 - Souk Ahras' },
  { code: '42', nameAr: '42 - تيبازة', nameFr: '42 - Tipaza' },
  { code: '43', nameAr: '43 - ميلة', nameFr: '43 - Mila' },
  { code: '44', nameAr: '44 - عين الدفلى', nameFr: '44 - Aïn Defla' },
  { code: '45', nameAr: '45 - النعامة', nameFr: '45 - Naâma' },
  { code: '46', nameAr: '46 - عين تموشنت', nameFr: '46 - Aïn Témouchent' },
  { code: '47', nameAr: '47 - غرداية', nameFr: '47 - Ghardaïa' },
  { code: '48', nameAr: '48 - غليزان', nameFr: '48 - Relizane' },
  { code: '49', nameAr: '49 - تيميمون', nameFr: '49 - Timimoun' },
  { code: '50', nameAr: '50 - برج باجي مختار', nameFr: '50 - Bordj Badji Mokhtar' },
  { code: '51', nameAr: '51 - أولاد جلال', nameFr: '51 - Ouled Djellal' },
  { code: '52', nameAr: '52 - بني عباس', nameFr: '52 - Béni Abbès' },
  { code: '53', nameAr: '53 - عين صالح', nameFr: '53 - In Salah' },
  { code: '54', nameAr: '54 - عين قزام', nameFr: '54 - In Guezzam' },
  { code: '55', nameAr: '55 - توقرت', nameFr: '55 - Touggourt' },
  { code: '56', nameAr: '56 - جانت', nameFr: '56 - Djanet' },
  { code: '57', nameAr: '57 - المغير', nameFr: '57 - El M\'Ghair' },
  { code: '58', nameAr: '58 - المنيعة', nameFr: '58 - El Meniaa' },
];

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
  currency: Currency;
  couponDiscountPercent: number;
  appliedCoupon: string | null;
  onOrderCompleted: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  language,
  currency,
  couponDiscountPercent,
  appliedCoupon,
  onOrderCompleted,
}) => {
  if (!isOpen) return null;

  const t = translations[language];

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [wilaya, setWilaya] = useState('16 - الجزائر (العاصمة)');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'vip_concierge'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Financial calculations
  // Free delivery threshold is 200 USD = 20,000.00 د.ج
  // Flat shipping is 6 USD = 600.00 د.ج
  const subtotalUSD = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmountUSD = (subtotalUSD * couponDiscountPercent) / 100;
  const shippingUSD = subtotalUSD >= 200 ? 0 : 6;
  const grandTotalUSD = Math.max(0, subtotalUSD - discountAmountUSD + shippingUSD);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !wilaya) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `DZ-${Math.floor(100000 + Math.random() * 900000)}`;
      const newOrder: Order = {
        id: orderId,
        createdAt: new Date().toLocaleDateString(language === 'ar' ? 'ar-DZ' : 'fr-DZ', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        items: [...items],
        subtotal: subtotalUSD,
        discount: discountAmountUSD,
        shipping: shippingUSD,
        total: grandTotalUSD,
        currency,
        customer: {
          fullName,
          phone,
          email: email || 'client.algerie@style-you.com',
          city: wilaya,
          address,
          notes,
          paymentMethod,
        },
        status: 'confirmed',
      };

      setCompletedOrder(newOrder);
      setIsSubmitting(false);
      onOrderCompleted(newOrder);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="checkout-modal-container"
        className="relative w-full max-w-3xl bg-[#0E0E12] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-6 text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#141419] border-b border-[#22222B] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#201C12] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-luxury font-bold text-lg text-[#FAF7F0]">
                {completedOrder ? t.orderSuccessTitle : (language === 'ar' ? 'إتمام الطلب الملكي - التوصيل في الجزائر' : t.checkoutTitle)}
              </h2>
              <p className="text-xs text-[#A6997A]">
                {completedOrder 
                  ? t.orderSuccessSubtitle 
                  : (language === 'ar' ? 'الدفع نقداً عند الاستلام بعد المعاينة لكافة الـ 58 ولاية' : 'Doorstep delivery & Cash on Delivery across all 58 Wilayas')}
              </p>
            </div>
          </div>

          <button
            id="close-checkout-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full text-[#A8A193] hover:text-[#FFF] hover:bg-[#1A1A20]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {completedOrder ? (
          /* Order Confirmation Screen */
          <div className="p-6 sm:p-10 space-y-6 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#201B11] to-[#121216] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.35)] animate-pulse">
              <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                STYLE YOU ALGERIE
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFF]">
                {t.orderSuccessTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B2A4] max-w-md mx-auto">
                {language === 'ar'
                  ? 'تم تسجيل طلبك بنجاح. سيتصل بك فريق التوصيل لتأكيد الشحن إلى ولايتك.'
                  : t.orderSuccessSubtitle}
              </p>
            </div>

            {/* Order Details Receipt Box */}
            <div className="max-w-md mx-auto bg-[#14141A] border border-[#D4AF37]/40 rounded-xl p-5 text-start space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-[#25252E] pb-2">
                <span className="text-[#8C867A]">{t.orderNumber}:</span>
                <span className="font-mono font-bold text-[#F3E5AB]">{completedOrder.id}</span>
              </div>

              <div className="flex items-center justify-between text-xs border-b border-[#25252E] pb-2">
                <span className="text-[#8C867A]">{t.orderDate}:</span>
                <span className="text-[#E0DDD5]">{completedOrder.createdAt}</span>
              </div>

              <div className="flex items-center justify-between text-xs border-b border-[#25252E] pb-2">
                <span className="text-[#8C867A]">{t.fullName}:</span>
                <span className="text-[#E0DDD5] font-semibold">{completedOrder.customer.fullName}</span>
              </div>

              <div className="flex items-center justify-between text-xs border-b border-[#25252E] pb-2">
                <span className="text-[#8C867A]">{language === 'ar' ? 'الولاية:' : 'Wilaya:'}</span>
                <span className="text-[#F3E5AB] font-semibold">{completedOrder.customer.city}</span>
              </div>

              <div className="flex items-center justify-between text-xs border-b border-[#25252E] pb-2">
                <span className="text-[#8C867A]">{t.paymentMethod}:</span>
                <span className="text-[#D4AF37] font-semibold">
                  {completedOrder.customer.paymentMethod === 'cod'
                    ? (language === 'ar' ? 'الدفع عند الاستلام مع المعاينة' : t.payCod)
                    : t.payCard}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm font-bold pt-1">
                <span className="text-[#FAF7F0]">{t.total}:</span>
                <span className="text-base text-[#D4AF37] font-extrabold">
                  {formatPrice(completedOrder.total, currency)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                id="whatsapp-concierge-link"
                href={`https://wa.me/213555000000?text=${encodeURIComponent(
                  `مرحباً متجر STYLE YOU الجزائر، أود متابعة طلبي رقم ${completedOrder.id}\nالاسم: ${completedOrder.customer.fullName}\nالولاية: ${completedOrder.customer.city}\nالمبلغ الإجمالي: ${formatPrice(completedOrder.total, currency)}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'ar' ? 'تأكيد فوري عبر واتساب (+213)' : t.contactSupport}</span>
              </a>

              <button
                id="continue-shopping-order-btn"
                onClick={onClose}
                className="w-full sm:w-auto gold-btn px-6 py-3 rounded-lg text-xs font-bold"
              >
                {t.continueShopping}
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#C8C2B3]">
                  {t.fullName} <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="checkout-fullname"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={language === 'ar' ? 'محمد بن عيسى' : 'Amina Belkacem'}
                  className="w-full bg-[#141419] border border-[#2B2B35] rounded-lg px-3.5 py-2.5 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#C8C2B3]">
                  {t.phone} <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="checkout-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0555 12 34 56 / 06 / 07..."
                  className="w-full bg-[#141419] border border-[#2B2B35] rounded-lg px-3.5 py-2.5 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Wilaya (Algerian 58 Wilayas) */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#C8C2B3] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D4AF37]" />
                  <span>{language === 'ar' ? 'الولاية (58 ولاية)' : 'Wilaya (Algeria)'} <span className="text-[#D4AF37]">*</span></span>
                </label>
                <select
                  id="checkout-wilaya"
                  value={wilaya}
                  onChange={(e) => setWilaya(e.target.value)}
                  className="w-full bg-[#141419] border border-[#2B2B35] rounded-lg px-3.5 py-2.5 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#D4AF37]"
                >
                  {ALGERIAN_WILAYAS.map((w) => (
                    <option key={w.code} value={w.nameAr} className="bg-[#141419] text-[#FFF]">
                      {language === 'ar' ? w.nameAr : w.nameFr}
                    </option>
                  ))}
                </select>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#C8C2B3]">
                  {t.email} <span className="text-[#777] text-[10px]">({language === 'ar' ? 'اختياري' : 'Optional'})</span>
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@gmail.com"
                  className="w-full bg-[#141419] border border-[#2B2B35] rounded-lg px-3.5 py-2.5 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Address */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-medium text-[#C8C2B3]">
                  {t.address} <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="checkout-address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={language === 'ar' ? 'البلدية، اسم الحي، رقم الشارع أو العمارة' : 'Commune, District, Street name, House/Apartment number'}
                  className="w-full bg-[#141419] border border-[#2B2B35] rounded-lg px-3.5 py-2.5 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Notes */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-medium text-[#C8C2B3]">
                  {t.notes}
                </label>
                <textarea
                  id="checkout-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={language === 'ar' ? 'ملاحظات بخصوص وقت التسليم المفضل أو إضافة تغليف إهداء فاخر...' : 'Delivery instructions or gift wrapping requests...'}
                  className="w-full bg-[#141419] border border-[#2B2B35] rounded-lg px-3.5 py-2 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-3 border-t border-[#202026]">
              <label className="text-xs font-bold text-[#EAE8E0]">
                {t.paymentMethod}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* COD - Cash On Delivery */}
                <div
                  id="pay-method-cod"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-[#1D190E] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                      : 'bg-[#121216] border-[#25252E] hover:border-[#383842]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#F3E5AB]">
                      <Banknote className="w-4 h-4 text-[#D4AF37]" />
                      <span>{t.payCod}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#F3E5AB] border border-[#D4AF37]/40">
                      {language === 'ar' ? 'الخيار الأكثر طلباً' : 'Recommended'}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A6997A] leading-normal">
                    {language === 'ar'
                      ? 'ادفع نقداً عند استلام وفحص الطرد والتأكد من المقاس والجودة على باب منزلك'
                      : t.payCodDesc}
                  </p>
                </div>

                {/* VIP Concierge / WhatsApp confirmation */}
                <div
                  id="pay-method-concierge"
                  onClick={() => setPaymentMethod('vip_concierge')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'vip_concierge'
                      ? 'bg-[#1D190E] border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                      : 'bg-[#121216] border-[#25252E] hover:border-[#383842]'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F3E5AB] mb-1">
                    <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>{language === 'ar' ? 'تأكيد عبر واتساب مع المساعد الشخصي' : t.payConcierge}</span>
                  </div>
                  <p className="text-[11px] text-[#A6997A] leading-normal">
                    {language === 'ar'
                      ? 'سيتواصل معك خبير الدار لتأكيد الطلب وتحديد التوقيت الدقيق للتسليم'
                      : t.payConciergeDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary Line */}
            <div className="p-4 bg-[#141419] rounded-xl border border-[#23232C] flex items-center justify-between text-xs">
              <div>
                <span className="text-[#8C867A]">{items.length} {language === 'ar' ? 'قطع في الطلب' : 'items'} | </span>
                <span className="text-[#E0DDD5]">
                  {shippingUSD === 0 ? (
                    <span className="text-emerald-400 font-bold">{t.freeShipping}</span>
                  ) : (
                    formatPrice(shippingUSD, currency)
                  )}
                </span>
              </div>
              <div className="text-sm font-bold text-[#D4AF37]">
                {t.total}: {formatPrice(grandTotalUSD, currency)}
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="confirm-order-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-btn py-4 px-6 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/20 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{language === 'ar' ? 'جارٍ تسجيل الطلب الملكي...' : 'Processing luxury order...'}</span>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  <span>{t.confirmOrder} ({formatPrice(grandTotalUSD, currency)})</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
