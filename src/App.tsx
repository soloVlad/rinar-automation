import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/query-client";

import { BeerTable } from "@/components";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BeerTable />
    </QueryClientProvider>
  );
}

export default App;
