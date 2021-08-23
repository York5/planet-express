import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
// import { Fragment } from "react";

const Login = () => {
  const {
    user,
    email,
    password,
    role,
    hasAccount,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    setRole,
    setHasAccount,
    handleSignup,
    handleLogin,
  } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  return (
    <div className="login-dark">
      <div className="form">
        <h2 className="sr-only">Login</h2>
        <div className="illustration">
          <i className="icon ion-ios-locked-outline"></i>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            autoFocus
            required
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">{emailError}</p>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            required
            value={password}
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">{passwordError}</p>
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            type="submit"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
        <Link
          to="/register"
          className="forgot"
          onClick={() => setHasAccount(!hasAccount)}
        >
          Not a member? Rigester!
        </Link>
      </div>
    </div>
  );
};

export default Login;
