import React from "react";
import NavBar from "../NavBar/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import TabBar from "./TabBar";
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      padding: "20px 12px 0px",
      display: "block",
      margin: "auto",
    },
    RadioPart: {
      marginTop: "100px",
      display: "block",
    },
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <Container  className={classes.root}>
      <NavBar value="Main Page" />
      <TabBar />
    </Container>
  );
};
export default MainPage;
