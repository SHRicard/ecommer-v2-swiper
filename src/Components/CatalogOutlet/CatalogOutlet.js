import React from "react";
import Outlet from "../Outlet/Outlet.js";

import "./CatalogOutlet.css";
const CatalogOutlet = () => {
  return (
    <div className="row pt-5 mx-0">
      <div className="col-12 col-lg-5">
        <Outlet />
      </div>
      <div className="col-12 col-lg-6 text-center text-Anton text-dark ">
        <h2 className="fs-2">Bienvenido a la sección de outlet</h2>
        <h2 className="fs-5">De Running Deporte</h2>
        <p className=" ">
          Compra segura en Running Deporte Online!
          <p>
            ¡Conocé el catálogo seleccionado con un solo click!
            <p>
              Las Mega Ofertas Bomba estarán disponibles hasta agotar stock.
            </p>
            <p>
              Todos los productos de outle son originales, encontrarás marcas
              como Gaelle , Jaguar entre otras. <br /> Por favor leer en los
              detalles de cada producto la disponibilidad en talle y color.
            </p>
            <p>
              encontrarás los mejores precio del mercado desde
              <span className="text-danger">&nbsp;3500$&nbsp;</span>hasta
              <span className="text-danger">&nbsp;4500$&nbsp;</span>
              hasta agotar stock
            </p>
            <p className="fs-3">Envíos a todo el país!</p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default CatalogOutlet;
