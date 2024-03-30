import { useEffect, useState } from "react";
import { Flex, Table } from "antd";

import { beerUtils } from "@/utils";
import { Beer, beerApi } from "@/resources/beer";
import { useBeerFiltersContext } from "@/contexts";

import BeerTableFilters from "./Filters/BeerTableFilters";
import { columns } from "./columns";

import classes from "./BeerTable.module.css";
import AdditionalInfoModal from "./AdditionalInfoModal/AdditionalInfoModal";

const BeerTable = () => {
  const [beerList, setBeerList] = useState<Beer[] | undefined>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalRecord, setModalRecord] = useState<Beer | null>(null);

  const { search, alcohol, country } = useBeerFiltersContext();

  const { data, error, isPending } = beerApi.useList(country);

  const onRow = (record: Beer) => {
    return {
      onClick: () => {
        setModalRecord(record);
        setIsModalVisible(true);
      },
    };
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!data) {
      setBeerList(data);
      return;
    }

    let filteredBeerList = [...data];

    if (search) {
      filteredBeerList = beerUtils.filterBySearch(search, filteredBeerList);
    }

    if (alcohol) {
      filteredBeerList = beerUtils.filterByAlcohol(alcohol, filteredBeerList);
    }

    setBeerList(filteredBeerList);
  }, [data, search, alcohol]);

  return (
    <Flex vertical={true} gap={30}>
      <BeerTableFilters />

      {isPending && <div>Loading...</div>}

      {error && <div>Error</div>}

      {beerList && (
        <>
          <Table
            columns={columns}
            dataSource={beerList}
            rowKey="title"
            rowClassName={classes.row}
            onRow={onRow}
          />

          {isModalVisible && Boolean(modalRecord) && (
            <AdditionalInfoModal
              record={modalRecord!}
              isVisible={isModalVisible}
              onClose={handleModalClose}
            />
          )}
        </>
      )}
    </Flex>
  );
};

export default BeerTable;
