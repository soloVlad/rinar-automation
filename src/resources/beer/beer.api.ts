import { useQuery } from "@tanstack/react-query";

import api from "@/api";

export const useList = (country ?:string) => {
  const fetchBeer = () => {
    const countryString = country ? `/${country}` : '';

    return api.get(`/beers${countryString}`);
  };

  return useQuery({
    queryKey: ['beer', country],
    queryFn: fetchBeer,
  });
}