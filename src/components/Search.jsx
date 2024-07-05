import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { userIpApi } from "../store/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { weatherApi, weatherForecastApi } from "../store/weather-api.slice";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const ip = useSelector((state) => state.user.ip);
  const dispatch = useDispatch();
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearchSubmit = () => {
    dispatch(weatherApi(searchValue));
    dispatch(weatherForecastApi(searchValue));
  };

  useEffect(() => {
    dispatch(userIpApi());
  }, []);
  useEffect(() => {
    console.log(ip);
    if (ip && searchValue == "") {
      dispatch(weatherApi(ip));
      dispatch(weatherForecastApi(ip));
    }
  }, [ip]);
  return (
    <>
      <TextField
        label="Search location here"
        type="search"
        sx={{
          minWidth: {
            sm: 100,
            md: 300,
          },
        }}
        variant="filled"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={searchValue == ""}
        sx={{ minHeight: 55, marginInlineStart: 2 }}
        onClick={handleSearchSubmit}
      >
        Search
      </Button>
    </>
  );
};

export default Search;
