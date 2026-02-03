export interface FinancialAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  metadata: {
    marketCap: number;
    volume24h: number;
    lastUpdated: string;
  };
}