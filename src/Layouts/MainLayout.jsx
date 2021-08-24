import React from "react";
import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
