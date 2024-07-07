import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@mui/material";
import { lazy, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../store/weather-api.slice";
import FavouriteDetail from "../components/FavouriteDetail";
const Favorite = () => {
  const { favourite } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherActions.getFavorite());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={2}>
        {favourite &&
          favourite.map((place, id) => (
            <Grid item xs={12} key={id}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h5">{place}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {place && <FavouriteDetail name={place} />}
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Favorite;
