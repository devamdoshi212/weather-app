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
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { weatherActions } from "../store/weather-api.slice";
import { Alert, Button, Snackbar } from "@mui/material";
const drawerWidth = 240;

export default function Home() {
  const [open, setOpen] = useState(false);
  const { error, error1 } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherActions.getFavorite());
  }, [dispatch]);

  const drawer = [
    { name: "Dashboard", icon: "", link: "/" },
    { name: "Favourite", icon: "", link: "/favourite" },
  ];
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
              <ListItemButton component={Link} to={text.link}>
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
        {(error || error1) && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={true}
            autoHideDuration={1000}
          >
            <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
              {error || error1}
            </Alert>
          </Snackbar>
        )}
        <Outlet />
      </Box>
    </Box>
  );
}
