import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
// import heroVideo from "../../assets/video/hero.mp4";

const HomeBanner = () => {
  return (
    <Fragment>
      <div className="home-banner-mask">
        <div className="home-banner"></div>
        {/* <video id="background-video" autoPlay muted loop>
        <source src={heroVideo} type="video/mp4" />
      </video> */}
        <Container>
          <div className="home-banner-inner">
            <h1>Send and forget</h1>
            <h6>Find the best rocket to launch your cargo</h6>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default HomeBanner;
