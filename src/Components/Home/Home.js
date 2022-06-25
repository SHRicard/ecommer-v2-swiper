import React from "react";
import "./Home.css";
import Menu from "../Menu/Menu.js";
import Envio from "../Envio/Envio.js";

import CaruselNovedades from "../CaruselNovedades/CaruselNovedades.js";
import CaruselOfetas from "../CaruselOfetas/CaruselOfetas.js";
import Footer from "../Footer/Footer.js";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Envio />
        </div>
        <div className="col-12">
          <Menu />
        </div>
        <div className="col-12">
          <h1 className="text-center text-Anton pt-3 pb-3">Lanzamientos</h1>
          <CaruselNovedades />
        </div>
        <div className="col-12">
          <h1 className="text-center text-Anton pt-3 pb-3">
            Descuentos Imperdibles
          </h1>
          <div className="row">
            <div className="col-6">
              <CaruselOfetas />
            </div>
            <div className="col-6">
              <h1>info de oferta</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
