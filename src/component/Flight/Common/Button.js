import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "12px 20px",
      display: "block",
      margin: "auto",
      width: "60%",
    },
    buttonClass: {},
  },
}));

const ButtonComponent = ({ color, value, variant, to }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.buttonClass} variant={variant} color={color}>
        {value}
      </Button>
    </div>
  );
};

export default ButtonComponent;
