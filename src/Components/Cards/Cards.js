import React from "react";

import "./Cards.css";

const Cards = ({ props }) => {
  return (
    <div className="product-card">
      <div className="logo-card">
        <img src={props.logo} alt="Logo" />
        <i class="bi bi-bag-heart"></i>
      </div>
      <div className="main-images">
        {/* //////////////////////////// */}
        {props.img.map((foto) => {
          return <img key={foto.id} src={foto.foto} alt="NikeLogo" />;
        })}

        {/* ///////////////////////// */}
      </div>
      <div>
        <span className="text-dark text-Anton fs-5">
          {props.marca}
          <small>&nbsp;{props.modelo}</small>
        </span>

        <div className="stars">
          <i className=" bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
        </div>
      </div>
      <div className="color-price">
        <div>
          <small className="text-Anton text-white ">{props.color}</small>
        </div>
        <div className="price">
          <span className="text-Anton text-white ">{props.precio}</span>
          <span className="text-Anton text-black price_letter">
            Peso Argentino
          </span>
        </div>
      </div>
      <div className=" d-grid gap-2 col-6 mx-auto pt-3">
        <button type="button" className="btn btn-dark btn-sm text-Anton">
          Mas Detalle
        </button>
      </div>
    </div>
  );
};

export default Cards;
