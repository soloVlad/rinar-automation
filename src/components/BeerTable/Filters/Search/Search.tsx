import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import debounce from "lodash.debounce";

import { useAppDispatch } from "@/redux/store";
import { setSearch } from "@/redux/slices/beer.slice";

import classes from "./Search.module.css";

const Search: FC = () => {
  const dispatch = useAppDispatch();

  const handleSearchChange = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearch(event.target.value));
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
