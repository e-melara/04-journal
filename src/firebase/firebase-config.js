import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
 apiKey: "AIzaSyDxDiO6If1G1Ir_ik1kYxhWXwyz6W-8W8I",
 authDomain: "react-app-hooks-3ac37.firebaseapp.com",
 databaseURL: "https://react-app-hooks-3ac37.firebaseio.com",
 projectId: "react-app-hooks-3ac37",
 storageBucket: "react-app-hooks-3ac37.appspot.com",
 messagingSenderId: "575029997582",
 appId: "1:575029997582:web:2d00d98561585693274c5f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleProvider, firebase };
