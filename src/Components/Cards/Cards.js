import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ props }) => {
  const starts = { calificacion: 5 };
  const starFill = Array.from(
    { length: Math.floor(props.calificacion || starts.calificacion) },
    (v, i) => i
  );
  const starHalf = !!(
    props.calificacion ||
    starts.calificacion - Math.floor(props.calificacion || starts.calificacion)
  );
  return (
    <div className="product-card">
      <div className="logo-card">
        <img src={props.logo} alt="Logo" />
        <i class="bi bi-bag-heart"></i>
      </div>
      <div className="main-images">
        {/* //////////////////////////// */}
        {/* {props.img.map((foto) => {
          return <img key={foto.id} src={foto.foto} alt="NikeLogo" />;
        })} */}
        <img src={props.img} alt="NikeLogo" />
        {/* ///////////////////////// */}
      </div>
      <div>
        <span className="text-dark text-Anton fs-5">
          {props.marca}
          <small>&nbsp;{props.modelo}</small>
        </span>

        <div className="stars">
          {starFill.map((star) => {
            return <i key={star} className="bi bi-star-fill" />;
          })}
          {starHalf && <i className="bi bi-star-half" />}
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
          <Link
            to={"/detalle/" + props.id}
            className="nav-link active"
            aria-current="page"
          >
            Detalle
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cards;
