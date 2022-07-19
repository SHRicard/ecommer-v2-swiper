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
    <div className="imgDetalle ">
      <img className="img-fluid" src={`/${zapa.img}`} alt="Logo" />
    </div>
  );

  return (
    <div className="container-fluid  color-detalle">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="ratio ratio-4x3 bg-dark">
            <img className="logo mx-3 p-3" src={`/${zapa.logo}`} alt="Logo" />

            {select}
          </div>
          <div className="row">
            {/* //stado inicial// */}
            <div className="col-3 bg-danger " role="button">
              <div class="ratio ratio-4x3 ">
                <img
                  onClick={() => {
                    setSelect(
                      <img
                        className="imgDetalle "
                        src={`/${zapa.img}`}
                        alt="Logo"
                      />
                    );
                  }}
                  className="img-detalle"
                  src={`/${zapa.img}`}
                  alt="Logo"
                />
              </div>
            </div>
            {/* //1// */}
            <div className="col-3 bg-success " role="button">
              <div class="ratio ratio-4x3">
                <img
                  onClick={() => {
                    setSelect(
                      <img
                        className="imgDetalle "
                        src={`/${zapa.frente}`}
                        alt="Logo"
                      />
                    );
                  }}
                  className="img-detalle"
                  src={`/${zapa.frente}`}
                  alt="Logo"
                />
              </div>
            </div>
            {/* //2// */}
            <div className="col-3 bg-primary" role="button">
              <div class="ratio ratio-4x3">
                <img
                  onClick={() => {
                    setSelect(
                      <img
                        className="imgDetalle "
                        src={`/${zapa.costado}`}
                        alt="Logo"
                      />
                    );
                  }}
                  className="img-detalle"
                  src={`/${zapa.costado}`}
                  alt="Logo"
                />
              </div>
            </div>
            {/* //3// */}
            <div className="col-3 bg-success" role="button">
              <div class="ratio ratio-4x3">
                <img
                  onClick={() => {
                    setSelect(
                      <img
                        className="imgDetalle "
                        src={`/${zapa.zuela}`}
                        alt="Logo"
                      />
                    );
                  }}
                  className="img-detalle"
                  src={`/${zapa.zuela}`}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 pt-3">
          <div className="row">
            <div className="col-12 text-center">
              <small className="text-Anton text-balck fs-5">
                Zapatilla&nbsp;&nbsp;
                <small className="text-Anton text-muted fs-5 ">
                  {zapa.modelo}
                </small>
              </small>
            </div>
            <div className="col-12 text-center ">
              <h1 className="text-Anton fs-1 ">{zapa.marca}</h1>
            </div>
            <div className="col-12">
              <div className="row text-center pt-3">
                <div className="col-6 text-end text-Anton  text-muted">
                  <small className="fs-2">{zapa.precio}</small>
                </div>
                <div className="col-6 ">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-dark text-Anton  text-light"
                      type="button"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row text-center">
                <small className="col-12  text-Anton ">
                  Talles Disponibles
                </small>
                <small className="col-12  text-Anton  text-muted">
                  {zapa.talles.map((talle) => {
                    return <small>&nbsp;&nbsp;&nbsp;{talle}</small>;
                  })}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
