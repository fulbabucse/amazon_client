import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    dept: "",
    key: "",
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearchValue: (state, { payload }) => {
      state.search.dept = payload.category;
      state.search.key = payload.searchValue;
    },
  },
});

export const { getSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
