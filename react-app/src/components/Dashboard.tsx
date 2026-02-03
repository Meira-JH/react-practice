import { useFinancialFilter } from "../features/financial-data-filter/useFinancialFilter";

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

const List = ({ items }: any) => {
  console.log("❄️ List rendering...");
  return (
    <ul>
      {items.map((item: any) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
};