import { Provider } from "react-redux";

import { store } from "@/redux/store";

import { BeerTable } from "@/components";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BeerTable />
    </Provider>
  );
}

export default App;
