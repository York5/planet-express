import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CatalogCard = ({ item }) => {
  return (
    <Fragment>
      <div className="rocket-card">
        <Link to="/">
          <img src={item.image} alt="" />
        </Link>
        <div className="card-info">
          <h5>{item.rocket}</h5>
          <p>LEO: {item.payloadLEO} kg</p>
          <p>Price/kg: ${item.pricePerKg}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default CatalogCard;
