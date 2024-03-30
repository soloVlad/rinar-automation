import { Flex, Table } from "antd";

import { beerApi } from "@/resources/beer";
import { useBeerFiltersContext } from "@/contexts";

import BeerTableFilters from "./Filters/BeerTableFilters";
import { columns } from "./columns";

const BeerTable = () => {
  const { country } = useBeerFiltersContext();

  console.log(country);

  const { data, error, isPending } = beerApi.useList(country);

  return (
    <Flex vertical={true} gap={30}>
      <BeerTableFilters />

      {isPending && <div>Loading...</div>}

      {error && <div>Error</div>}

      {data && <Table columns={columns} dataSource={data} rowKey="title" />}
    </Flex>
  );
};

export default BeerTable;
