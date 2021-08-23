import React, { Fragment } from "react";
import { Container, Form, Button } from "react-bootstrap";
import MultiRangeSlider from "../../MultirangeSlider/MultirangeSlider";

const CatalogControls = () => {
  return (
    <Fragment>
      <Container>
        <div className="cat-form-block">
          <form className="cat-form">
            <Form.Group className="mb-3 d-flex">
              <input
                type="text"
                placeholder="Payload (kg)"
                className="p-4 trans-input payload-input"
              />
              <Form.Select className="p-4  custom-select">
                <option>Orbit</option>
                <option value="LEO">LEO</option>
                <option value="GTO">GTO</option>
              </Form.Select>
              <div className="price-slider trans-input p-4">
                <MultiRangeSlider
                  min={50}
                  max={60000}
                  onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
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
