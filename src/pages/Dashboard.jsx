import { Grid, useMediaQuery } from "@mui/material";
import Search from "../components/Search";
import WeatherView from "../components/WeatherView";
import WeatherForecast from "../components/WeatherForecast";
import { Loading } from "./Loading";
import { useSelector } from "react-redux";
import Time from "../components/Time";

const Dashboard = () => {
  const { weatherDetails, loading, error } = useSelector(
    (state) => state.weather
  );
  const { weatherForecastDetails, loading1, error1 } = useSelector(
    (state) => state.weather
  );
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        spacing={3}
        wrap="wrap"
        direction={isSmallScreen ? "column" : "row"}
        paddingBottom={5}
        justifyContent={"flex-start"}
      >
        <Grid item xs="4">
          {!loading && weatherDetails && <Time data={weatherDetails} />}
        </Grid>
        <Grid item xs="8" alignContent={"center"} textAlign={"center"}>
          <Search />
        </Grid>
      </Grid>
      {!loading && weatherDetails && <WeatherView data={weatherDetails} />}
      {loading && <Loading />}
      {!loading1 && weatherForecastDetails && (
        <WeatherForecast forecast={weatherForecastDetails} />
      )}
      {loading1 && <Loading />}
    </>
  );
};

export default Dashboard;
