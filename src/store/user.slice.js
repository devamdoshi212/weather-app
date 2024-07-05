import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGet } from "../Fetch/fetchGet";

const initialState = {
  error: null,
  loading: false,
  ip: "",
  theme: "dark",
};

export const userIpApi = createAsyncThunk("userIpApi", async () => {
  const result = await fetchGet(
    "https://api.ipdata.co?api-key=07dd7f067f06fc64550a428726e321a5398ba57c02b21b1799c967b0"
  );
  // console.log(result);
  return result;
});

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userIpApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userIpApi.fulfilled, (state, action) => {
      state.ip = action.payload.ip;
      state.loading = false;
    });
    builder.addCase(userIpApi.rejected, (state) => {
      state.loading = false;
    });
  },
});
export const userActions = slice.actions;
export default slice.reducer;
