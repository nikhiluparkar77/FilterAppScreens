import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Slide: {
    background: "#3f51b5",
    padding: "15px",
    width: "100%",
    color: "#fff",
    borderRadius: "7px",
  },
  SlideText: {
    fontSize: "12px",
    marginTop: "7px",
  },
}));

const Slider = () => {
  const classes = useStyles();
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={false}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={2}
      scrollOnDevice={true}
    >
      <Grid item xs={12} className={classes.Slide}>
        <Typography>$125</Typography>
        <Typography className={classes.SlideText}>Basic Economy</Typography>
      </Grid>
      <Grid item xs={12} className={classes.Slide}>
        <Typography>$212</Typography>
        <Typography className={classes.SlideText}>Main Cabin</Typography>
      </Grid>
      <Grid item xs={12} className={classes.Slide}>
        <Typography>$475</Typography>
        <Typography className={classes.SlideText}>Economy class</Typography>
      </Grid>
    </InfiniteCarousel>
  );
};

export default Slider;
