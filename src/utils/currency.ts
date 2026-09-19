import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; label: string; nameAr: string }> = {
  DZD: { symbol: 'د.ج', rate: 100, label: 'د.ج (DZD)', nameAr: 'دينار جزائري' },
};

/**
 * Formats monetary amounts in Algerian Dinar (DZD / د.ج)
 * ALWAYS displays exactly two decimals after the comma/point (e.g., 18,500.00 د.ج)
 */
export function formatPrice(amountInUSD: number, _currency?: Currency): string {
  const info = CURRENCY_RATES.DZD;
  const dzdValue = Number(amountInUSD || 0) * info.rate;
  
  // Format with comma thousands separator and strictly 2 decimal places (.00)
  const formatted = dzdValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${formatted} ${info.symbol}`;
}
