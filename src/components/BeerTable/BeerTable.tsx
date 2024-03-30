import { useEffect, useState } from "react";
import { Flex, Table } from "antd";

import { beerUtils } from "@/utils";
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
      filteredBeerList = beerUtils.filterBySearch(search, filteredBeerList);
    }

    if (alcohol) {
      filteredBeerList = beerUtils.filterByAlcohol(alcohol, filteredBeerList);
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
