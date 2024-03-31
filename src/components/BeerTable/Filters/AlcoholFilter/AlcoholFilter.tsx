import { FC } from "react";
import { Flex, InputNumber } from "antd";
import debounce from "lodash.debounce";

import { useAppDispatch } from "@/redux/store";
import { setAlcohol } from "@/redux/slices/beer.slice";

import classes from "./AlcoholFilter.module.css";

const AlcoholFilter: FC = () => {
  const dispatch = useAppDispatch();

  const handleChangeFrom = debounce((value: number | null) => {
    dispatch(setAlcohol({ from: value ?? undefined }));
  }, 300);

  const handleChangeTo = debounce((value: number | null) => {
    dispatch(setAlcohol({ to: value ?? undefined }));
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
