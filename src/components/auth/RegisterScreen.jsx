import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
 return (
  <>
   <h3 className="auth__title">Register</h3>
   <form>
    <input
     type="text"
     className="auth__input"
     name="name"
     id="name"
     autoComplete="off"
     placeholder="Name"
    />
    <input
     type="email"
     className="auth__input"
     name="email"
     id="email"
     autoComplete="off"
     placeholder="Email"
    />
    <input
     type="password"
     name="password"
     id="password"
     className="auth__input"
     placeholder="Password"
    />
    <input
     type="password"
     name="password2"
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
