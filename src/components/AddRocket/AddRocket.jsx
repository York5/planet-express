import { Button } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import { useRockets } from "../../contexts/RocketContext";

const AddRocket = () => {
  const { addRocket, history } = useRockets();

  const handleClick = async (rocket) => {
    const data = await addRocket(rocket);
    history.push("/catalog");
  };

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

  const handleInp = (e) => {
    // console.log(rocket);
    // console.log(e.target.name);
    if (
      e.target.name == "payloadLEO" ||
      e.target.name == "payloadGTO" ||
      e.target.name == "pricePerKg" ||
      e.target.name == "pricePerLaunch"
    ) {
      let obj = {
        ...rocket,
        [e.target.name]: Number(e.target.value),
      };
      setRocket(obj);
    } else {
      let obj = {
        ...rocket,
        [e.target.name]: e.target.value,
      };
      setRocket(obj);
    }
  };

  return (
    <Fragment>
      <div className="add-form-wrapper">
        <h3>Add Vehicle</h3>
        <div className="add-form-inner">
          <form className="add-form-info-block">
            <div className="rocket-name">
              <p className="item-lable">Rocket Name</p>
              <input
                type="text"
                className="input-field"
                name="rocket"
                onChange={handleInp}
              />
            </div>
            <div className="info-item">
              <p className="item-lable">Provider</p>
              <input
                type="text"
                className="input-field"
                name="company"
                onChange={handleInp}
              />
            </div>
            <div className="info-item">
              <p className="item-lable">Payload to LEO(kg)</p>
              <div>
                <input
                  type="text"
                  className="input-field"
                  name="payloadLEO"
                  onChange={handleInp}
                />
              </div>
              <p className="item-lable">Payload to GTO (kg)</p>
              <div>
                <input
                  type="text"
                  className="input-field"
                  name="payloadGTO"
                  onChange={handleInp}
                />
              </div>
            </div>
            <div className="info-item">
              <p className="item-lable">Cost per launch ($)</p>
              <div>
                <input
                  type="text"
                  className="input-field"
                  name="pricePerLaunch"
                  onChange={handleInp}
                />
              </div>
              <p className="item-lable">Cost per kg ($)</p>
              <div>
                <input
                  type="text"
                  className="input-field"
                  name="pricePerKg"
                  onChange={handleInp}
                />
              </div>
            </div>
            <div className="info-item">
              <p className="item-lable">Description</p>
              <input
                type="text"
                className="input-field"
                name="description"
                onChange={handleInp}
              />
            </div>
            <div className="info-item">
              <p className="item-lable">Image URL</p>
              <input
                type="text"
                className="input-field"
                name="image"
                onChange={handleInp}
              />
            </div>
            <Button className="form-btn" onClick={() => handleClick(rocket)}>
              Add
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddRocket;
