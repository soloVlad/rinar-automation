import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Table } from "antd";

import { useAppDispatch } from "@/redux/store";
import {
  fetchBeerList,
  selectBeerList,
  selectCountry,
  selectRequestStatus,
} from "@/redux/slices/beer.slice";

import { Beer } from "@/resources/beer";
import { RequestStatus } from "@/enums";

import BeerTableFilters from "./Filters/BeerTableFilters";
import { columns } from "./columns";

import AdditionalInfoModal from "./AdditionalInfoModal/AdditionalInfoModal";

import classes from "./BeerTable.module.css";

const BeerTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalRecord, setModalRecord] = useState<Beer | null>(null);

  const dispatch = useAppDispatch();

  const country = useSelector(selectCountry);
  const beerList = useSelector(selectBeerList);
  const requestStatus = useSelector(selectRequestStatus);

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
    dispatch(fetchBeerList(country));
  }, [country]);

  return (
    <Flex vertical={true} gap={30}>
      <BeerTableFilters />

      {requestStatus == RequestStatus.REJECTED && <div>Error</div>}

      <>
        <Table
          columns={columns}
          dataSource={beerList}
          rowKey="title"
          rowClassName={classes.row}
          onRow={onRow}
          loading={requestStatus === RequestStatus.LOADING}
        />

        {isModalVisible && Boolean(modalRecord) && (
          <AdditionalInfoModal
            record={modalRecord!}
            isVisible={isModalVisible}
            onClose={handleModalClose}
          />
        )}
      </>
    </Flex>
  );
};

export default BeerTable;
