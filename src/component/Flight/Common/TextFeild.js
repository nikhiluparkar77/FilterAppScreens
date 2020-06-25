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
    width: "80%",
  },
}));

const TextFeildComponent = ({ label }) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        label={label}
        id="outlined-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="outlined"
      />
    </div>
  );
};

export default TextFeildComponent;
