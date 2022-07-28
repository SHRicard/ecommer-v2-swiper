import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Productos from "../../Util/Json/Productos.json";
import "./Detalle.css";

const Detalle = () => {
  const params = useParams();
  const zapa = Productos.find(
    (novedades) => novedades.id === Number(params.zapaId)
  );
  const [img, setImg] = useState(
    <div className="imgDetalle ">
      <img className="img-fluid" src={`/${zapa.frente}`} alt="Logo" />
    </div>
  );
  const [elegido, setElegido] = useState(null);

  const handleChange = (e) => {
    setElegido(Number(e.target.value));
  };

  return (
    <div className="container-fluid color-detalle">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-10">
              <div className="ratio ratio-4x3">
                <img
                  className="logo img-fluid"
                  src={`/${zapa.logo}`}
                  alt="Logo"
                />
                {img}
              </div>
            </div>
            <div className="col-2  pt-5">
              {/* //stado inicial// */}
              <div role="button">
                <div class="ratio ratio-4x3 ">
                  <img
                    onClick={() => {
                      setImg(
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
              <div role="button">
                <div class="ratio ratio-4x3">
                  <img
                    onClick={() => {
                      setImg(
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
              <div role="button">
                <div class="ratio ratio-4x3">
                  <img
                    onClick={() => {
                      setImg(
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
              <div role="button">
                <div class="ratio ratio-4x3">
                  <img
                    onClick={() => {
                      setImg(
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
        </div>
        <div className="col-md-4 bg-warning">
          <div className="row">
            <div className="col-12 pt-3 text-center">
              <small className="col-12 fs-4 text-Anton ">
                Zapatilla
                <small className="text-light text-Anton fs-4">
                  &nbsp;&nbsp;{zapa.modelo}
                </small>
              </small>
            </div>
            <div className="col-12 text-center">
              <small className="text-muted text-Anton fs-1">{zapa.marca}</small>
            </div>
            <div className="col-12 text-center">
              <small className="text-Anton fs-5 ">Description </small>
              <br />
              <small className="text-Anton">
                {zapa.description}
                .&nbsp;
                {zapa.img_producto}
              </small>
              <br />

              <small className="text-muted text-Anton fs-6">
                Tipo de Producto
              </small>
              <br />
              <small className="text-dark text-Anton">
                {zapa.tipo_producto}
              </small>
              <br />
              <small className="text-muted text-Anton fs-6">
                Origen &nbsp;:&nbsp;&nbsp;
                <small className="text-dark text-Anton fs-6">
                  {zapa.origen}
                </small>
              </small>
            </div>
            <div className="col-12 text-center pt-3">
              <small className="text-Anton  fs-4 ">Talles Disponibles</small>
              <br />
              <small className="text-Anton text-muted">
                seleccioná tu talle
              </small>
              <br />
              <small className=" fs-6 text-Anton text-light ">
                {zapa.talles.map((talle) => {
                  return (
                    <small>
                      &nbsp;
                      <button
                        type="button"
                        class="btn btn-dark"
                        onClick={handleChange}
                        value={talle}
                      >
                        {talle}
                      </button>
                      &nbsp;
                    </small>
                  );
                })}
              </small>
              <br />
              <br />
              <small className=" fs-6 text-Anton text-dark">
                Talle Elejido
              </small>
              <br />
              <small className=" fs-6 text-Anton text-dark text-white">
                {elegido}
              </small>
            </div>
            <div className="col-12 text-center pt-3">
              <small className="pt-3 text-center text-Anton fs-3">
                {zapa.precio}
              </small>
            </div>
            <div className="pt-3 text-center d-grid gap-2 pb-3">
              {elegido ? (
                <button
                  type="button"
                  className="pedido btn btn-dark text-Anton  btn-sm  .text-wrap"
                >
                  <a
                    href={`http://wa.me/541132716458?text=Hola%20estoy%20interesado%20en%20este%20modelo%20${zapa.modelo}%20talle%20${elegido}%20muchas%20gracias`}
                  >
                    Enviar Pedido
                  </a>
                </button>
              ) : (
                <button
                  type="button"
                  className="pedido btn btn-dark text-Anton  btn-sm  .text-wrap"
                >
                  <a
                    href={`http://wa.me/541132716458?text=Hola%20estoy%20interesado%20en%20este%20modelo%20${zapa.modelo}%20talle%20${elegido}%20muchas%20gracias`}
                  >
                    Enviar Pedido
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
