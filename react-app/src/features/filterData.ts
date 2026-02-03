export const filterData = (data: any, query: string) => {
  console.log("🔥 Heavy filtering running...");
  return data.filter((item: any)=> item.name.toLowerCase().includes(query.toLowerCase()));
};