import { FC } from "react";
import { Flex } from "antd";

import CountrySelect from "./CountrySelect/CountrySelect";
import AlcoholFilter from "./AlcoholFilter/AlcoholFilter";
import Search from "./Search/Search";

import classes from "./BeerTableFilters.module.css";

const BeerTableFilters: FC = () => {
  return (
    <Flex
      className={classes.filters}
      justify="space-between"
      align="center"
      gap={40}
    >
      <Search />
      <AlcoholFilter />
      <CountrySelect />
    </Flex>
  );
};

export default BeerTableFilters;
