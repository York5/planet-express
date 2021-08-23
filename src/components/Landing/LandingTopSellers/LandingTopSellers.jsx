import React from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

const LandingTopSellers = () => {
  return (
    <Fragment>
      <Container>
        <div className="top-seller-header">
          <h3>Popular Rockets</h3>
        </div>
        <div className="cards row">
          <div className="my-card col">
            <div className="my-card">
              <img src="https://i.ibb.co/Xy4fJLY/Png-Item-6482399.png" alt="" />
              <div className="card-info">
                <h4>Falcon Heavy</h4>
                <p>LEO: 63,800 kg</p>
                <p>Country: USA</p>
              </div>
            </div>
          </div>

          <div className="my-card col">
            <div className="my-card">
              <img src="https://i.ibb.co/jJS3R1D/proton-m.png" alt="" />
              <div className="card-info">
                <h4>Proton M</h4>
                <p>LEO: 23,000 kg</p>
                <p>Country: Russia</p>
              </div>
            </div>
          </div>

          <div className="my-card col">
            <div className="my-card">
              <img src="https://i.ibb.co/yQqydYB/ariane5.png" alt="" />
              <div className="card-info">
                <h4>Ariane 5</h4>
                <p>LEO: 21,000 kg</p>
                <p>Country: EU</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default LandingTopSellers;
