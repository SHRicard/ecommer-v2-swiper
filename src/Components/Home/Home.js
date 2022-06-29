import React from "react";
import "./Home.css";
import Menu from "../Menu/Menu.js";
import Envio from "../Envio/Envio.js";

import CaruselNovedades from "../CaruselNovedades/CaruselNovedades.js";
import CatalogOferta from "../CatalogOferta/CatalogOferta.js";
// import Catalogo from "../Catalogo/Catalogo.js";
import Footer from "../Footer/Footer.js";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Envio />
        </div>
        <div className="col-12 sticky-top px-0">
          <Menu />
        </div>
        <div className="col-12">
          <h1 className="text-center text-Anton pt-5 pb-3">Lanzamientos</h1>
          <CaruselNovedades />
        </div>
        <div className="col-12">
          <h1 className="text-center text-Anton pt-5 pb-5">
            Descuentos Imperdibles
          </h1>
          <CatalogOferta />
        </div>
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
