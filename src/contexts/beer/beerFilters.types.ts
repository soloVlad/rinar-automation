export type AlcoholFilter = {
  from?: number;
  to?: number;
};

export type BeerFiltersCtx = {
  country: string;
  search?: string;
  alcohol?: AlcoholFilter;

  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setAlcohol: React.Dispatch<React.SetStateAction<AlcoholFilter>>;
};