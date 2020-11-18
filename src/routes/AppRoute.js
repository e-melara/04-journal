import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRoute = () => {
 return (
  <Router>
   <div>
    <Switch>
     <Route path="/auth" component={AuthRouter} />
     <Route path="/" component={JournalScreen} exact />
    </Switch>
   </div>
  </Router>
 );
};
