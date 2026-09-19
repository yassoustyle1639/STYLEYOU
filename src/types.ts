export type Language = 'ar' | 'en' | 'fr';

export type Currency = 'DZD';

export type Category = 'all' | 'clothing' | 'cosmetics' | 'fragrance' | 'accessories';

export type Gender = 'all' | 'women' | 'men' | 'unisex';

export interface ProductShade {
  name: string;
  nameAr: string;
  hex: string;
}

export interface FragranceNotes {
  top: { ar: string; en: string };
  heart: { ar: string; en: string };
  base: { ar: string; en: string };
}

export interface Product {
  id: string;
  name: { ar: string; en: string; fr: string };
  tagline: { ar: string; en: string; fr: string };
  category: 'clothing' | 'cosmetics' | 'fragrance' | 'accessories';
  subcategory: string;
  gender: 'women' | 'men' | 'unisex';
  price: number; // in USD
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  badge?: 'exclusive' | 'bestseller' | 'limited' | 'new';
  badgeText?: { ar: string; en: string; fr: string };
  inStock: boolean;
  stockLeft?: number;
  shades?: ProductShade[];
  sizes?: string[];
  description: { ar: string; en: string; fr: string };
  details: { ar: string[]; en: string[]; fr: string[] };
  fragranceNotes?: FragranceNotes;
  ingredients?: { ar: string; en: string };
}

export interface CartItem {
  id: string; // unique item id combining product.id + size + shade
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedShade?: ProductShade;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  notes?: string;
  paymentMethod: 'cod' | 'card' | 'vip_concierge';
}

export interface Order {
  id: string;
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  currency: Currency;
  customer: CustomerInfo;
  status: 'confirmed' | 'preparing' | 'shipped';
}

export interface FilterState {
  category: Category;
  gender: Gender;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  onlyInStock: boolean;
}
