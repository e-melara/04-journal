import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
 setErrorAction,
 unRemoveErrorAction,
} from "../../actions/errorActions";
import useForm from "../../hooks/useForm";
import { startRegisterWithEmailAndPassword } from "../../actions/authActions";

export const RegisterScreen = () => {
 const dispatch = useDispatch();
 const { error } = useSelector((state) => state.err);

 const [formValue, handleInputChange] = useForm({
  name: "Edwin Melara",
  email: "edwin.melara@gmail.com",
  password: "123456789",
  password2: "123456789",
 });

 const { name, email, password, password2 } = formValue;
 const handleRegister = (e) => {
  e.preventDefault();
  if (isFormValid()) {
   dispatch(startRegisterWithEmailAndPassword(email, password, name));
  }
 };

 const isFormValid = () => {
  if (name.trim().length === 0) {
   dispatch(setErrorAction("name is required"));
   return false;
  }

  if (!validator.isEmail(email)) {
   dispatch(setErrorAction("Email not is valid"));
   return false;
  }

  if (password !== password2 || password.length < 5) {
   dispatch(setErrorAction("Password not equal"));
   return false;
  }

  dispatch(unRemoveErrorAction());

  return true;
 };

 return (
  <>
   <h3 className="auth__title">Register</h3>
   {error && (
    <div className="auth__alert-error">
     <span>{error}</span>
    </div>
   )}
   <form onSubmit={handleRegister}>
    <input
     type="text"
     className="auth__input"
     name="name"
     id="name"
     value={name}
     onChange={handleInputChange}
     autoComplete="off"
     placeholder="Name"
    />
    <input
     type="email"
     className="auth__input"
     name="email"
     id="email"
     value={email}
     onChange={handleInputChange}
     autoComplete="off"
     placeholder="Email"
    />
    <input
     type="password"
     name="password"
     value={password}
     onChange={handleInputChange}
     id="password"
     className="auth__input"
     placeholder="Password"
    />
    <input
     type="password"
     name="password2"
     value={password2}
     onChange={handleInputChange}
     id="password"
     className="auth__input"
     placeholder="Confirme password"
    />
    <button type="submit" className="btn btn-primary btn-block mt-5 mb-5">
     Register
    </button>
    <Link to="/auth/login" className="link">
     Already account?
    </Link>
   </form>
  </>
 );
};
