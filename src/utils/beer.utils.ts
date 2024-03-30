import { Beer } from "@/resources/beer";

import { AlcoholFilter } from "@/contexts/beer/beerFilters.types";

export const filterBySearch = (search: string, beerList: Beer[]) => {
  return beerList.filter((beer) => {
      const isInTitle = beer.title.includes(search);
      const isInDescription = beer.description.includes(search);

      return isInTitle || isInDescription;
    });
}

export const filterByAlcohol = (alcohol: AlcoholFilter, beerList: Beer[]) => {
  return beerList.filter((beer) => {
    let isInBound = true;

    if (alcohol.from) {
      isInBound =
        isInBound && Number.parseInt(beer.alchool) >= alcohol.from;
    }

    if (alcohol.to) {
      isInBound = isInBound && Number.parseInt(beer.alchool) <= alcohol.to;
    }

    return isInBound;
  });
}

