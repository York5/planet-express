import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import LandingCargo from "../components/Landing/LandingCargo/LandingCargo";
import LandingTopSellers from "../components/Landing/LandingTopSellers/LandingTopSellers";
import LandingVideoBanner from "../components/Landing/LandingVideoBanner/LandingVideoBanner";
import MainLayout from "../Layouts/MainLayout";

const HomePage = () => {
  return (
    <MainLayout style={{ backgoundColor: "#13101a " }}>
      {/* <Header /> */}
      <HomeBanner />
      <LandingTopSellers />
      {/* <LandingVideoBanner /> */}
      <LandingCargo />
      {/* <Footer /> */}
    </MainLayout>
  );
};

export default HomePage;
