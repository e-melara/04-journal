import { db } from "../firebase/firebase-config";
import { authTypes } from "../types/authTypes";
import { loadUploadFile } from "../herlpers/loadUploadFile";

export const startNewNote = () => {
 return async (dispatch, getState) => {
  const { uid } = getState().auth;
  const newNote = {
   title: "",
   body: "",
   date: new Date().getTime(),
  };

  const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
  dispatch(notesActive(docRef.id, newNote));
  dispatch(notesAddNew(docRef.id, newNote));
 };
};

export const notesAddNew = (id, notes) => ({
 type: authTypes.notesAddNew,
 payload: {
  id,
  ...notes,
 },
});

export const setNotes = (notes) => ({
 type: authTypes.notesLoad,
 payload: notes,
});

export const notesActive = (id, notes) => ({
 type: authTypes.notesActive,
 payload: {
  id,
  ...notes,
 },
});

export const startSaveNote = (note) => {
 return async (dispatch, getState) => {
  const { uid } = getState().auth;
  const noteToFirestore = Object.assign(
   {},
   {
    body: note.body,
    title: note.title,
   }
  );

  const urlToDocumenRef = `${uid}/journal/notes/${note.id}`;
  if (note.url) {
   noteToFirestore.url = note.url;
  }
  await db.doc(urlToDocumenRef).update(noteToFirestore);
  dispatch(refreshNote(note.id, noteToFirestore));
 };
};

export const refreshNote = (id, note) => ({
 type: authTypes.notesUpdated,
 payload: {
  id,
  note: {
   id,
   ...note,
  },
 },
});

export const startUploadFile = (file) => {
 return async (dispatch, getState) => {
  const { active } = getState().notes;
  const fileUrl = await loadUploadFile(file);
  active.url = fileUrl;
  dispatch(startSaveNote(active));
 };
};

export const startNoteDelete = (noteId) => {
 return async (dispatch, getState) => {
  const { uid } = getState().auth;
  const urlToDocumenRef = `${uid}/journal/notes/${noteId}`;
  await db.doc(urlToDocumenRef).delete();

  dispatch(startDelete(noteId));
 };
};

const startDelete = (id) => ({
 type: authTypes.notesDelete,
 payload: id,
});

export const noteStartLogout = () => ({
 type: authTypes.notesLogoutCleaning,
});
