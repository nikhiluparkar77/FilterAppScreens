import React from "react";
import NavBar from "../NavBar/NavBar";
import RedioButton from "../Common/RedioButton";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ButtonComponent from "../Common/Button";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "12px 20px",
      display: "block",
      margin: "auto",
    },
    RadioPart: {
      marginTop: "100px",
      display: "block",
    },
  },
}));

const ShortBy = ({ title }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState("Short By");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container className={classes.root}>
      <NavBar value="Short By" to="/search" />
      <div>
        <FormControl component="fieldset" classes={classes.ReadioPart}>
          <RadioGroup
            aria-label="ShortBy"
            name="ShortBy"
            value={value}
            onChange={handleChange}
          >
            <RedioButton
              className={classes.RadioClass}
              value="Price (Lowest to Highest)"
              name="ShortBy"
              label="Price (Lowest to Highest)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Price (Highest to Lowest)"
              name="ShortBy"
              label="Price (Highest to Lowest)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Duration (Shortest to Longest)"
              name="ShortBy"
              label="Duration (Shortest to Longest)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Duration (Longest to Shortest)"
              name="ShortBy"
              label="Duration (Longest to Shortest)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Departure (Earliest to Latest)"
              name="ShortBy"
              label="Departure (Earliest to Latest)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Arrival (Latest to Earliest)"
              name="ShortBy"
              label="Arrival (Latest to Earliest)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Airline (A to Z)"
              name="ShortBy"
              label="Airline (A to Z)"
            />
            <RedioButton
              className={classes.RadioClass}
              value="Airline (Z to A)"
              name="ShortBy"
              label="Airline (Z to A)"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <ButtonComponent value="Done" variant="contained" color="primary" />
    </Container>
  );
};

export default ShortBy;
