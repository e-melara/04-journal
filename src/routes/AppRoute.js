import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AuthRouter } from "./AuthRouter";

import { PublicRoute } from "../routes/PublicRoute";
import { PrivateRoute } from "../routes/PrivateRoute";
import { loginActions } from "../actions/authActions";
import { firebase } from "../firebase/firebase-config";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRoute = () => {
 const dispatch = useDispatch();

 const [checkout, setCheckout] = useState(false);
 const [logged, setLogged] = useState(false);

 useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
   if (user?.uid) {
    dispatch(loginActions(user.uid, user.displayName));
    setLogged(true);
   } else {
    setLogged(false);
   }
   setCheckout(true);
  });
 }, [dispatch]);

 if (!checkout) {
  return <h2>Espere ...</h2>;
 }

 return (
  <Router>
   <div>
    <Switch>
     <PublicRoute component={AuthRouter} isAutheticathe={logged} path="/auth" />
     <PrivateRoute
      component={JournalScreen}
      isAutheticathe={logged}
      path="/"
      exact
     />
     {/* <Route path="/auth" component={AuthRouter} />
     <Route path="/" component={JournalScreen} exact /> */}
    </Switch>
   </div>
  </Router>
 );
};
