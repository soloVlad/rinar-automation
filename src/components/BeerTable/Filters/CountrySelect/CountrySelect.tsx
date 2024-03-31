import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";
import capitalize from "lodash.capitalize";

import { useAppDispatch } from "@/redux/store";
import { selectCountry, setCountry } from "@/redux/slices/beer.slice";

import { Country } from "@/enums";

import classes from "./CountrySelect.module.css";

const CountrySelect: FC = () => {
  const dispatch = useAppDispatch();
  const country = useSelector(selectCountry);

  const countries = useMemo(() => {
    return Object.values(Country).map((country) => ({
      label: capitalize(country),
      value: country,
    }));
  }, []);

  const handleCountryChange = (country: Country) => {
    dispatch(setCountry(country));
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
