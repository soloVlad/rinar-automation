import { QueryClientProvider } from "@tanstack/react-query";
import { Button } from "antd";

import queryClient from "@/query-client";

import { BeerTable } from "@/components";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BeerTable />
      <Button type="primary">Press me</Button>
    </QueryClientProvider>
  );
}

export default App;
