const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: {
    brands: [],
    ratings: 0,
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
  },
});

export const { filterBrands, filterRating } = filterSlice.actions;

export default filterSlice.reducer;
