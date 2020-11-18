import React from "react";

import { useDispatch } from "react-redux";
import { startlogoutActions } from "../../actions/authActions";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
 const dispatch = useDispatch();
 const handlerLogout = () => {
  dispatch(startlogoutActions());
 };

 return (
  <aside className="journal__sidebar">
   <div className="journal__sidebar-navbar">
    <h3 className="mt-5">
     <i className="far fa-moon"></i>
    </h3>
    <button onClick={handlerLogout} className="btn">
     Logout
    </button>
   </div>
   <div className="journal__new-entry">
    <i className="far fa-calendar-plus fa-5x mb-5"></i>
    <p>New Entry</p>
   </div>
   <JournalEntries />
  </aside>
 );
};
