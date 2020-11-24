import React from "react";
import moment from "moment";

import { useDispatch } from "react-redux";
import { notesActive } from "../../actions/notesActions";

export const JournalEntry = ({ body, date, id, title, url }) => {
 const dateNote = moment(date);
 const dispatch = useDispatch();

 const handlerClickEntry = () => {
  dispatch(notesActive(id, { body, title, url, date }));
 };

 return (
  <div className="journal__entry pointer" onClick={handlerClickEntry}>
   {url && (
    <div
     className="journal__entry-picture"
     style={{
      backgroundSize: "cover",
      backgroundImage: `url(${url})`,
     }}
    ></div>
   )}
   <div className="journal__entry-body">
    <p className="journal__entry-title">{title}</p>
    <p className="journal__entry-content">{body}</p>
   </div>

   <div className="journal__entry-date-box">
    <span>{dateNote.format("dddd")}</span>
    <h2>{dateNote.format("Do")}</h2>
   </div>
  </div>
 );
};
