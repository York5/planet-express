import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const LandingCargo = () => {
  return (
    <Fragment>
      <Container>
        <div className="cargo-header">
          <h3>Types of cargo</h3>
        </div>
        <div className="cards row">
          <div className="cargo-card col">
            <div className="cargo-card">
              <img src="https://i.ibb.co/PDC6fff/sattelite1.png" alt="" />
              <div className="card-info">
                <h4>GPS satelite</h4>
                <p>Weight: 2,500 kg</p>
              </div>
            </div>
          </div>

          <div className="cargo-card col">
            <div className="cargo-card">
              <img src="https://i.ibb.co/k3knsXk/sattelite2.png" alt="" />
              <div className="card-info">
                <h4>Telecom satellite</h4>
                <p>Weight: 4,200 kg</p>
              </div>
            </div>
          </div>

          <div className="cargo-card col">
            <div className="cargo-card">
              <img src="https://i.ibb.co/0nQHGWW/sattelite3.png" alt="" />
              <div className="card-info">
                <h4>Infrared Telescope</h4>
                <p>Weight: 10,000 kg</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default LandingCargo;
