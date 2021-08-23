import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Register = () => {
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
    <div className="register-dark">
      <div className="form">
        <h2 className="sr-only">Register</h2>
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
        {/* role inputs */}
        <div
          className="form-group mt-3"
          onChange={(e) => setRole(e.target.value)}
        >
          <div className="form-check custom-radios">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Customer"
            />
            <label className="form-check-label " htmlFor="flexRadioDefault1">
              Customer
            </label>
          </div>
          <div className="form-check custom-radios">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Provider"
            />
            <label class="form-check-label" htmlFor="flexRadioDefault2">
              Provider
            </label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
        <Link
          to="/login"
          className="forgot"
          onClick={() => setHasAccount(!hasAccount)}
        >
          Have an Account? Sign In!
        </Link>
      </div>
    </div>
  );
};

export default Register;
