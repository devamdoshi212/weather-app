import { Grid } from "@mui/material";
import WeatherView from "./WeatherView";
import WeatherForecast from "./WeatherForecast";
import { useState, useEffect } from "react";
import { Loading } from "../pages/Loading";
import { fetchGet } from "../Fetch/fetchGet";

const FavouriteDetail = ({ name }) => {
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [weatherForecastDetails, setWeatherForecastDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  async function weatherApi(q) {
    setLoading(true);
    const key = "1e7b979302474bacacd52612240507";
    const query = `?key=${key}&q=${q}`;
    const result = await fetchGet(
      "https://api.weatherapi.com/v1/current.json",
      query
    );
    setWeatherDetails(result);
    setLoading(false);
  }
  async function weatherForecastApi(q) {
    setLoading(true);
    const key = "1e7b979302474bacacd52612240507";
    let query = `?key=${key}&q=${q}&days=7`;
    const result = await fetchGet(
      "https://api.weatherapi.com/v1/forecast.json",
      query
    );
    setWeatherForecastDetails(result);
    setLoading(false);
  }

  useEffect(() => {
    weatherApi(name);
    weatherForecastApi(name);
  }, [name]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {weatherDetails && <WeatherView data={weatherDetails} />}
          </Grid>
          <Grid item xs={12}>
            {weatherForecastDetails && (
              <WeatherForecast forecast={weatherForecastDetails} />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default FavouriteDetail;
