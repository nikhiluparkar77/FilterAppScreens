import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ArrowBackIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
  },
  NavClass: {
    textDecoration: "none",
    color: "#fff",
  },
}));
const NavBar = ({ value, to }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={to} className={classes.NavClass}>
            <IconButton
              edge="start"
              className={classes.ArrowBackIcon}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {value}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
