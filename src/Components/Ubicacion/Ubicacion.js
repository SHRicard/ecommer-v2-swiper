import React from "react";
import axios from "axios";
import "./Ubicacion.css";
import FeriaPekin from "../FeriaPekin/FeriaPekin.js";
import FeriaKm28 from "../FeriaKm28/FeriaKm28.js";
import Entregas from "../Entregas/Entregas.js";
const iniciar = axios.get(
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"
);

const Ubicacion = () => {
  return (
    <div className="container-fluid p-0 m-0 bg-warning">
      <div className="row">
        <div className="col-12  pt-3 pb-3 text-center  ">
          <span className="text-black   text-Anton fs-2">Ubicacion</span>
        </div>
        <div className="col-12 pt-3 pb-3 text-center ">
          <FeriaPekin />
        </div>

        <div className="col-12 pt-3 pb-3 text-center ">
          <FeriaKm28 />
        </div>
        <div className="col-12 pt-3 pb-3 text-center ">
          <Entregas />
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
