import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Loading } from "../pages/Loading";

export default function Time({ data }) {
  const [time, setTime] = useState({
    date: "",
    month: "",
    year: "",
    day: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function updateTime() {
    const today = new Date(data.location.localtime);
    setTime({
      date: today.getDate(),
      month: monthNames[today.getMonth()],
      year: today.getFullYear(),
      day: dayNames[today.getDay()],
      hours: String(today.getHours()).padStart(2, "0"),
      minutes: String(today.getMinutes()).padStart(2, "0"),
      seconds: String(today.getSeconds()).padStart(2, "0"),
    });
  }

  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  if (time.day == "") return <Loading />;

  return (
    <Card
      sx={{
        minWidth: {
          xs: 300,
          sm: 500,
          md: 200,
          lg: 400,
        },
      }}
    >
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h5" component="div" align="center">
              {time.month} {time.year}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              align="center"
            >
              {time.day}, {time.month.slice(0, 3)} {time.date} {time.year}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" align="center">
              {time.hours}:{time.minutes}:{time.seconds}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
