import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AllocationSlice, BatchDeleteInput, BatchDeleteResult, CsvExportResult, CsvImportInput, CsvImportResult, DashboardSummary, DividendEvent, DividendEventInput, DividendEventUpdate, GetDashboardAllocationParams, GetDashboardSummaryParams, GetPortfolioPerformanceParams, GetPricesParams, HealthStatus, Holding, HoldingInput, HoldingUpdate, ListDividendEventsParams, ListNotificationsParams, ListTransactionsParams, Notification, NotificationList, NotificationUpdate, PerformancePoint, Portfolio, PortfolioInput, PortfolioSummary, PortfolioUpdate, PriceAlert, PriceAlertInput, PriceAlertUpdate, PriceQuote, SearchSymbolsParams, SymbolSearchResult, Transaction, TransactionInput, TransactionList, TransactionUpdate, Watchlist, WatchlistInput, WatchlistItem, WatchlistItemInput, WatchlistUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListPortfoliosUrl: () => string;
/**
 * @summary List all portfolios for the current user
 */
export declare const listPortfolios: (options?: RequestInit) => Promise<Portfolio[]>;
export declare const getListPortfoliosQueryKey: () => readonly ["/api/portfolios"];
export declare const getListPortfoliosQueryOptions: <TData = Awaited<ReturnType<typeof listPortfolios>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPortfolios>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listPortfolios>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListPortfoliosQueryResult = NonNullable<Awaited<ReturnType<typeof listPortfolios>>>;
export type ListPortfoliosQueryError = ErrorType<unknown>;
/**
 * @summary List all portfolios for the current user
 */
export declare function useListPortfolios<TData = Awaited<ReturnType<typeof listPortfolios>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listPortfolios>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreatePortfolioUrl: () => string;
/**
 * @summary Create a new portfolio
 */
