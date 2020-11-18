import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
 return (
  <div className="notes__main-content">
   <NotesAppBar />

   <div className="notes__content">
    <input
     type="text"
     autoComplete="off"
     placeholder="Some awesome title"
     className="notes__title-input"
    />
    <textarea
     placeholder="What happened today"
     className="notes__textarea"
    ></textarea>

    <div className="notes__images">
     <img
      src={
       "https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg"
      }
      aria-hidden
      alt={"Foo eating a sandwich."}
     />
    </div>
   </div>
  </div>
 );
};
