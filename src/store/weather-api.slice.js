import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGet } from "../Fetch/fetchGet";

const initialState = {
  error: null,
  loading: false,
  error1: null,
  loading1: false,
  weatherDetails: null,
  weatherForecastDetails: null,
  favourite: [],
};

export const weatherApi = createAsyncThunk("weatherApi", async (q) => {
  const key = "1e7b979302474bacacd52612240507";
  let query = `?key=${key}&q=${q}`;
  const result = await fetchGet(
    "https://api.weatherapi.com/v1/current.json",
    query
  );
  return result;
});
export const weatherForecastApi = createAsyncThunk(
  "weatherForecastApi",
  async (q) => {
    const key = "1e7b979302474bacacd52612240507";
    let query = `?key=${key}&q=${q}&days=7`;
    const result = await fetchGet(
      "https://api.weatherapi.com/v1/forecast.json",
      query
    );
    console.log(result);
    return result;
  }
);

const slice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getFavorite: (state) => {
      state.favourite = JSON.parse(localStorage.getItem("favourite"));
    },
    setFavorite: (state, action) => {
      if (localStorage.getItem("favourite")) {
        const fav = JSON.parse(localStorage.getItem("favourite"));
        if (!fav.includes(action.payload)) {
          fav.push(action.payload);
          state.favourite.push();
        }
        localStorage.setItem("favourite", JSON.stringify(fav));
      } else {
        localStorage.setItem("favourite", JSON.stringify([action.payload]));
        state.favourite = [action.payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(weatherApi.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(weatherApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(weatherApi.fulfilled, (state, action) => {
      state.weatherDetails = action.payload;
      state.loading = false;
    });
    builder.addCase(weatherForecastApi.rejected, (state, action) => {
      state.error1 = action.payload;
      state.loading1 = false;
    });
    builder.addCase(weatherForecastApi.pending, (state) => {
      state.loading1 = true;
    });
    builder.addCase(weatherForecastApi.fulfilled, (state, action) => {
      state.weatherForecastDetails = action.payload;
      state.loading1 = false;
    });
  },
});
export const weatherActions = slice.actions;
export default slice.reducer;
