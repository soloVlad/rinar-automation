import { FC, PropsWithChildren, createContext, useState } from "react";

import { Country } from "@/enums";

import { AlcoholFilter, BeerFiltersCtx } from "./beerFilters.types";
import { InitialBeerFiltersState } from "./beerFilters.constants";

export const BeerFiltersContext = createContext<BeerFiltersCtx>(
  InitialBeerFiltersState
);

export const BeerFiltersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [country, setCountry] = useState<Country>(
    InitialBeerFiltersState.country
  );
  const [search, setSearch] = useState("");
  const [alcohol, setAlcohol] = useState<AlcoholFilter>({});

  const value = {
    country,
    search,
    alcohol,
    setCountry,
    setSearch,
    setAlcohol,
  };

  return (
    <BeerFiltersContext.Provider value={value}>
      {children}
    </BeerFiltersContext.Provider>
  );
};
