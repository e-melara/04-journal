import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { JournalEntries } from "./JournalEntries";
import { startNewNote } from "../../actions/notesActions";
import { startlogoutActions } from "../../actions/authActions";

export const Sidebar = () => {
 const dispatch = useDispatch();
 const handlerLogout = () => {
  dispatch(startlogoutActions());
 };

 const { name } = useSelector((state) => state.auth);
 const handlerNewNotes = () => {
  dispatch(startNewNote());
 };

 return (
  <aside className="journal__sidebar">
   <div className="journal__sidebar-navbar">
    <h3 className="mt-5">
     <i className="far fa-moon"></i>
     <span> {name}</span>
    </h3>
    <button onClick={handlerLogout} className="btn mt-5">
     Logout
    </button>
   </div>
   <div className="journal__new-entry" onClick={handlerNewNotes}>
    <i className="far fa-calendar-plus fa-5x mb-5"></i>
    <p>New Entry</p>
   </div>
   <JournalEntries />
  </aside>
 );
};
