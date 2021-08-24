import React from "react";
import CatalogBanner from "../components/Catalog/CatalogBanner/CatalogBanner";
import CatalogControls from "../components/Catalog/CatalogControls/CatalogControls";
import CatalogList from "../components/Catalog/CatalogList/CatalogList";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import MainLayout from "../Layouts/MainLayout";

const CatalogPage = () => {
  return (
    <MainLayout style={{ backgoundColor: "#13101a " }}>
      <Search />
      <CatalogBanner />
      <CatalogControls />
      <CatalogList />
    </MainLayout>
  );
};

export default CatalogPage;
