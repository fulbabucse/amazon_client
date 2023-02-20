const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: {
    brands: [],
    ratings: 4,
    startPrice: 1,
    endPrice: 99,
    stock: true,
    sortPrice: 0,
    card: "grid",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterBrands: (state, { payload }) => {
      if (!state.filter.brands.includes(payload)) {
        state.filter.brands.push(payload);
      } else {
        state.filter.brands = state.filter.brands.filter(
          (brand) => brand !== payload
        );
      }
    },
    filterRating: (state, { payload }) => {
      state.filter.ratings = payload;
    },
    filterStartPrice: (state, { payload }) => {
      state.filter.startPrice = payload;
    },
    filterEndPrice: (state, { payload }) => {
      state.filter.endPrice = payload;
    },
    sortByPrice: (state, { payload }) => {
      state.filter.sortPrice = payload;
    },
    cardStyle: (state, { payload }) => {
      state.filter.card = payload;
    },
  },
});

export const {
  filterBrands,
  filterRating,
  filterStartPrice,
  filterEndPrice,
  sortByPrice,
  cardStyle,
} = filterSlice.actions;

export default filterSlice.reducer;
