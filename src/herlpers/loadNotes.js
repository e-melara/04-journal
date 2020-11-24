import { db } from "../firebase/firebase-config";

export const loadNotes = async (ui) => {
 const notes = [];
 const snaps = await db.collection(`${ui}/journal/notes`).get();

 snaps.forEach((snap) => {
  notes.push({
   id: snap.id,
   ...snap.data(),
  });
 });
 return notes;
};
