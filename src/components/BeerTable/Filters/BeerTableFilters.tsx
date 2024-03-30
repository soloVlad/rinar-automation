import { FC, useMemo } from "react";
import { Flex, Select } from "antd";
import capitalize from "lodash.capitalize";

import { useBeerFiltersContext } from "@/contexts";

import { Country } from "@/enums";

import classes from "./BeerTableFilters.module.css";

const BeerTableFilters: FC = () => {
  const { country, setCountry } = useBeerFiltersContext();

  const countries = useMemo(() => {
    return Object.values(Country).map((country) => ({
      label: capitalize(country),
      value: country,
    }));
  }, []);

  const handleCountryChange = (country: Country) => {
    setCountry(country);
  };

  return (
    <Flex justify="space-between">
      <Select
        className={classes.select}
        size="large"
        options={countries}
        onChange={handleCountryChange}
        defaultValue={country}
      />
    </Flex>
  );
};

export default BeerTableFilters;
