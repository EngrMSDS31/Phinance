/** Supported display / base currencies — shared by frontend and backend. */
export declare const SUPPORTED_CURRENCIES: readonly ["USD", "PHP", "GBP", "EUR", "JPY", "AUD", "CAD", "SGD", "HKD", "CHF", "CNY", "INR"];
export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];
export declare const DEFAULT_CURRENCY: SupportedCurrency;
/** Default base currency suggestion for a given market type. */
export declare function defaultCurrencyForMarket(market: string | null | undefined): SupportedCurrency;
//# sourceMappingURL=currencies.d.ts.map