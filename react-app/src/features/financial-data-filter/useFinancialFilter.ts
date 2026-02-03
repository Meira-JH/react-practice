import { useState, useMemo, useCallback } from 'react';
import { MOCK_ASSETS } from '../../data/mock-assets';
import type { FinancialAsset } from '../../types/financialAsset.types';

const filterData = (data: FinancialAsset[], query: string) => {
  console.log("🔥 Heavy filtering running...");

  // Simulate CPU load
  const start = performance.now();
  while (performance.now() - start < 50) {console.log('Loading...')} // 500ms artificial delay

  return data.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.symbol.toLowerCase().includes(query.toLowerCase())
  );
};

export const useFinancialFilter = () => {
  const [query, setQuery] = useState("");
  const [assets] = useState<FinancialAsset[]>(MOCK_ASSETS);
  const [renderCount, setRenderCount] = useState(0);

  // Requirement 1: Memoize
  const filteredAssets = useMemo(() => {
    return filterData(assets, query);
  }, [assets, query]);

  // Requirement 2: Stable callback for children
  const handleForceUpdate = useCallback(() => {
    setRenderCount(prev => prev + 1);
  }, []);

  return {
    query,
    setQuery,
    filteredAssets,
    handleForceUpdate,
    renderCount
  };
};