import { authTypes } from "../types/authTypes";
import { noteStartLogout } from "./notesActions";
import { startLoading, finishLoading } from "../actions/errorActions";
import { firebase, googleProvider } from "../firebase/firebase-config";

export const googleSignIn = () => {
 return async (dispatch) => {
  const { user } = await firebase.auth().signInWithPopup(googleProvider);
  dispatch(loginActions(user.uid, user.displayName));
 };
};

export const startRegisterWithEmailAndPassword = (email, password, name) => {
 return (dispatch) => {
  firebase
   .auth()
   .createUserWithEmailAndPassword(email, password)
   .then(async ({ user }) => {
    await user.updateProfile({ displayName: name });
    dispatch(loginActions(user.uid, user.displayName));
   })
   .catch(console.error);
 };
};

export const startEmailAndPassword = (email, password) => {
 return (dispatch) => {
  dispatch(startLoading());
  firebase
   .auth()
   .signInWithEmailAndPassword(email, password)
   .then(async ({ user }) => {
    dispatch(loginActions(user.uid, user.displayName));
    dispatch(finishLoading());
   })
   .catch(() => {
    dispatch(finishLoading());
   });
 };
};

export const loginActions = (uid, displayName) => ({
 type: authTypes.LOGIN,
 payload: {
  uid,
  displayName,
 },
});

export const startlogoutActions = () => {
 return async (dispatch) => {
  await firebase.auth().signOut();
  dispatch(logout());
  dispatch(noteStartLogout());
 };
};

export const logout = () => ({
 type: authTypes.LOGOUT,
});
