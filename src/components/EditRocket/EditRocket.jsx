import { Button } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import { useRockets } from "../../contexts/RocketContext";
import { useParams } from "react-router-dom";

const EditRocket = () => {
  const {
    getRocketDetails,
    rocketDetails,
    editRocket,
    history,
    saveEditedRocket,
  } = useRockets();

  //   const handleClick = async (rocket) => {
  //     const data = await editRocket(rocket);
  //     history.push("/catalog");
  //   };

  const { id } = useParams();
  const [rocket, setRocket] = useState({
    rocket: "",
    description: "",
    company: "",
    LEO: true,
    GTO: true,
    payloadLEO: 0,
    payloadGTO: 0,
    pricePerKg: 0,
    pricePerLaunch: 0,
    image: "",
  });

  useEffect(() => {
    getRocketDetails(id);
  }, []);

  //   console.log(rocketDetails);

  useEffect(() => {
    setRocket(rocketDetails);
  }, [rocketDetails]);

  console.log(rocket);

  const handleInp = (e, rocket, SetRocket) => {
    console.log(rocket);
    let obj = {
      ...rocket,
      [e.target.name]: e.target.value,
    };
    setRocket(obj);
  };

  return (
    <Fragment>
      <div className="edit-form-wrapper">
        <h3>Edit Vehicle</h3>
        <div className="edit-form-inner">
          <form className="edit-form-info-block">
            <div className="rocket-name">
              <p className="item-lable">Rocket Name</p>
              <input
                type="text"
                className="input-field"
                name="rocket"
                value={rocket.rocket}
                onChange={(e) => handleInp(e, rocket, setRocket)}
              />
            </div>
            <div className="info-item">
              <p className="item-lable">Provider</p>
              <input
                type="text"
                value={rocket.company}
                className="input-field"
                name="company"
                onChange={(e) => handleInp(e, rocket, setRocket)}
              />
            </div>
            <div className="info-item">
              <p className="item-lable">Payload to LEO(kg)</p>
              <div>
                <input
                  type="text"
                  value={rocket.payloadLEO}
                  className="input-field"
                  name="payloadLEO"
                  onChange={(e) => handleInp(e, rocket, setRocket)}
                />
              </div>
              <p className="item-lable">Payload to GTO (kg)</p>
              <div>
                <input
                  value={rocket.payloadGTO}
                  type="text"
                  className="input-field"
                  name="payloadGTO"
                  onChange={(e) => handleInp(e, rocket, setRocket)}
                />
              </div>
            </div>
            <div className="info-item">
              <p className="item-lable">Cost per launch ($)</p>
              <div>
                <input
                  value={rocket.pricePerLaunch}
                  type="text"
                  className="input-field"
                  name="pricePerLaunch"
                  onChange={(e) => handleInp(e, rocket, setRocket)}
                />
              </div>
              <p className="item-lable">Cost per kg ($)</p>
              <div>
                <input
                  value={rocket.pricePerKg}
                  type="text"
                  className="input-field"
                  name="pricePerKg"
                  onChange={(e) => handleInp(e, rocket, setRocket)}
                />
              </div>
            </div>
            <div className="info-item">
              <p className="item-lable">Description</p>
              <input
                value={rocket.description}
                className="input-field"
                name="description"
                onChange={(e) => handleInp(e, rocket, setRocket)}
              />
            </div>
            <div className="info-item">
              <p className="item-lable">Image URL</p>
              <input
                type="text"
                value={rocket.image}
                className="input-field"
                name="image"
                onChange={(e) => handleInp(e, rocket, setRocket)}
              />
            </div>
            <Button
              className="form-btn"
              //   onClick={() => handleClick(rocket)}
              onClick={() => saveEditedRocket(rocket.id, rocket)}
            >
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditRocket;
