import { Table } from "antd";

import { beerApi } from "@/resources/beer";

import { columns } from "./columns";

const BeerTable = () => {
  const { data, error, isPending } = beerApi.useList("italy");

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
      <Table columns={columns} dataSource={data} rowKey="title" />
    </>
  );
};

export default BeerTable;
