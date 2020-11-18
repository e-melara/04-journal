import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { googleSignIn, startEmailAndPassword } from "../../actions/authActions";
import useForm from "../../hooks/useForm";

export const LoginScreen = () => {
 const dispatch = useDispatch();
 const { loading } = useSelector((state) => state.err);

 const [formValue, handleInputChange] = useForm({
  email: "nano@gmail.com",
  password: "123456",
 });

 const { email, password } = formValue;

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(startEmailAndPassword(email, password));
 };

 const handleGoogleSignIn = () => {
  dispatch(googleSignIn());
 };

 return (
  <>
   <h3 className="auth__title">Login</h3>
   <form onSubmit={handleSubmit}>
    <input
     type="email"
     className="auth__input"
     name="email"
     value={email}
     onChange={handleInputChange}
     id="email"
     autoComplete="off"
     placeholder="Email"
    />
    <input
     type="password"
     name="password"
     id="password"
     value={password}
     onChange={handleInputChange}
     className="auth__input"
     placeholder="Password"
    />
    <button
     disabled={loading}
     type="submit"
     className="btn btn-primary btn-block"
    >
     Login
    </button>
    <div className="auth__social-networks">
     <p>Login with social networks </p>
     <div className="google-btn" onClick={handleGoogleSignIn}>
      <div className="google-icon-wrapper">
       <img
        className="google-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="google button"
       />
      </div>
      <p className="btn-text">
       <b>Sign in with google</b>
      </p>
     </div>
    </div>
    <Link to="/auth/register" className="link">
     Create new account
    </Link>
   </form>
  </>
 );
};
