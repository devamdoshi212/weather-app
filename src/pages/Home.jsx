import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import { Grid, useMediaQuery } from "@mui/material";
import Time from "../components/Time";
import Search from "../components/Search";
import WeatherView from "../components/WeatherView";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import WeatherForecast from "../components/WeatherForecast";
const drawerWidth = 240;

export default function Home() {
  const [open, setOpen] = useState(false);
  const { weatherDetails, loading, error } = useSelector(
    (state) => state.weather
  );
  const { ip } = useSelector((state) => state.user);
  const { weatherForecastDetails, loading1, error1 } = useSelector(
    (state) => state.weather
  );
  const drawer = [{ name: "Dashboard", icon: <homeIcon />, link: "/" }];
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const handleDrawerOption = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerOption}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <List>
          {drawer.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: {
            sm: "block",
            xs: open ? "none" : "",
          },
        }}
      >
        <Toolbar />
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
      </Box>
    </Box>
  );
}
