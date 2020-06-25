import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import SearchPage from "./SearchPage/SearchPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  Divde: {
    margin: "25px 0px",
  },
}));

const TabBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Flight");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="#fff"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Flight" value="Flight" {...a11yProps("Flight")} />
          <Tab label="Hotels" value="Hotels" {...a11yProps("Hotels")} />
          <Tab label="Cars" value="Cars" {...a11yProps("Cars")} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index="Flight">
        <Typography variant="h5" component="h5">
          Flights
        </Typography>

        <Divider className={classes.Divde} />

        <SearchPage />
      </TabPanel>
      <TabPanel value={value} index="Hotels">
        <Typography variant="h5" component="h5">
          Hotels
        </Typography>

        <Divider className={classes.Divde} />

        <SearchPage />
      </TabPanel>
      <TabPanel value={value} index="Cars">
        <Typography variant="h5" component="h5">
          Cars
        </Typography>

        <Divider className={classes.Divde} />

        <SearchPage />
      </TabPanel>
    </div>
  );
};

export default TabBar;
