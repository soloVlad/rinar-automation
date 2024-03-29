import { useQuery } from "@tanstack/react-query";

import api from "@/api";

import { Beer } from "./beer.types";

export const useList = (country ?:string) => {
  const fetchBeer = () => {
    const countryString = country ? `/${country}` : '';

    return api.get<never, Beer[]>(`/beers${countryString}`);
  };

  return useQuery<Beer[]>({
    queryKey: ['beer', country],
    queryFn: fetchBeer,
  });
}