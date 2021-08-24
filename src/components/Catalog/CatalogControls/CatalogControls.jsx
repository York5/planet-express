import React, { Fragment, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useRockets } from "../../../contexts/RocketContext";
import MultiRangeSlider from "../../MultirangeSlider/MultirangeSlider";

const CatalogControls = () => {
  const { getRocketsData, history } = useRockets();
  const [payload, setPayload] = useState(getPayload());
  const [orbit, setOrbit] = useState(getOrbit());

  const [minVal, setMinVal] = useState(200);
  const [maxVal, setMaxVal] = useState(70000);

  const [minPrice, setMinPrice] = useState(getMinPrice);
  const [maxPrice, setMaxPrice] = useState(getMaxPrice);

  console.log(minVal, maxVal);

  // function getLeoPayload() {
  //   const search = new URLSearchParams(history.location.search);
  //   return search.get("payloadLEO");
  // }

  // function getGtoPayload() {
  //   const search = new URLSearchParams(history.location.search);
  //   return search.get("payload");
  // }

  function getPayload() {
    const search = new URLSearchParams(history.location.search);
    return search.get("");
  }

  function getOrbit() {
    const search = new URLSearchParams(history.location.search);
    return search.get("");
  }

  function getMinPrice() {
    const search = new URLSearchParams(history.location.search);
    return search.get("price_gte");
  }

  function getMaxPrice() {
    const search = new URLSearchParams(history.location.search);
    return search.get("price_lte");
  }

  const handleChangePayload = (e) => {
    const search = new URLSearchParams(history.location.search);
    if (orbit === "LEO") {
      search.set("payloadLEO_gte", e.target.value);
      setPayload(e.target.value);
      getRocketsData();
    } else if (orbit === "GTO") {
      search.set("payloadGTO_gte", e.target.value);
      setPayload(e.target.value);
      getRocketsData();
    } else {
      search.set("q", e.target.value);
      setPayload(e.target.value);
      getRocketsData();
    }

    history.push(`${history.location.pathname}?${search.toString()}`);
    getRocketsData();
  };

  const handleChangeOrbit = (e) => {
    if (e.target.value == "Orbit") {
      const search = new URLSearchParams(history.location.search);
      search.delete("LEO");
      search.delete("GTO");
      history.push(`${history.location.pathname}?${search.toString()}}`);
      getRocketsData();
      setOrbit(e.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    if (e.target.value === "LEO") {
      search.delete("GTO");
      search.set("LEO", true);
      setOrbit(e.target.value);
    } else if (e.target.value === "GTO") {
      search.delete("LEO");
      search.set("GTO", true);
      setOrbit(e.target.value);
    }
    history.push(`${history.location.pathname}?${search.toString()}`);
    getRocketsData();
  };

  const handleChangePrice = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("pricePerKg_gte", minVal);
    search.set("pricePerKg_lte", maxVal);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getRocketsData();
    console.log("Hello");
  };

  // function click() {
  //   const search = new URLSearchParams(history.location.search);
  //   search.set(orbit, true);
  //   search.set("q", payload);
  //   history.push(`${history.location.pathname}?${search.toString()}`);
  //   getRocketsData();
  // }

  return (
    <Fragment>
      <Container>
        <div className="cat-form-block mt-4">
          <form className="cat-form">
            <Form.Group className="mb-3 d-flex">
              <Form.Select
                className="p-4  custom-select"
                onChange={handleChangeOrbit}
              >
                <option>Orbit</option>
                <option value="LEO">LEO</option>
                <option value="GTO">GTO</option>
              </Form.Select>
              <input
                type="text"
                placeholder="Payload (kg)"
                className="p-4 trans-input payload-input"
                onChange={handleChangePayload}
              />
              <div className="price-slider trans-input p-4">
                <MultiRangeSlider
                  min={200}
                  max={70000}
                  minVal={minVal}
                  maxVal={maxVal}
                  setMinVal={setMinVal}
                  setMaxVal={setMaxVal}
                  onChange={handleChangePrice}
                />
              </div>
              <Button variant="outline-warning" className="filter-btn">
                Filter
              </Button>{" "}
            </Form.Group>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default CatalogControls;
