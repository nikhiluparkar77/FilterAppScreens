import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "*": {
      marginTop: "20px",
    },
    
    
  },
}));

const RedioButton = ({ name, value, label }) => {
  const classes = useStyles();

  
  return (
    <div className={classes.root}> 
        <FormControlLabel
          value={value}
          name={name}
          control={<Radio />}
          className={classes.radioBlock}
          label={label}
        />
         <br /> 
    </div>
  );
};

export default RedioButton;
