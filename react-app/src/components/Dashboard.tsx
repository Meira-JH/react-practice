import { memo } from "react";
import { useFinancialFilter } from "../features/financial-data-filter/useFinancialFilter";
import type { FinancialAsset } from "../types/financialAsset.types";

export const Dashboard = () => {
const { query, setQuery, filteredAssets, handleForceUpdate, renderCount } = useFinancialFilter();
  

return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleForceUpdate}>Action ({renderCount})</button>
      <List items={filteredAssets} />
    </div>
  );
};

const List = memo(({ items }:{items: FinancialAsset[]}) => {
  console.log("❄️ List rendering...");
  return (
    <ul>
      {items.map((item: FinancialAsset) => <AssetItem key={item.name} item={item} /> )}
    </ul>
  );
});

const AssetItem = memo(({item}: {item: FinancialAsset}) => { 
    console.log('Item rendering')
    return (<li key={item.id}>{item.name}</li>)})