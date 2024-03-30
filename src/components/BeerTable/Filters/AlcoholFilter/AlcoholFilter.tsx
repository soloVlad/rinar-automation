import { FC } from "react";
import { Flex, InputNumber } from "antd";
import debounce from "lodash.debounce";

import { useBeerFiltersContext } from "@/contexts";

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
        size="large"
        min={0}
        max={100}
        addonBefore="From"
        addonAfter="%"
        onChange={handleChangeFrom}
      />

      <InputNumber
        size="large"
        min={0}
        max={100}
        addonBefore="To"
        addonAfter="%"
        onChange={handleChangeTo}
      />
    </Flex>
  );
};

export default AlcoholFilter;
