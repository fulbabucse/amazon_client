const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: "high",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filters: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filters } = filterSlice.actions;

export default filterSlice.reducer;
