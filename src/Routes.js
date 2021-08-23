import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
