import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import LandingCargo from "../components/Landing/LandingCargo/LandingCargo";
import LandingTopSellers from "../components/Landing/LandingTopSellers/LandingTopSellers";
import MainLayout from "../Layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <HomeBanner />
      <LandingTopSellers />
      <LandingCargo />
    </MainLayout>
  );
};

export default HomePage;
