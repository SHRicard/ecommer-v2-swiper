import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Productos from "../../Util/Json/Productos.json";
import "./Detalle.css";

const Detalle = () => {
  const params = useParams();
  const zapa = Productos.find(
    (novedades) => novedades.id === Number(params.zapaId)
  );
  const [select, setSelect] = useState(
    <img className="imgDetalle" src={`/${zapa.img}`} alt="Logo" />
  );

  return (
    <div className="container pt-5">
      <div className="row ">
        <div className="col-6 ">
          {select}
          <div className="row">
            <div className="col-6 d-flex justify-content-around mx-5">
              <img
                onClick={() => {
                  setSelect(
                    <img
                      className=" main-images "
                      src={`/${zapa.img}`}
                      alt="Logo"
                    />
                  );
                }}
                className="img-detalle"
                src={`/${zapa.img}`}
                alt="Logo"
              />
              <img
                onClick={() => {
                  setSelect(
                    <img
                      className="img-fluid"
                      src={`/${zapa.img2}`}
                      alt="Logo"
                    />
                  );
                }}
                className="img-detalle"
                src={`/${zapa.img2}`}
                alt="Logo"
              />
              <img
                onClick={() => {
                  setSelect(
                    <img
                      className="img-fluid"
                      src={`/${zapa.img3}`}
                      alt="Logo"
                    />
                  );
                }}
                className="img-detalle"
                src={`/${zapa.img3}`}
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <img className="logo-detalle" src={`/${zapa.logo}`} alt="logo" />
        </div>
        {/* ////info /// */}
      </div>
    </div>
  );
};

export default Detalle;
