import { createSlice, AnyAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  title: string;
}
const initialState: CounterState = {
  value: 0,
  title: "redux toolkkkkkit",
};

//创建一个slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //定义一个加法
    increment: (state: CounterState, { payload }) => {
      state.value += payload.value;
    },
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const asyncIncrement = (payload: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment(payload));
  }, 2000);
};

export default counterSlice.reducer;
