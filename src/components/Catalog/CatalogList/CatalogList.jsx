import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useRockets } from "../../../contexts/RocketContext";
import { getCurrentPage } from "../../../helpers/functions";
import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogList = () => {
  const { rocketsData, getRocketsData, pages } = useRockets();
  const [page, setPage] = useState(getCurrentPage());
  const history = useHistory();
  useEffect(() => {
    getRocketsData();
  }, []);

  useEffect(() => {}, [page]);

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getRocketsData();
    setPage(page);
  };

  return (
    <>
      <Container>
        {rocketsData ? (
          <div className="cards-block">
            {rocketsData.map((item) => (
              <CatalogCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <>
            <h1>...loading</h1>
          </>
        )}
      </Container>
      {/* <div style={{ margin: "20px auto" }}>
        <Pagination
          count={pages}
          color="primary"
          page={+page}
          onChange={handlePage}
        />
      </div> */}
    </>
  );
};

export default CatalogList;
