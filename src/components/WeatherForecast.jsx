import { Box, Card, Typography, Grid } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const getIcon = (condition) => {
  return <img src={condition.icon} alt={condition.text} />;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "7-Day Weather Forecast",
    },
  },
};

const WeatherForecast = ({ forecast }) => {
  const [realData, setRealData] = useState([]);
  useEffect(() => {
    setRealData(forecast.forecast.forecastday);
  }, [forecast]);
  const data = {
    labels: realData.map((day) => day.date),
    datasets: [
      {
        label: "Temperature (°C)",
        data: realData.map((day) => day.day.avgtemp_c),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
      {
        label: "Precipitation (mm)",
        data: realData.map((day) => day.day.totalprecip_mm),
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        7-Day Weather Forecast
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ maxHeight: "calc(100vh - 64px)" }}
          >
            {realData.map((day, index) => (
              <Grid item key={index} xs={6}>
                <Card
                  sx={{ display: "flex", alignItems: "center", padding: 1 }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{day.date}</Typography>
                    <Typography variant="body1">
                      {day.day.avgtemp_c}°C
                    </Typography>
                    <Typography variant="body2">
                      {day.day.condition.text}
                    </Typography>
                    <Typography variant="body2">
                      Precipitation: {day.day.totalprecip_mm} mm
                    </Typography>
                  </Box>
                  {getIcon(day.day.condition)}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ marginTop: 2 }}>
            <Line data={data} options={options} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherForecast;
