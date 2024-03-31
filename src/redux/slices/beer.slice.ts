import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "@/api";
import { beerUtils } from "@/utils";
import { AlcoholFilter, Beer } from "@/resources/beer";

import { Country, RequestStatus } from "@/enums";

import { RootState } from "../store";

export const fetchBeerList = createAsyncThunk(
  "beer/fetchBeerList",
  async (country: Country) => {
    return api.get<never, Beer[]>(`/beers/${country}`);
  }
);

type BeerSliceState = {
  fetchedBeerList: Beer[];
  filteredBeerList: Beer[];
  requestStatus: RequestStatus;

  country: Country;
  search: string;
  alcohol: AlcoholFilter;
};

const initialState: BeerSliceState = {
  fetchedBeerList: [],
  filteredBeerList: [],
  requestStatus: RequestStatus.LOADING,

  country: Country.ITALY,
  search: "",
  alcohol: {},
};

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;

      if (action.payload) {
        state.filteredBeerList = beerUtils.filterBySearch(
          action.payload,
          state.filteredBeerList
        );
      }
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setAlcohol: (state, action) => {
      const newAlcohol = { ...state.alcohol, ...action.payload };
      state.alcohol = newAlcohol;

      if (action.payload) {
        state.filteredBeerList = beerUtils.filterByAlcohol(
          newAlcohol,
          state.filteredBeerList
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeerList.pending, (state) => {
        state.requestStatus = RequestStatus.LOADING;
        state.fetchedBeerList = [];
        state.filteredBeerList = [];
      })
      .addCase(fetchBeerList.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.SUCCESS;
        state.fetchedBeerList = action.payload;

        let processingBeerList = [...action.payload];

        if (state.search) {
          processingBeerList = beerUtils.filterBySearch(
            state.search,
            processingBeerList
          );
        }

        if (state.alcohol) {
          processingBeerList = beerUtils.filterByAlcohol(
            state.alcohol,
            processingBeerList
          );
        }

        state.filteredBeerList = processingBeerList;
      })
      .addCase(fetchBeerList.rejected, (state) => {
        state.requestStatus = RequestStatus.REJECTED;
        state.fetchedBeerList = [];
        state.filteredBeerList = [];
      });
  },
});

export const selectCountry = (state: RootState) => state.beer.country;
export const selectSearch = (state: RootState) => state.beer.search;
export const selectAlcohol = (state: RootState) => state.beer.alcohol;
export const selectBeerList = (state: RootState) => state.beer.filteredBeerList;
export const selectRequestStatus = (state: RootState) =>
  state.beer.requestStatus;

export const { setSearch, setCountry, setAlcohol } = beerSlice.actions;

export default beerSlice.reducer;
