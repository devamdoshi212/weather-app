import { configureStore } from "@reduxjs/toolkit";
import weatherApiSlice from "./weather-api.slice";
import userSlice from "./user.slice";

const store = configureStore({
  reducer: {
    weather: weatherApiSlice,
    user: userSlice,
  },
});

export default store;
