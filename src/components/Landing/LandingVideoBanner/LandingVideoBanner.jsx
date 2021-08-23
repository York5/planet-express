import React from "react";
import videoBanner from "../../../assets/video/engine-fire.mp4";

const LandingVideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoplay loop muted width="100%" height="300px">
        <source src={videoBanner} type="video/mp4" />
      </video>
      ;
    </div>
  );
};

export default LandingVideoBanner;
