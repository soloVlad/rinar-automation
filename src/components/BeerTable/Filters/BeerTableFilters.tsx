import { FC } from "react";
import { Flex } from "antd";

import CountrySelect from "./CountrySelect/CountrySelect";
import AlcoholFilter from "./AlcoholFilter/AlcoholFilter";

const BeerTableFilters: FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <AlcoholFilter />
      <CountrySelect />
    </Flex>
  );
};

export default BeerTableFilters;
