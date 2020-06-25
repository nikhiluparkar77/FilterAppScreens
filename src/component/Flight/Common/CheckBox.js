import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  CheckBoxLabel: {
    width: "100%",
  },
  PriceClass: {
    float: "right",
    marginTop: "10px",
  },
}));

const CheckBoxComponent = ({ label, name, checked, Price }) => {
  const classes = useStyles();
  //   const [state, setState] = React.useState({
  //     gilad: true,
  //     jason: false,
  //     antoine: false,
  //   });

  const handleChange = (event) => {
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        className={classes.CheckBoxLabel}
        control={
          <Checkbox checked={checked} onChange={handleChange} name={name} />
        }
        label={label}
      />
      <span className={classes.PriceClass}>${Price}</span>
    </div>
  );
};

export default CheckBoxComponent;
