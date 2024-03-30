import { useEffect, useState } from "react";
import { Flex, Table } from "antd";

import { Beer, beerApi } from "@/resources/beer";
import { useBeerFiltersContext } from "@/contexts";

import BeerTableFilters from "./Filters/BeerTableFilters";
import { columns } from "./columns";

const BeerTable = () => {
  const [beerList, setBeerList] = useState<Beer[] | undefined>([]);

  const { search, alcohol, country } = useBeerFiltersContext();

  const { data, error, isPending } = beerApi.useList(country);

  useEffect(() => {
    if (!data) {
      setBeerList(data);
      return;
    }

    let filteredBeerList = [...data];

    if (search) {
      filteredBeerList = filteredBeerList.filter((beer) => {
        const isInTitle = beer.title.includes(search);
        const isInDescription = beer.description.includes(search);

        return isInTitle || isInDescription;
      });
    }

    if (alcohol) {
      filteredBeerList = filteredBeerList.filter((beer) => {
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

    setBeerList(filteredBeerList);
  }, [data, search, alcohol]);

  return (
    <Flex vertical={true} gap={30}>
      <BeerTableFilters />

      {isPending && <div>Loading...</div>}

      {error && <div>Error</div>}

      {beerList && (
        <Table columns={columns} dataSource={beerList} rowKey="title" />
      )}
    </Flex>
  );
};

export default BeerTable;
