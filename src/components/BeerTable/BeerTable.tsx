import { beerApi } from "@/resources/beer";

const BeerTable = () => {
  const { data, error, isPending } = beerApi.useList("italy");

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(data);

  return <div>ku</div>;
};

export default BeerTable;
