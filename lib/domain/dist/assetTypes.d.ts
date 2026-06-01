/**
 * Asset-type capability matrix — the single source of truth for what each
 * asset type can do. Imported by both the frontend (forms, engine) and the
 * backend (server-side transaction validation). Never duplicate these literals.
 */
export declare const ASSET_TYPES: readonly ["SAVINGS", "CASH", "STOCK", "BONDS", "CRYPTO", "ETF_FUND", "OTHER"];
export type AssetType = (typeof ASSET_TYPES)[number];
export declare const TRANSACTION_TYPES: readonly ["BUY", "SELL", "DIVIDEND", "DEPOSIT", "WITHDRAWAL", "CASH_GAIN", "CASH_EXPENSE"];
export type TransactionType = (typeof TRANSACTION_TYPES)[number];
/** How an asset's "current value" is derived. */
export type ValueMode = "market-price" | "running-balance";
export interface AssetTypeRule {
    /** Human-readable label for selectors. */
    label: string;
    /** Transaction types the user may record against this asset type. */
    allowedTransactions: TransactionType[];
    /** Asset has a share/unit quantity (BUY/SELL track quantity). */
    hasQuantity: boolean;
    /** Asset has a per-unit market price. */
    hasUnitPrice: boolean;
    /** Asset tracks FIFO cost basis. */
    hasCostBasis: boolean;
    /** Asset can accrue unrealised capital gain. */
    hasCapitalGain: boolean;
    /** Asset can realise gains on sale. */
    hasRealizedGain: boolean;
    /** Asset can receive dividend / interest income. */
    hasDividendIncome: boolean;
    /** market-price: price × shares. running-balance: deposits − withdrawals + income. */
    valueMode: ValueMode;
    /** True for assets bought/sold on a market (drives idle-cash spending). */
    isTradable: boolean;
}
export declare const assetTypeTransactionRules: Record<AssetType, AssetTypeRule>;
export declare const TRANSACTION_TYPE_LABELS: Record<TransactionType, string>;
/** Map legacy / free-form asset-type strings onto the canonical enum. */
export declare function normalizeAssetType(raw: string | null | undefined): AssetType;
export declare function getAssetTypeRule(type: string | null | undefined): AssetTypeRule;
export declare function isTradingAsset(type: string | null | undefined): boolean;
export declare function allowedTransactionTypes(type: string | null | undefined): TransactionType[];
export declare function isTransactionAllowed(type: string | null | undefined, txType: string): boolean;
//# sourceMappingURL=assetTypes.d.ts.map