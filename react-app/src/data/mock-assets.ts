import type { FinancialAsset } from "../types/financialAsset.types";


export const generateMockAssets = (count: number = 5000): FinancialAsset[] => {
  const assets = ['Bitcoin', 'Ethereum', 'Solana', 'Cardano', 'Polkadot', 'Ripple', 'Avalanche', 'Chainlink'];
  const symbols = ['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'XRP', 'AVAX', 'LINK'];

  return Array.from({ length: count }, (_, i) => ({
    id: crypto.randomUUID(),
    name: `${assets[i % assets.length]} ${i}`,
    symbol: symbols[i % symbols.length],
    price: Math.random() * 50000,
    change24h: (Math.random() * 20) - 10,
    metadata: {
      marketCap: Math.random() * 1000000000,
      volume24h: Math.random() * 50000000,
      lastUpdated: new Date().toISOString()
    }
  }));
};

export const MOCK_ASSETS = generateMockAssets();