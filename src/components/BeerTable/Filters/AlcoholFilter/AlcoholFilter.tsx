import { FC } from "react";
import { Flex, InputNumber } from "antd";
import debounce from "lodash.debounce";

import { useBeerFiltersContext } from "@/contexts";

import classes from "./AlcoholFilter.module.css";

const AlcoholFilter: FC = () => {
  const { setAlcohol } = useBeerFiltersContext();

  const handleChangeFrom = debounce((value: number | null) => {
    setAlcohol((prevState) => ({ ...prevState, from: value ?? undefined }));
  }, 300);

  const handleChangeTo = debounce((value: number | null) => {
    setAlcohol((prevState) => ({ ...prevState, to: value ?? undefined }));
  }, 300);

  return (
    <Flex gap={12}>
      <InputNumber
        className={classes.input}
        size="large"
        min={0}
        max={100}
        addonBefore="From"
        addonAfter="%"
        controls={false}
        onChange={handleChangeFrom}
      />

      <InputNumber
        className={classes.input}
        size="large"
        min={0}
        max={100}
        addonBefore="To"
        addonAfter="%"
        controls={false}
        onChange={handleChangeTo}
      />
    </Flex>
  );
};

export default AlcoholFilter;
