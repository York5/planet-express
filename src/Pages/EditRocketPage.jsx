import React, { Fragment } from "react";
import MainLayout from "../Layouts/MainLayout";
import CatalogBanner from "../components/Catalog/CatalogBanner/CatalogBanner";
import EditRocket from "../components/EditRocket/EditRocket";

const EditRocketPage = () => {
  return (
    <MainLayout>
      <CatalogBanner />
      <EditRocket />
    </MainLayout>
  );
};

export default EditRocketPage;
