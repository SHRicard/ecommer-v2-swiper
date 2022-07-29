import React from "react";
import Outlet from "../Outlet/Outlet.js";

import "./CatalogOutlet.css";
const CatalogOutlet = () => {
  return (
    <div className="container-fluid p-0 m-0 pt-3 bg-warning">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Outlet />
        </div>
        <div className="col-sm-12 col-md-6 text-center text-Anton text-dark ">
          <h2 className="fs-2">Bienvenido a la sección de outlet</h2>
          <h2 className="fs-5">De Running Deporte</h2>
          <p className=" ">
            Compra Seguro/a en Running Deporte Online!
            <p>
              ¡Conocé el catálogo seleccionado con un solo click!
              <p>
                Las Mega Ofertas Bomba estarán disponibles hasta agotar stock.
              </p>
              <p>
                Todos los productos de outle son originales, encontrarás marcas
                como Gaelle , <br />
                Jaguar entre otras. <br /> Por favor leer en los detalles de
                cada producto la disponibilidad en talle y color.
              </p>
              <p>
                encontrarás los mejores precio del mercado desde
                <span className="text-danger">&nbsp;4.000$&nbsp;</span>hasta
                <span className="text-danger">&nbsp;5.500$&nbsp;</span>
                hasta agotar stock
              </p>
              <p className="fs-3">Envíos a todo el país!</p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogOutlet;
