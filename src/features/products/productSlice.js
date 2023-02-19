import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/baseURL";

const initialState = {
  isLoading: false,
  products: [],
  error: "",
};

export const getCategoryProducts = createAsyncThunk(
  "products/getCategoryProducts",
  async ({ category }) => {
    const res = await fetch(`${baseURL}/products/all/${category}`);
    const data = await res.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCategoryProducts.pending, (state, action) => {
        state.isLoading = true;
        state.products = [];
        state.error = "";
      })
      .addCase(getCategoryProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
        state.error = "";
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
