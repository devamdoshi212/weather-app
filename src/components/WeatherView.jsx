import { Star } from "@mui/icons-material";
import { Grid, Typography, Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../store/weather-api.slice";
import { useEffect } from "react";

const WeatherCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  padding: {
    md: theme.spacing(2),
  },
}));

const WeatherView = ({ data }) => {
  const dispatch = useDispatch();
  const { favourite } = useSelector((state) => state.weather);
  const addToFavourite = () => {
    dispatch(weatherActions.setFavorite(data.location.name));
  };
  const disableFavourite = () => {
    if (favourite.includes(data.location.name)) return false;
    return true;
  };
  useEffect(() => {
    disableFavourite();
  }, [favourite]);
  useEffect(() => {
    console.log(favourite);
  }, [favourite]);
  return (
    <Grid container spacing={2} sx={{ paddingInline: 2 }}>
      <Grid item xs={9}>
        <Typography variant="h4" gutterBottom>
          Today's Overview
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" gutterBottom>
          {data.location.name}, {data.location.region}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {data.location.country}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h4" gutterBottom>
          Today's Temperature: {data.current.temp_c}°C
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h4" gutterBottom>
          <Button
            variant="outlined"
            onClick={addToFavourite}
            startIcon={<Star />}
          >
            Add to Favourite
          </Button>
        </Typography>
      </Grid>
      <Grid container spacing={4} columns={12}>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Wind Direction / Speed
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                {data.current.wind_dir} {data.current.wind_kph} km/h
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Current Condition
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                {data.current.condition.text}
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Pressure
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                {data.current.pressure_mb} mb
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Uv Index
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                {data.current.uv}
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Humidity
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                {data.current.humidity} %
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Visibilty
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                {data.current.vis_km} km
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeatherView;
