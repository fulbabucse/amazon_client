const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  products: [],
  error: "",
};

const productSlice = createSlice({
  name: "products",
  extraReducers: () => {},
});
