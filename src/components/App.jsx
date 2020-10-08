import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles.jsx";
import BaseLayout from "./BaseLayout.jsx";
import Home from "./Home.jsx";

const App = () => (
  <Router>
    <GlobalStyles />
    <BaseLayout>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/about">
          <h1>about</h1>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </BaseLayout>
  </Router>
);

export default App;
