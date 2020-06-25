import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FilterBy from "./component/Flight/FilterBy/FilterBy";
import ShortBy from "./component/Flight/ShortBy/ShortBy";
import MainPage from "./component/Flight/MainPage/MainPage";
import SearchDetails from "./component/Flight/SearchDetails/SearchDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/filter" component={FilterBy} />
        <Route exact path="/short" component={ShortBy} />
        <Route exact path="/search" component={SearchDetails} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
