import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FeildTextComponent from "../../Common/FieldText";
import DateComponent from "../../Common/Date";
import ButtonComponent from "../../Common/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  SearchClass: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const SearchPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FeildTextComponent label="Departure" />
        </Grid>
        <Grid item xs={12}>
          <FeildTextComponent label="Departure" />
        </Grid>
        <Grid item xs={6}>
          <DateComponent label="Depart Date" />
        </Grid>
        <Grid item xs={6}>
          <DateComponent label="Return Date" />
        </Grid>
        <Grid item xs={6}>
          <FeildTextComponent label="Travelers" />
        </Grid>
        <Grid item xs={6}>
          <FeildTextComponent label="Class" />
        </Grid>
        <Grid item xs={12}>
          <Link to="/search" className={classes.SearchClass}>
            <ButtonComponent
              value="Search"
              variant="contained"
              color="primary"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPage;