export declare const createPortfolio: (portfolioInput: PortfolioInput, options?: RequestInit) => Promise<Portfolio>;
export declare const getCreatePortfolioMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPortfolio>>, TError, {
        data: BodyType<PortfolioInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createPortfolio>>, TError, {
    data: BodyType<PortfolioInput>;
}, TContext>;
export type CreatePortfolioMutationResult = NonNullable<Awaited<ReturnType<typeof createPortfolio>>>;
export type CreatePortfolioMutationBody = BodyType<PortfolioInput>;
export type CreatePortfolioMutationError = ErrorType<unknown>;
/**
* @summary Create a new portfolio
*/
export declare const useCreatePortfolio: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createPortfolio>>, TError, {
        data: BodyType<PortfolioInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createPortfolio>>, TError, {
    data: BodyType<PortfolioInput>;
}, TContext>;
export declare const getGetPortfolioUrl: (portfolioId: number) => string;
/**
 * @summary Get a single portfolio
 */
export declare const getPortfolio: (portfolioId: number, options?: RequestInit) => Promise<Portfolio>;
export declare const getGetPortfolioQueryKey: (portfolioId: number) => readonly [`/api/portfolios/${number}`];
export declare const getGetPortfolioQueryOptions: <TData = Awaited<ReturnType<typeof getPortfolio>>, TError = ErrorType<void>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPortfolio>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPortfolio>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPortfolioQueryResult = NonNullable<Awaited<ReturnType<typeof getPortfolio>>>;
export type GetPortfolioQueryError = ErrorType<void>;
/**
 * @summary Get a single portfolio
 */
export declare function useGetPortfolio<TData = Awaited<ReturnType<typeof getPortfolio>>, TError = ErrorType<void>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPortfolio>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdatePortfolioUrl: (portfolioId: number) => string;
/**
 * @summary Update a portfolio
 */
export declare const updatePortfolio: (portfolioId: number, portfolioUpdate: PortfolioUpdate, options?: RequestInit) => Promise<Portfolio>;
export declare const getUpdatePortfolioMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePortfolio>>, TError, {
        portfolioId: number;
        data: BodyType<PortfolioUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updatePortfolio>>, TError, {
    portfolioId: number;
    data: BodyType<PortfolioUpdate>;
}, TContext>;
export type UpdatePortfolioMutationResult = NonNullable<Awaited<ReturnType<typeof updatePortfolio>>>;
export type UpdatePortfolioMutationBody = BodyType<PortfolioUpdate>;
export type UpdatePortfolioMutationError = ErrorType<unknown>;
/**
* @summary Update a portfolio
*/
export declare const useUpdatePortfolio: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updatePortfolio>>, TError, {
        portfolioId: number;
        data: BodyType<PortfolioUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updatePortfolio>>, TError, {
    portfolioId: number;
    data: BodyType<PortfolioUpdate>;
}, TContext>;
export declare const getDeletePortfolioUrl: (portfolioId: number) => string;
/**
 * @summary Delete a portfolio
 */
export declare const deletePortfolio: (portfolioId: number, options?: RequestInit) => Promise<void>;
export declare const getDeletePortfolioMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePortfolio>>, TError, {
        portfolioId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deletePortfolio>>, TError, {
    portfolioId: number;
}, TContext>;
export type DeletePortfolioMutationResult = NonNullable<Awaited<ReturnType<typeof deletePortfolio>>>;
export type DeletePortfolioMutationError = ErrorType<unknown>;
/**
* @summary Delete a portfolio
*/
export declare const useDeletePortfolio: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deletePortfolio>>, TError, {
        portfolioId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deletePortfolio>>, TError, {
    portfolioId: number;
}, TContext>;
export declare const getGetPortfolioSummaryUrl: (portfolioId: number) => string;
/**
 * @summary Get portfolio summary (current value, gain/loss, cash, dividends)
 */
export declare const getPortfolioSummary: (portfolioId: number, options?: RequestInit) => Promise<PortfolioSummary>;
export declare const getGetPortfolioSummaryQueryKey: (portfolioId: number) => readonly [`/api/portfolios/${number}/summary`];
export declare const getGetPortfolioSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getPortfolioSummary>>, TError = ErrorType<unknown>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPortfolioSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPortfolioSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPortfolioSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getPortfolioSummary>>>;
export type GetPortfolioSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get portfolio summary (current value, gain/loss, cash, dividends)
 */
export declare function useGetPortfolioSummary<TData = Awaited<ReturnType<typeof getPortfolioSummary>>, TError = ErrorType<unknown>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPortfolioSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetPortfolioPerformanceUrl: (portfolioId: number, params?: GetPortfolioPerformanceParams) => string;
/**
 * @summary Get historical performance data points for charting
 */
export declare const getPortfolioPerformance: (portfolioId: number, params?: GetPortfolioPerformanceParams, options?: RequestInit) => Promise<PerformancePoint[]>;
export declare const getGetPortfolioPerformanceQueryKey: (portfolioId: number, params?: GetPortfolioPerformanceParams) => readonly [`/api/portfolios/${number}/performance`, ...GetPortfolioPerformanceParams[]];
export declare const getGetPortfolioPerformanceQueryOptions: <TData = Awaited<ReturnType<typeof getPortfolioPerformance>>, TError = ErrorType<unknown>>(portfolioId: number, params?: GetPortfolioPerformanceParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPortfolioPerformance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPortfolioPerformance>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPortfolioPerformanceQueryResult = NonNullable<Awaited<ReturnType<typeof getPortfolioPerformance>>>;
export type GetPortfolioPerformanceQueryError = ErrorType<unknown>;
/**
 * @summary Get historical performance data points for charting
 */
export declare function useGetPortfolioPerformance<TData = Awaited<ReturnType<typeof getPortfolioPerformance>>, TError = ErrorType<unknown>>(portfolioId: number, params?: GetPortfolioPerformanceParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPortfolioPerformance>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListHoldingsUrl: (portfolioId: number) => string;
/**
 * @summary List holdings in a portfolio
 */
export declare const listHoldings: (portfolioId: number, options?: RequestInit) => Promise<Holding[]>;
export declare const getListHoldingsQueryKey: (portfolioId: number) => readonly [`/api/portfolios/${number}/holdings`];
export declare const getListHoldingsQueryOptions: <TData = Awaited<ReturnType<typeof listHoldings>>, TError = ErrorType<unknown>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listHoldings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listHoldings>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListHoldingsQueryResult = NonNullable<Awaited<ReturnType<typeof listHoldings>>>;
export type ListHoldingsQueryError = ErrorType<unknown>;
/**
 * @summary List holdings in a portfolio
 */
export declare function useListHoldings<TData = Awaited<ReturnType<typeof listHoldings>>, TError = ErrorType<unknown>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listHoldings>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateHoldingUrl: (portfolioId: number) => string;
/**
 * @summary Create a holding (typically auto-created via transactions)
 */
export declare const createHolding: (portfolioId: number, holdingInput: HoldingInput, options?: RequestInit) => Promise<Holding>;
export declare const getCreateHoldingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createHolding>>, TError, {
        portfolioId: number;
        data: BodyType<HoldingInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createHolding>>, TError, {
    portfolioId: number;
    data: BodyType<HoldingInput>;
}, TContext>;
export type CreateHoldingMutationResult = NonNullable<Awaited<ReturnType<typeof createHolding>>>;
export type CreateHoldingMutationBody = BodyType<HoldingInput>;
export type CreateHoldingMutationError = ErrorType<unknown>;
/**
* @summary Create a holding (typically auto-created via transactions)
*/
export declare const useCreateHolding: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createHolding>>, TError, {
        portfolioId: number;
        data: BodyType<HoldingInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createHolding>>, TError, {
    portfolioId: number;
    data: BodyType<HoldingInput>;
}, TContext>;
export declare const getGetHoldingUrl: (portfolioId: number, holdingId: number) => string;
/**
 * @summary Get a holding with performance details
 */
export declare const getHolding: (portfolioId: number, holdingId: number, options?: RequestInit) => Promise<Holding>;
export declare const getGetHoldingQueryKey: (portfolioId: number, holdingId: number) => readonly [`/api/portfolios/${number}/holdings/${number}`];
export declare const getGetHoldingQueryOptions: <TData = Awaited<ReturnType<typeof getHolding>>, TError = ErrorType<unknown>>(portfolioId: number, holdingId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHolding>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getHolding>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetHoldingQueryResult = NonNullable<Awaited<ReturnType<typeof getHolding>>>;
export type GetHoldingQueryError = ErrorType<unknown>;
/**
 * @summary Get a holding with performance details
 */
export declare function useGetHolding<TData = Awaited<ReturnType<typeof getHolding>>, TError = ErrorType<unknown>>(portfolioId: number, holdingId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHolding>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateHoldingUrl: (portfolioId: number, holdingId: number) => string;
/**
 * @summary Update a holding (e.g. custom name, target weight)
 */
export declare const updateHolding: (portfolioId: number, holdingId: number, holdingUpdate: HoldingUpdate, options?: RequestInit) => Promise<Holding>;
export declare const getUpdateHoldingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateHolding>>, TError, {
        portfolioId: number;
        holdingId: number;
        data: BodyType<HoldingUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateHolding>>, TError, {
    portfolioId: number;
    holdingId: number;
    data: BodyType<HoldingUpdate>;
}, TContext>;
export type UpdateHoldingMutationResult = NonNullable<Awaited<ReturnType<typeof updateHolding>>>;
export type UpdateHoldingMutationBody = BodyType<HoldingUpdate>;
export type UpdateHoldingMutationError = ErrorType<unknown>;
/**
* @summary Update a holding (e.g. custom name, target weight)
*/
export declare const useUpdateHolding: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateHolding>>, TError, {
        portfolioId: number;
        holdingId: number;
        data: BodyType<HoldingUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateHolding>>, TError, {
    portfolioId: number;
    holdingId: number;
    data: BodyType<HoldingUpdate>;
}, TContext>;
export declare const getDeleteHoldingUrl: (portfolioId: number, holdingId: number) => string;
/**
 * @summary Delete a holding
 */
export declare const deleteHolding: (portfolioId: number, holdingId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteHoldingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHolding>>, TError, {
        portfolioId: number;
        holdingId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteHolding>>, TError, {
    portfolioId: number;
    holdingId: number;
}, TContext>;
export type DeleteHoldingMutationResult = NonNullable<Awaited<ReturnType<typeof deleteHolding>>>;
export type DeleteHoldingMutationError = ErrorType<unknown>;
/**
* @summary Delete a holding
*/
export declare const useDeleteHolding: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHolding>>, TError, {
        portfolioId: number;
        holdingId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteHolding>>, TError, {
    portfolioId: number;
    holdingId: number;
}, TContext>;
export declare const getListTransactionsUrl: (portfolioId: number, params?: ListTransactionsParams) => string;
/**
 * @summary List transactions in a portfolio
 */
export declare const listTransactions: (portfolioId: number, params?: ListTransactionsParams, options?: RequestInit) => Promise<TransactionList>;
export declare const getListTransactionsQueryKey: (portfolioId: number, params?: ListTransactionsParams) => readonly [`/api/portfolios/${number}/transactions`, ...ListTransactionsParams[]];
export declare const getListTransactionsQueryOptions: <TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<unknown>>(portfolioId: number, params?: ListTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTransactionsQueryResult = NonNullable<Awaited<ReturnType<typeof listTransactions>>>;
export type ListTransactionsQueryError = ErrorType<unknown>;
/**
 * @summary List transactions in a portfolio
 */
export declare function useListTransactions<TData = Awaited<ReturnType<typeof listTransactions>>, TError = ErrorType<unknown>>(portfolioId: number, params?: ListTransactionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTransactions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateTransactionUrl: (portfolioId: number) => string;
/**
 * @summary Create a transaction
 */
export declare const createTransaction: (portfolioId: number, transactionInput: TransactionInput, options?: RequestInit) => Promise<Transaction>;
export declare const getCreateTransactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, {
        portfolioId: number;
        data: BodyType<TransactionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, {
    portfolioId: number;
    data: BodyType<TransactionInput>;
}, TContext>;
export type CreateTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof createTransaction>>>;
export type CreateTransactionMutationBody = BodyType<TransactionInput>;
export type CreateTransactionMutationError = ErrorType<unknown>;
/**
* @summary Create a transaction
*/
export declare const useCreateTransaction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTransaction>>, TError, {
        portfolioId: number;
        data: BodyType<TransactionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTransaction>>, TError, {
    portfolioId: number;
    data: BodyType<TransactionInput>;
}, TContext>;
export declare const getGetTransactionUrl: (portfolioId: number, transactionId: number) => string;
/**
 * @summary Get a single transaction
 */
export declare const getTransaction: (portfolioId: number, transactionId: number, options?: RequestInit) => Promise<Transaction>;
export declare const getGetTransactionQueryKey: (portfolioId: number, transactionId: number) => readonly [`/api/portfolios/${number}/transactions/${number}`];
export declare const getGetTransactionQueryOptions: <TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<unknown>>(portfolioId: number, transactionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTransactionQueryResult = NonNullable<Awaited<ReturnType<typeof getTransaction>>>;
export type GetTransactionQueryError = ErrorType<unknown>;
/**
 * @summary Get a single transaction
 */
export declare function useGetTransaction<TData = Awaited<ReturnType<typeof getTransaction>>, TError = ErrorType<unknown>>(portfolioId: number, transactionId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTransaction>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateTransactionUrl: (portfolioId: number, transactionId: number) => string;
/**
 * @summary Update a transaction
 */
export declare const updateTransaction: (portfolioId: number, transactionId: number, transactionUpdate: TransactionUpdate, options?: RequestInit) => Promise<Transaction>;
export declare const getUpdateTransactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTransaction>>, TError, {
        portfolioId: number;
        transactionId: number;
        data: BodyType<TransactionUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateTransaction>>, TError, {
    portfolioId: number;
    transactionId: number;
    data: BodyType<TransactionUpdate>;
}, TContext>;
export type UpdateTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof updateTransaction>>>;
export type UpdateTransactionMutationBody = BodyType<TransactionUpdate>;
export type UpdateTransactionMutationError = ErrorType<unknown>;
/**
* @summary Update a transaction
*/
export declare const useUpdateTransaction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateTransaction>>, TError, {
        portfolioId: number;
        transactionId: number;
        data: BodyType<TransactionUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateTransaction>>, TError, {
    portfolioId: number;
    transactionId: number;
    data: BodyType<TransactionUpdate>;
}, TContext>;
export declare const getDeleteTransactionUrl: (portfolioId: number, transactionId: number) => string;
/**
 * @summary Delete a transaction
 */
export declare const deleteTransaction: (portfolioId: number, transactionId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteTransactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTransaction>>, TError, {
        portfolioId: number;
        transactionId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTransaction>>, TError, {
    portfolioId: number;
    transactionId: number;
}, TContext>;
export type DeleteTransactionMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTransaction>>>;
export type DeleteTransactionMutationError = ErrorType<unknown>;
/**
* @summary Delete a transaction
*/
export declare const useDeleteTransaction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTransaction>>, TError, {
        portfolioId: number;
        transactionId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTransaction>>, TError, {
    portfolioId: number;
    transactionId: number;
}, TContext>;
export declare const getBatchDeleteTransactionsUrl: (portfolioId: number) => string;
/**
 * @summary Delete multiple transactions at once
 */
export declare const batchDeleteTransactions: (portfolioId: number, batchDeleteInput: BatchDeleteInput, options?: RequestInit) => Promise<BatchDeleteResult>;
export declare const getBatchDeleteTransactionsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof batchDeleteTransactions>>, TError, {
        portfolioId: number;
        data: BodyType<BatchDeleteInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof batchDeleteTransactions>>, TError, {
    portfolioId: number;
    data: BodyType<BatchDeleteInput>;
}, TContext>;
export type BatchDeleteTransactionsMutationResult = NonNullable<Awaited<ReturnType<typeof batchDeleteTransactions>>>;
export type BatchDeleteTransactionsMutationBody = BodyType<BatchDeleteInput>;
export type BatchDeleteTransactionsMutationError = ErrorType<unknown>;
/**
* @summary Delete multiple transactions at once
*/
export declare const useBatchDeleteTransactions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof batchDeleteTransactions>>, TError, {
        portfolioId: number;
        data: BodyType<BatchDeleteInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof batchDeleteTransactions>>, TError, {
    portfolioId: number;
    data: BodyType<BatchDeleteInput>;
}, TContext>;
export declare const getImportCsvUrl: (portfolioId: number) => string;
/**
 * @summary Import transactions from CSV text
 */
export declare const importCsv: (portfolioId: number, csvImportInput: CsvImportInput, options?: RequestInit) => Promise<CsvImportResult>;
export declare const getImportCsvMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof importCsv>>, TError, {
        portfolioId: number;
        data: BodyType<CsvImportInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof importCsv>>, TError, {
    portfolioId: number;
    data: BodyType<CsvImportInput>;
}, TContext>;
export type ImportCsvMutationResult = NonNullable<Awaited<ReturnType<typeof importCsv>>>;
export type ImportCsvMutationBody = BodyType<CsvImportInput>;
export type ImportCsvMutationError = ErrorType<unknown>;
/**
* @summary Import transactions from CSV text
*/
export declare const useImportCsv: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof importCsv>>, TError, {
        portfolioId: number;
        data: BodyType<CsvImportInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof importCsv>>, TError, {
    portfolioId: number;
    data: BodyType<CsvImportInput>;
}, TContext>;
export declare const getExportCsvUrl: (portfolioId: number) => string;
/**
 * @summary Export transactions as CSV text
 */
export declare const exportCsv: (portfolioId: number, options?: RequestInit) => Promise<CsvExportResult>;
export declare const getExportCsvQueryKey: (portfolioId: number) => readonly [`/api/portfolios/${number}/csv/export`];
export declare const getExportCsvQueryOptions: <TData = Awaited<ReturnType<typeof exportCsv>>, TError = ErrorType<unknown>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof exportCsv>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof exportCsv>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ExportCsvQueryResult = NonNullable<Awaited<ReturnType<typeof exportCsv>>>;
export type ExportCsvQueryError = ErrorType<unknown>;
/**
 * @summary Export transactions as CSV text
 */
export declare function useExportCsv<TData = Awaited<ReturnType<typeof exportCsv>>, TError = ErrorType<unknown>>(portfolioId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof exportCsv>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListWatchlistsUrl: () => string;
/**
 * @summary List all watchlists
 */
export declare const listWatchlists: (options?: RequestInit) => Promise<Watchlist[]>;
export declare const getListWatchlistsQueryKey: () => readonly ["/api/watchlists"];
export declare const getListWatchlistsQueryOptions: <TData = Awaited<ReturnType<typeof listWatchlists>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listWatchlists>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listWatchlists>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListWatchlistsQueryResult = NonNullable<Awaited<ReturnType<typeof listWatchlists>>>;
export type ListWatchlistsQueryError = ErrorType<unknown>;
/**
 * @summary List all watchlists
 */
export declare function useListWatchlists<TData = Awaited<ReturnType<typeof listWatchlists>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listWatchlists>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateWatchlistUrl: () => string;
/**
 * @summary Create a watchlist
 */
export declare const createWatchlist: (watchlistInput: WatchlistInput, options?: RequestInit) => Promise<Watchlist>;
export declare const getCreateWatchlistMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createWatchlist>>, TError, {
        data: BodyType<WatchlistInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createWatchlist>>, TError, {
    data: BodyType<WatchlistInput>;
}, TContext>;
export type CreateWatchlistMutationResult = NonNullable<Awaited<ReturnType<typeof createWatchlist>>>;
export type CreateWatchlistMutationBody = BodyType<WatchlistInput>;
export type CreateWatchlistMutationError = ErrorType<unknown>;
/**
* @summary Create a watchlist
*/
export declare const useCreateWatchlist: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createWatchlist>>, TError, {
        data: BodyType<WatchlistInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createWatchlist>>, TError, {
    data: BodyType<WatchlistInput>;
}, TContext>;
export declare const getUpdateWatchlistUrl: (watchlistId: number) => string;
/**
 * @summary Rename a watchlist
 */
export declare const updateWatchlist: (watchlistId: number, watchlistUpdate: WatchlistUpdate, options?: RequestInit) => Promise<Watchlist>;
export declare const getUpdateWatchlistMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateWatchlist>>, TError, {
        watchlistId: number;
        data: BodyType<WatchlistUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateWatchlist>>, TError, {
    watchlistId: number;
    data: BodyType<WatchlistUpdate>;
}, TContext>;
export type UpdateWatchlistMutationResult = NonNullable<Awaited<ReturnType<typeof updateWatchlist>>>;
export type UpdateWatchlistMutationBody = BodyType<WatchlistUpdate>;
export type UpdateWatchlistMutationError = ErrorType<unknown>;
/**
* @summary Rename a watchlist
*/
export declare const useUpdateWatchlist: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateWatchlist>>, TError, {
        watchlistId: number;
        data: BodyType<WatchlistUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateWatchlist>>, TError, {
    watchlistId: number;
    data: BodyType<WatchlistUpdate>;
}, TContext>;
export declare const getDeleteWatchlistUrl: (watchlistId: number) => string;
/**
 * @summary Delete a watchlist
 */
export declare const deleteWatchlist: (watchlistId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteWatchlistMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteWatchlist>>, TError, {
        watchlistId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteWatchlist>>, TError, {
    watchlistId: number;
}, TContext>;
export type DeleteWatchlistMutationResult = NonNullable<Awaited<ReturnType<typeof deleteWatchlist>>>;
export type DeleteWatchlistMutationError = ErrorType<unknown>;
/**
* @summary Delete a watchlist
*/
export declare const useDeleteWatchlist: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteWatchlist>>, TError, {
        watchlistId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteWatchlist>>, TError, {
    watchlistId: number;
}, TContext>;
export declare const getListWatchlistItemsUrl: (watchlistId: number) => string;
/**
 * @summary List items in a watchlist
 */
export declare const listWatchlistItems: (watchlistId: number, options?: RequestInit) => Promise<WatchlistItem[]>;
export declare const getListWatchlistItemsQueryKey: (watchlistId: number) => readonly [`/api/watchlists/${number}/items`];
export declare const getListWatchlistItemsQueryOptions: <TData = Awaited<ReturnType<typeof listWatchlistItems>>, TError = ErrorType<unknown>>(watchlistId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listWatchlistItems>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listWatchlistItems>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListWatchlistItemsQueryResult = NonNullable<Awaited<ReturnType<typeof listWatchlistItems>>>;
export type ListWatchlistItemsQueryError = ErrorType<unknown>;
/**
 * @summary List items in a watchlist
 */
export declare function useListWatchlistItems<TData = Awaited<ReturnType<typeof listWatchlistItems>>, TError = ErrorType<unknown>>(watchlistId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listWatchlistItems>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getAddWatchlistItemUrl: (watchlistId: number) => string;
/**
 * @summary Add a symbol to a watchlist
 */
export declare const addWatchlistItem: (watchlistId: number, watchlistItemInput: WatchlistItemInput, options?: RequestInit) => Promise<WatchlistItem>;
export declare const getAddWatchlistItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addWatchlistItem>>, TError, {
        watchlistId: number;
        data: BodyType<WatchlistItemInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof addWatchlistItem>>, TError, {
    watchlistId: number;
    data: BodyType<WatchlistItemInput>;
}, TContext>;
export type AddWatchlistItemMutationResult = NonNullable<Awaited<ReturnType<typeof addWatchlistItem>>>;
export type AddWatchlistItemMutationBody = BodyType<WatchlistItemInput>;
export type AddWatchlistItemMutationError = ErrorType<unknown>;
/**
* @summary Add a symbol to a watchlist
*/
export declare const useAddWatchlistItem: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addWatchlistItem>>, TError, {
        watchlistId: number;
        data: BodyType<WatchlistItemInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof addWatchlistItem>>, TError, {
    watchlistId: number;
    data: BodyType<WatchlistItemInput>;
}, TContext>;
export declare const getRemoveWatchlistItemUrl: (watchlistId: number, itemId: number) => string;
/**
 * @summary Remove an item from a watchlist
 */
export declare const removeWatchlistItem: (watchlistId: number, itemId: number, options?: RequestInit) => Promise<void>;
export declare const getRemoveWatchlistItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeWatchlistItem>>, TError, {
        watchlistId: number;
        itemId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof removeWatchlistItem>>, TError, {
    watchlistId: number;
    itemId: number;
}, TContext>;
export type RemoveWatchlistItemMutationResult = NonNullable<Awaited<ReturnType<typeof removeWatchlistItem>>>;
export type RemoveWatchlistItemMutationError = ErrorType<unknown>;
/**
* @summary Remove an item from a watchlist
*/
export declare const useRemoveWatchlistItem: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeWatchlistItem>>, TError, {
        watchlistId: number;
        itemId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof removeWatchlistItem>>, TError, {
    watchlistId: number;
    itemId: number;
}, TContext>;
export declare const getListAlertsUrl: () => string;
/**
 * @summary List all price alerts
 */
export declare const listAlerts: (options?: RequestInit) => Promise<PriceAlert[]>;
export declare const getListAlertsQueryKey: () => readonly ["/api/alerts"];
export declare const getListAlertsQueryOptions: <TData = Awaited<ReturnType<typeof listAlerts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listAlerts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListAlertsQueryResult = NonNullable<Awaited<ReturnType<typeof listAlerts>>>;
export type ListAlertsQueryError = ErrorType<unknown>;
/**
 * @summary List all price alerts
 */
export declare function useListAlerts<TData = Awaited<ReturnType<typeof listAlerts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listAlerts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateAlertUrl: () => string;
/**
 * @summary Create a price alert
 */
export declare const createAlert: (priceAlertInput: PriceAlertInput, options?: RequestInit) => Promise<PriceAlert>;
export declare const getCreateAlertMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAlert>>, TError, {
        data: BodyType<PriceAlertInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createAlert>>, TError, {
    data: BodyType<PriceAlertInput>;
}, TContext>;
export type CreateAlertMutationResult = NonNullable<Awaited<ReturnType<typeof createAlert>>>;
export type CreateAlertMutationBody = BodyType<PriceAlertInput>;
export type CreateAlertMutationError = ErrorType<unknown>;
/**
* @summary Create a price alert
*/
export declare const useCreateAlert: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createAlert>>, TError, {
        data: BodyType<PriceAlertInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createAlert>>, TError, {
    data: BodyType<PriceAlertInput>;
}, TContext>;
export declare const getUpdateAlertUrl: (alertId: number) => string;
/**
 * @summary Update or dismiss an alert
 */
export declare const updateAlert: (alertId: number, priceAlertUpdate: PriceAlertUpdate, options?: RequestInit) => Promise<PriceAlert>;
export declare const getUpdateAlertMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAlert>>, TError, {
        alertId: number;
        data: BodyType<PriceAlertUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAlert>>, TError, {
    alertId: number;
    data: BodyType<PriceAlertUpdate>;
}, TContext>;
export type UpdateAlertMutationResult = NonNullable<Awaited<ReturnType<typeof updateAlert>>>;
export type UpdateAlertMutationBody = BodyType<PriceAlertUpdate>;
export type UpdateAlertMutationError = ErrorType<unknown>;
/**
* @summary Update or dismiss an alert
*/
export declare const useUpdateAlert: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAlert>>, TError, {
        alertId: number;
        data: BodyType<PriceAlertUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAlert>>, TError, {
    alertId: number;
    data: BodyType<PriceAlertUpdate>;
}, TContext>;
export declare const getDeleteAlertUrl: (alertId: number) => string;
/**
 * @summary Delete a price alert
 */
export declare const deleteAlert: (alertId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteAlertMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAlert>>, TError, {
        alertId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteAlert>>, TError, {
    alertId: number;
}, TContext>;
export type DeleteAlertMutationResult = NonNullable<Awaited<ReturnType<typeof deleteAlert>>>;
export type DeleteAlertMutationError = ErrorType<unknown>;
/**
* @summary Delete a price alert
*/
export declare const useDeleteAlert: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteAlert>>, TError, {
        alertId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteAlert>>, TError, {
    alertId: number;
}, TContext>;
export declare const getListNotificationsUrl: (params?: ListNotificationsParams) => string;
/**
 * @summary List notifications (newest first)
 */
export declare const listNotifications: (params?: ListNotificationsParams, options?: RequestInit) => Promise<NotificationList>;
export declare const getListNotificationsQueryKey: (params?: ListNotificationsParams) => readonly ["/api/notifications", ...ListNotificationsParams[]];
export declare const getListNotificationsQueryOptions: <TData = Awaited<ReturnType<typeof listNotifications>>, TError = ErrorType<unknown>>(params?: ListNotificationsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listNotifications>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListNotificationsQueryResult = NonNullable<Awaited<ReturnType<typeof listNotifications>>>;
export type ListNotificationsQueryError = ErrorType<unknown>;
/**
 * @summary List notifications (newest first)
 */
export declare function useListNotifications<TData = Awaited<ReturnType<typeof listNotifications>>, TError = ErrorType<unknown>>(params?: ListNotificationsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listNotifications>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getClearAllNotificationsUrl: () => string;
/**
 * @summary Clear all notifications
 */
export declare const clearAllNotifications: (options?: RequestInit) => Promise<void>;
export declare const getClearAllNotificationsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof clearAllNotifications>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof clearAllNotifications>>, TError, void, TContext>;
export type ClearAllNotificationsMutationResult = NonNullable<Awaited<ReturnType<typeof clearAllNotifications>>>;
export type ClearAllNotificationsMutationError = ErrorType<unknown>;
/**
* @summary Clear all notifications
*/
export declare const useClearAllNotifications: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof clearAllNotifications>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof clearAllNotifications>>, TError, void, TContext>;
export declare const getUpdateNotificationUrl: (notificationId: number) => string;
/**
 * @summary Mark notification read/unread or archive it
 */
export declare const updateNotification: (notificationId: number, notificationUpdate: NotificationUpdate, options?: RequestInit) => Promise<Notification>;
export declare const getUpdateNotificationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateNotification>>, TError, {
        notificationId: number;
        data: BodyType<NotificationUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateNotification>>, TError, {
    notificationId: number;
    data: BodyType<NotificationUpdate>;
}, TContext>;
export type UpdateNotificationMutationResult = NonNullable<Awaited<ReturnType<typeof updateNotification>>>;
export type UpdateNotificationMutationBody = BodyType<NotificationUpdate>;
export type UpdateNotificationMutationError = ErrorType<unknown>;
/**
* @summary Mark notification read/unread or archive it
*/
export declare const useUpdateNotification: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateNotification>>, TError, {
        notificationId: number;
        data: BodyType<NotificationUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateNotification>>, TError, {
    notificationId: number;
    data: BodyType<NotificationUpdate>;
}, TContext>;
export declare const getDeleteNotificationUrl: (notificationId: number) => string;
/**
 * @summary Delete a single notification
 */
export declare const deleteNotification: (notificationId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteNotificationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteNotification>>, TError, {
        notificationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteNotification>>, TError, {
    notificationId: number;
}, TContext>;
export type DeleteNotificationMutationResult = NonNullable<Awaited<ReturnType<typeof deleteNotification>>>;
export type DeleteNotificationMutationError = ErrorType<unknown>;
/**
* @summary Delete a single notification
*/
export declare const useDeleteNotification: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteNotification>>, TError, {
        notificationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteNotification>>, TError, {
    notificationId: number;
}, TContext>;
export declare const getMarkAllNotificationsReadUrl: () => string;
/**
 * @summary Mark all notifications as read
 */
export declare const markAllNotificationsRead: (options?: RequestInit) => Promise<BatchDeleteResult>;
export declare const getMarkAllNotificationsReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
export type MarkAllNotificationsReadMutationResult = NonNullable<Awaited<ReturnType<typeof markAllNotificationsRead>>>;
export type MarkAllNotificationsReadMutationError = ErrorType<unknown>;
/**
* @summary Mark all notifications as read
*/
export declare const useMarkAllNotificationsRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markAllNotificationsRead>>, TError, void, TContext>;
export declare const getGetPricesUrl: (params: GetPricesParams) => string;
/**
 * @summary Fetch current prices for a list of symbols
 */
export declare const getPrices: (params: GetPricesParams, options?: RequestInit) => Promise<PriceQuote[]>;
export declare const getGetPricesQueryKey: (params?: GetPricesParams) => readonly ["/api/prices", ...GetPricesParams[]];
export declare const getGetPricesQueryOptions: <TData = Awaited<ReturnType<typeof getPrices>>, TError = ErrorType<unknown>>(params: GetPricesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPrices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getPrices>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetPricesQueryResult = NonNullable<Awaited<ReturnType<typeof getPrices>>>;
export type GetPricesQueryError = ErrorType<unknown>;
/**
 * @summary Fetch current prices for a list of symbols
 */
export declare function useGetPrices<TData = Awaited<ReturnType<typeof getPrices>>, TError = ErrorType<unknown>>(params: GetPricesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getPrices>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSearchSymbolsUrl: (params: SearchSymbolsParams) => string;
/**
 * @summary Search for symbols by query string
 */
export declare const searchSymbols: (params: SearchSymbolsParams, options?: RequestInit) => Promise<SymbolSearchResult[]>;
export declare const getSearchSymbolsQueryKey: (params?: SearchSymbolsParams) => readonly ["/api/prices/search", ...SearchSymbolsParams[]];
export declare const getSearchSymbolsQueryOptions: <TData = Awaited<ReturnType<typeof searchSymbols>>, TError = ErrorType<unknown>>(params: SearchSymbolsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchSymbols>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof searchSymbols>>, TError, TData> & {
    queryKey: QueryKey;
};
export type SearchSymbolsQueryResult = NonNullable<Awaited<ReturnType<typeof searchSymbols>>>;
export type SearchSymbolsQueryError = ErrorType<unknown>;
/**
 * @summary Search for symbols by query string
 */
export declare function useSearchSymbols<TData = Awaited<ReturnType<typeof searchSymbols>>, TError = ErrorType<unknown>>(params: SearchSymbolsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchSymbols>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListDividendEventsUrl: (params?: ListDividendEventsParams) => string;
/**
 * @summary List dividend calendar entries
 */
export declare const listDividendEvents: (params?: ListDividendEventsParams, options?: RequestInit) => Promise<DividendEvent[]>;
export declare const getListDividendEventsQueryKey: (params?: ListDividendEventsParams) => readonly ["/api/dividend-calendar", ...ListDividendEventsParams[]];
export declare const getListDividendEventsQueryOptions: <TData = Awaited<ReturnType<typeof listDividendEvents>>, TError = ErrorType<unknown>>(params?: ListDividendEventsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDividendEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listDividendEvents>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListDividendEventsQueryResult = NonNullable<Awaited<ReturnType<typeof listDividendEvents>>>;
export type ListDividendEventsQueryError = ErrorType<unknown>;
/**
 * @summary List dividend calendar entries
 */
export declare function useListDividendEvents<TData = Awaited<ReturnType<typeof listDividendEvents>>, TError = ErrorType<unknown>>(params?: ListDividendEventsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDividendEvents>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateDividendEventUrl: () => string;
/**
 * @summary Create a dividend calendar entry
 */
export declare const createDividendEvent: (dividendEventInput: DividendEventInput, options?: RequestInit) => Promise<DividendEvent>;
export declare const getCreateDividendEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDividendEvent>>, TError, {
        data: BodyType<DividendEventInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createDividendEvent>>, TError, {
    data: BodyType<DividendEventInput>;
}, TContext>;
export type CreateDividendEventMutationResult = NonNullable<Awaited<ReturnType<typeof createDividendEvent>>>;
export type CreateDividendEventMutationBody = BodyType<DividendEventInput>;
export type CreateDividendEventMutationError = ErrorType<unknown>;
/**
* @summary Create a dividend calendar entry
*/
export declare const useCreateDividendEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createDividendEvent>>, TError, {
        data: BodyType<DividendEventInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createDividendEvent>>, TError, {
    data: BodyType<DividendEventInput>;
}, TContext>;
export declare const getUpdateDividendEventUrl: (eventId: number) => string;
/**
 * @summary Update a dividend calendar entry
 */
export declare const updateDividendEvent: (eventId: number, dividendEventUpdate: DividendEventUpdate, options?: RequestInit) => Promise<DividendEvent>;
export declare const getUpdateDividendEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateDividendEvent>>, TError, {
        eventId: number;
        data: BodyType<DividendEventUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateDividendEvent>>, TError, {
    eventId: number;
    data: BodyType<DividendEventUpdate>;
}, TContext>;
export type UpdateDividendEventMutationResult = NonNullable<Awaited<ReturnType<typeof updateDividendEvent>>>;
export type UpdateDividendEventMutationBody = BodyType<DividendEventUpdate>;
export type UpdateDividendEventMutationError = ErrorType<unknown>;
/**
* @summary Update a dividend calendar entry
*/
export declare const useUpdateDividendEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateDividendEvent>>, TError, {
        eventId: number;
        data: BodyType<DividendEventUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateDividendEvent>>, TError, {
    eventId: number;
    data: BodyType<DividendEventUpdate>;
}, TContext>;
export declare const getDeleteDividendEventUrl: (eventId: number) => string;
/**
 * @summary Delete a dividend calendar entry
 */
export declare const deleteDividendEvent: (eventId: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteDividendEventMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteDividendEvent>>, TError, {
        eventId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteDividendEvent>>, TError, {
    eventId: number;
}, TContext>;
export type DeleteDividendEventMutationResult = NonNullable<Awaited<ReturnType<typeof deleteDividendEvent>>>;
export type DeleteDividendEventMutationError = ErrorType<unknown>;
/**
* @summary Delete a dividend calendar entry
*/
export declare const useDeleteDividendEvent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteDividendEvent>>, TError, {
        eventId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteDividendEvent>>, TError, {
    eventId: number;
}, TContext>;
export declare const getGetDashboardSummaryUrl: (params?: GetDashboardSummaryParams) => string;
/**
 * @summary Consolidated summary across all portfolios
 */
export declare const getDashboardSummary: (params?: GetDashboardSummaryParams, options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: (params?: GetDashboardSummaryParams) => readonly ["/api/dashboard/summary", ...GetDashboardSummaryParams[]];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(params?: GetDashboardSummaryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Consolidated summary across all portfolios
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(params?: GetDashboardSummaryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDashboardAllocationUrl: (params?: GetDashboardAllocationParams) => string;
/**
 * @summary Allocation breakdown by portfolio and asset class
 */
export declare const getDashboardAllocation: (params?: GetDashboardAllocationParams, options?: RequestInit) => Promise<AllocationSlice[]>;
export declare const getGetDashboardAllocationQueryKey: (params?: GetDashboardAllocationParams) => readonly ["/api/dashboard/allocation", ...GetDashboardAllocationParams[]];
export declare const getGetDashboardAllocationQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardAllocation>>, TError = ErrorType<unknown>>(params?: GetDashboardAllocationParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAllocation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardAllocation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardAllocationQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardAllocation>>>;
export type GetDashboardAllocationQueryError = ErrorType<unknown>;
/**
 * @summary Allocation breakdown by portfolio and asset class
 */
export declare function useGetDashboardAllocation<TData = Awaited<ReturnType<typeof getDashboardAllocation>>, TError = ErrorType<unknown>>(params?: GetDashboardAllocationParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardAllocation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetUpcomingDividendsUrl: () => string;
/**
 * @summary Upcoming dividends across all portfolios (next 30 days)
 */
export declare const getUpcomingDividends: (options?: RequestInit) => Promise<DividendEvent[]>;
export declare const getGetUpcomingDividendsQueryKey: () => readonly ["/api/dashboard/upcoming-dividends"];
export declare const getGetUpcomingDividendsQueryOptions: <TData = Awaited<ReturnType<typeof getUpcomingDividends>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUpcomingDividends>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUpcomingDividends>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUpcomingDividendsQueryResult = NonNullable<Awaited<ReturnType<typeof getUpcomingDividends>>>;
export type GetUpcomingDividendsQueryError = ErrorType<unknown>;
/**
 * @summary Upcoming dividends across all portfolios (next 30 days)
 */
export declare function useGetUpcomingDividends<TData = Awaited<ReturnType<typeof getUpcomingDividends>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUpcomingDividends>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map