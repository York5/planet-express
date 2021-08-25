import React, { Fragment } from "react";
import AddRocket from "../components/AddRocket/AddRocket";
import MainLayout from "../Layouts/MainLayout";
import CatalogBanner from "../components/Catalog/CatalogBanner/CatalogBanner";

const AddRocketPage = () => {
  return (
    <MainLayout>
      <CatalogBanner />
      <AddRocket />
    </MainLayout>
  );
};

export default AddRocketPage;
