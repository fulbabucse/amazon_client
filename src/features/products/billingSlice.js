import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  countries: [],
  error: "",
};

export const getCountries = createAsyncThunk(
  "billing/getCountries",
  async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    return data;
  }
);

const billingSlice = createSlice({
  name: "billing",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state, { payload }) => {
        state.loading = true;
        state.countries = [];
        state.error = "";
      })
      .addCase(getCountries.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.countries = payload;
        state.error = "";
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.countries = [];
        state.error = action.error.message;
      });
  },
});

export default billingSlice.reducer;
