import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useRef } from "react";

import useForm from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";
import { notesActive, startNoteDelete } from "../../actions/notesActions";

export const NoteScreen = () => {
 const dispatch = useDispatch();
 const { active: note } = useSelector((state) => state.notes);
 const [formValue, handlerInputChange, reset] = useForm(note);
 const { title, body, id } = formValue;
 const activeId = useRef(note.id);

 const handleClickDelete = () => {
  dispatch(startNoteDelete(id));
 };

 useEffect(() => {
  if (note.id !== activeId.current) {
   activeId.current = note.id;
   reset(note);
  }
 }, [note, reset]);

 useEffect(() => {
  dispatch(notesActive(formValue.id, { ...formValue }));
 }, [formValue, dispatch]);

 return (
  <div className="notes__main-content">
   <NotesAppBar />

   <div className="notes__content">
    <input
     type="text"
     autoComplete="off"
     name="title"
     value={title}
     onChange={handlerInputChange}
     placeholder="Some awesome title"
     className="notes__title-input"
    />
    <textarea
     name="body"
     value={body}
     className="notes__textarea"
     onChange={handlerInputChange}
     placeholder="What happened today"
    ></textarea>

    {note.url && (
     <div className="notes__images">
      <img src={note.url} aria-hidden alt={"Foo eating a sandwich."} />
     </div>
    )}
   </div>
   <button onClick={handleClickDelete} className="btn btn-danger">
    Delete
   </button>
  </div>
 );
};
