import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-banner-mask">
        <div className="footer-banner">
          <Container>
            {/* <div className="footer-banner-inner">
              <h1>Send and forget</h1>
              <h6>Find the best rocket to launch your cargo</h6>
            </div> */}
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
