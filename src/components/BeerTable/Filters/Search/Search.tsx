import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import debounce from "lodash.debounce";

import { useBeerFiltersContext } from "@/contexts";

import classes from "./Search.module.css";

const Search: FC = () => {
  const { setSearch } = useBeerFiltersContext();

  const handleSearchChange = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    300
  );

  return (
    <Input
      className={classes.search}
      size="large"
      placeholder="Search..."
      onChange={handleSearchChange}
    />
  );
};

export default Search;
