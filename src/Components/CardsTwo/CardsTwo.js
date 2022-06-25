import React from "react";
import "./CardsTwo.css";
const CardsTwo = ({ props }) => {
  return (
    <div className="card">
      {props.img.map((foto) => {
        return <img key={foto.id} src={foto.foto} alt="NikeLogo" />;
      })}
      <div className="card-body">
        <h5 className="card-title">{props.marca}</h5>

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardsTwo;
