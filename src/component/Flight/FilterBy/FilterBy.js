import React from "react";
import NavBar from "../NavBar/NavBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextFeildComponent from "../Common/TextFeild";
import RangeSlider from "../Common/RangeSlider";
import CheckBoxComponent from "../Common/CheckBox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import ButtonComponent from "../Common/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "12px 20px",
      display: "block",
      margin: "auto",
      width: "100%",
    },
    withoutLabel: {
      marginTop: theme.spacing(2),
    },
    textField: {
      width: "100%",
    },
    DividerClass: {
      height: "10px",
      background: "#ddd",
    },
    formControl: {
      width: "100%",
    },
    MuiFormGrouproot: {
      width: "100%",
    },
    Divde: {
      margin: "25px 0px",
    },
  },
}));

const FilterBy = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <NavBar value="Filter By" to="/search" />
      <div className={classes.Filter}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              Price Range
            </Typography>
            <br />
            <Divider className={classes.Divde} />
            <br /> <br />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextFeildComponent label="Minimum Price" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextFeildComponent label="Maximum Price" />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={12}>
            <RangeSlider />
            <br />
            <Divider class={classes.DividerClass} />
            <br /> <br />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              Booking Class
            </Typography>
            <br />
            <Divider />
            <br /> <br />
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <FormGroup className={classes.FormGroupClass}>
                <CheckBoxComponent
                  label="Economy (199)"
                  name="Economy"
                  checked="Economy"
                  Price="145"
                />
                <CheckBoxComponent
                  label="First Class (199)"
                  name="FirstClass"
                  checked="FirstClass"
                  Price="416"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br /> <br />
        <Grid container item spacing={2}>
          <Grid item xs={6} sm={6}>
            <ButtonComponent value="Reset all" variant="outlined" />
          </Grid>
          <Grid item xs={6} sm={6}>
            <ButtonComponent
              value="Apply"
              variant="contained"
              color="primary"
            />
          </Grid>
        </Grid>
        <br />
      </div>
    </Container>
  );
};

export default FilterBy;
