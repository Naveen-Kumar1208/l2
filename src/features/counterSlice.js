import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_MESSAGE } from "../constants/message";
const initialState = {
  count: 0,
  message: DEFAULT_MESSAGE,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.count < 10) {
        state.count += 1;
        state.message = "Value within range";
      } else {
        state.message = "Cannot increment beyond 10";
      }
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
        state.message = "Value within range";
      } else {
        state.message = "Cannot decrement below 0";
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
