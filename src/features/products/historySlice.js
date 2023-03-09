import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    getHistory: (state, { payload }) => {
      const payloadProduct = { ...payload, createAt: Date.now() };
      const data = JSON.parse(localStorage.getItem("browsing_history"));
      const haveAlready = data?.find(
        (product) => product?._id === payload?._id
      );
      if (data) {
        if (!haveAlready) {
          localStorage.setItem(
            "browsing_history",
            JSON.stringify([...data, payloadProduct])
          );
          state.products = [...state.products, payloadProduct];
        }
      } else {
        localStorage.setItem(
          "browsing_history",
          JSON.stringify([payloadProduct])
        );
      }
    },
  },
});

export const { getHistory } = historySlice.actions;

export default historySlice.reducer;
