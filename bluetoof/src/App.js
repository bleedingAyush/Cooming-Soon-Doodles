import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/style.scss";

import ComingSoon12 from "./pages/comingSoon12";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={ComingSoon12}
        />
        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
