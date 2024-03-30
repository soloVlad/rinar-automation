import { FC } from "react";
import { Flex } from "antd";

import CountrySelect from "./CountrySelect/CountrySelect";

const BeerTableFilters: FC = () => {
  return (
    <Flex justify="space-between">
      <CountrySelect />
    </Flex>
  );
};

export default BeerTableFilters;
