import React from "react";
import CatalogControls from "../components/Catalog/CatalogControls/CatalogControls";
import CatalogList from "../components/Catalog/CatalogList/CatalogList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainLayout from "../Layouts/MainLayout";

const CatalogPage = () => {
  return (
    <MainLayout style={{ backgoundColor: "#13101a " }}>
      <Header />
      <CatalogControls />
      <CatalogList />
      <Footer />
    </MainLayout>
  );
};

export default CatalogPage;
