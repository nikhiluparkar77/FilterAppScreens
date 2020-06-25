import React from "react";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../NavBar/NavBar";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ICon from "../Common/IMG/icon.png";
import Slider from "./Slider/Slider";
import Button from "../Common/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: "12px 20px",
    display: "block",
    margin: "auto",
    width: "100%",
  },
  FlightDtlRIT: {
    textAlign: "left",
  },
  FlightDtlCTR: {
    textAlign: "center",
  },
  FlightDtlLFT: {
    textAlign: "right",
  },
  SearchClass: {
    textDecoration: "none",
    color: "#fff",
  },
  Divde: {
    margin: "25px 0px",
  },
}));

const SearchDetails = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar value="Del to Cpt" to="/" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h6">
              Ethopian airlines
            </Typography>

            <Divider className={classes.Divde} />
          </Grid>
          <Grid item xs={4} className={classes.FlightDtlRIT}>
            <Typography variant="h6" component="h6">
              2.30 am
            </Typography>
            <Typography variant="p" component="p">
              Del
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.FlightDtlCTR}>
            <Typography variant="p" component="p">
              14h 20m
            </Typography>
            <img src={ICon} />
            <Typography variant="p" component="p">
              1 Stop (ADD)
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.FlightDtlLFT}>
            <Typography variant="h6" component="h6">
              4.50 pm
            </Typography>
            <Typography variant="p" component="p">
              Cpt
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider />
          </Grid>

          <Grid item xs={12}>
            <Divider className={classes.Divde} />

            <Typography variant="h6" component="h6">
              British airways
            </Typography>

            <Divider className={classes.Divde} />
          </Grid>
          <Grid item xs={4} className={classes.FlightDtlRIT}>
            <Typography variant="h6" component="h6">
              2.30 am
            </Typography>
            <Typography variant="p" component="p">
              Del
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.FlightDtlCTR}>
            <Typography variant="p" component="p">
              14h 20m
            </Typography>
            <img src={ICon} />
            <Typography variant="p" component="p">
              1 Stop (ADD)
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.FlightDtlLFT}>
            <Typography variant="h6" component="h6">
              4.50 pm
            </Typography>
            <Typography variant="p" component="p">
              Cpt
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.Divde} />
          </Grid>

          <Grid item xs={6}>
            <Link to="/short" className={classes.SearchClass}>
              <Button
                value="Short by"
                className={classes.rigthButton}
                variant="contained"
                color="primary"
              />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link to="/filter" className={classes.SearchClass}>
              <Button
                value="Filters"
                className={classes.FlightDtlRIT}
                variant="contained"
                color="primary"
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SearchDetails;
