import React, { Fragment } from "react";
import { Container, Button, FormControl, Form } from "react-bootstrap";
import { useRockets } from "../../contexts/RocketContext";

const Search = () => {
  const { history, rocketsData, cart, getRocketsData } = useRockets();

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getRocketsData();
  };

  return (
    <Fragment>
      <Container>
        <div className="search-form-block mt-5">
          <Form.Group>
            <form className="search-form d-flex">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={handleValue}
              />
              <Button variant="outline-warning search-btn">Search</Button>
            </form>
          </Form.Group>
        </div>
      </Container>
    </Fragment>
  );
};

export default Search;
