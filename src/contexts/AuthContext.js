import { createContext, useContext, useEffect, useState } from "react";
import fire from "../fire";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [hasAccount, setHasAccount] = useState(false);
  //   const [roleError, setRoleError] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;

          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("User successfully created!", res);
        res.user.updateProfile({
          displayName: role,
        });
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;

          // default:
          //   break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((userData) => {
      if (userData) {
        console.log("if worked");
        clearInputs();
        setUser(userData);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const value = {
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
    handleLogout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
