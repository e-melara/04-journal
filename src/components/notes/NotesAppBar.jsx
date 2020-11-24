import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadFile } from "../../actions/notesActions";

export const NotesAppBar = () => {
 const dispatch = useDispatch();
 const { active } = useSelector((state) => state.notes);

 const handleClickSave = () => {
  dispatch(startSaveNote({ ...active }));
 };

 const handleClickPicture = () => {
  document.querySelector("#file").click();
 };
 const handleChangeFile = (e) => {
  const file = e.target.files[0];
  if (file) {
   dispatch(startUploadFile(file));
  }
 };

 return (
  <div className="notes__appbar">
   <span>28 de agosto 2020</span>
   <div>
    <input
     type="file"
     name="file"
     id="file"
     style={{ display: "none" }}
     onChange={handleChangeFile}
    />
    <button className="btn" onClick={handleClickPicture}>
     Picture
    </button>
    <button onClick={handleClickSave} className="btn">
     Save
    </button>
   </div>
  </div>
 );
};
