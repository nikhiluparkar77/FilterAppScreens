import React from "react";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

const DateComponent = ({ label }) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        label={label}
        id="date"
        type="date"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default DateComponent;
