import { FC, useMemo } from "react";
import { Select } from "antd";
import capitalize from "lodash.capitalize";

import { useBeerFiltersContext } from "@/contexts";
import { Country } from "@/enums";

import classes from "./CountrySelect.module.css";

const CountrySelect: FC = () => {
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
    <Select
      className={classes.select}
      size="large"
      options={countries}
      onChange={handleCountryChange}
      defaultValue={country}
    />
  );
};

export default CountrySelect;
