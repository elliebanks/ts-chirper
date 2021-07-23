import React from "react";
import { Link } from "react-router-dom";

const ChirpCard = ({ chirp }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{chirp.user}</h5>
          <p className="card-text">
            {chirp.message}
          </p>
          <Link to={`/details/${chirp.id}`} className="card-link" />Details
        </div>
      </div>
    </>
  );
};

export default ChirpCard;
