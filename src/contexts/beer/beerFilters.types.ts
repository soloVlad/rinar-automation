import { Country } from "@/enums";

export type AlcoholFilter = {
  from?: number;
  to?: number;
};

export type BeerFiltersCtx = {
  country: Country;
  search?: string;
  alcohol?: AlcoholFilter;

  setCountry: React.Dispatch<React.SetStateAction<Country>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setAlcohol: React.Dispatch<React.SetStateAction<AlcoholFilter>>;
};