import { useState } from "react";
import { filterData } from "../features/filterData";
import type { FinancialAsset } from "../types/financialAsset.types";
import { MOCK_ASSETS } from "../data/mock-assets";

export const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<FinancialAsset[]>(MOCK_ASSETS);
  const [count, setCount] = useState(0); // Forcing re-renders

  const filteredItems = filterData(items, query);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Force Re-render ({count})</button>
      <List items={filteredItems} />
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