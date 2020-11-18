import React from "react";
import { Provider } from "react-redux";

import { store } from "./stores/stores";
import { AppRoute } from "./routes/AppRoute";

export const JournalApp = () => {
 const stores = store;
 return (
  <>
   <Provider store={stores}>
    <AppRoute />
   </Provider>
  </>
 );
};
