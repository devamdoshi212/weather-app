import { Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

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
  // console.log(data);
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          {data.location.name}, {data.location.region}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {data.location.country}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Today's Overview
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Today's Temperature: {data.current.temp_c}°C
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Wind Direction / Speed
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
                {data.current.wind_dir} {data.current.wind_kph} km/h
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Current Condition
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
                {data.current.condition.text}
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Pressure
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
                {data.current.pressure_mb} mb
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Uv Index
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
                {data.current.uv}
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Humidity
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
                {data.current.humidity} %
              </Typography>
            </CardContent>
          </WeatherCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <WeatherCard>
            <CardContent>
              <Typography variant="h6" textAlign={"center"}>
                Visibilty
              </Typography>
              <Typography variant="h2" textAlign={"center"}>
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
