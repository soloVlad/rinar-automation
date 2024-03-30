import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/query-client";

import { BeerFiltersProvider } from "@/contexts";
import { BeerTable } from "@/components";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BeerFiltersProvider>
        <BeerTable />
      </BeerFiltersProvider>
    </QueryClientProvider>
  );
}

export default App;
