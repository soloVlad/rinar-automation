import { useContext } from "react";

import { BeerFiltersContext } from "./beerFilters.context";

export const useBeerFiltersContext = () => {
  const ctx = useContext(BeerFiltersContext);

  if (ctx === undefined) {
    throw new Error(
      "useBeerFiltersContext should be used inside special Provider"
    );
  }

  return ctx;
};