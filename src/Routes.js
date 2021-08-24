import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import RocketContextProvider from "./contexts/RocketContext";
import CatalogPage from "./Pages/CatalogPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <RocketContextProvider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/catalog" component={CatalogPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegistrationPage} />
          </Switch>
        </RocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
