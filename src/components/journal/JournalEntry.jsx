import React from "react";

export const JournalEntry = () => {
 return (
  <div className="journal__entry pointer">
   <div
    className="journal__entry-picture"
    style={{
     backgroundSize: "cover",
     backgroundImage:
      "url(https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg)",
    }}
   ></div>
   <div className="journal__entry-body">
    <p className="journal__entry-title">Nuevo dia</p>
    <p className="journal__entry-content">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure
     harum blanditiis ipsum, saepe.
    </p>
   </div>

   <div className="journal__entry-date-box">
    <span>Monday</span>
    <h2>28</h2>
   </div>
  </div>
 );
};
