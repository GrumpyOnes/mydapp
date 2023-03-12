import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

export interface MovieState {
  list: any[];
  totals: number;
}

const initialState: MovieState = {
  list: [],
  totals: 0,
};

const getMovieListApi = () =>
  fetch(
    "https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48"
  ).then((res) => res.json());

export const getMovieData: any = createAsyncThunk(
  "movie/getMovies",
  async () => {
    const res = await getMovieListApi();
    return res;
  }
);

//创建slice

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    //请求数据后触发
    loadDataEnd: (state, { payload }) => {
      state.list = payload;
      state.totals = payload.length;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(increment, (state, { payload }) => {
        //increment方法触发时候的处理
        state.list.push(payload.value);
        state.totals = state.list.length;
      })
      .addCase(getMovieData.pending, (state) => {
        console.log("🚀 ~ 进行中！");
      })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ fulfilled", payload);
        state.list = payload.data.list;
        state.totals = payload.data.list.length;
      })
      .addCase(getMovieData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err);
      });
  },
});

export const { loadDataEnd } = movieSlice.actions;
//默认导出
export default movieSlice.reducer;
