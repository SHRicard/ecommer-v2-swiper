import React from "react";
import Logo from "../../Util/Img/Running.png";
import { Link } from "react-router-dom";

import "./Contacto.css";
const Contacto = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-12 text-center pt-2 pb-3  fs-1 text-Anton text-black">
          RUNNING DEPORTE <br />
        </div>

        <div className="col-12 col-lg-6 bg-black p-5">
          <img src={Logo} alt="running" className="img-fluid " />
        </div>
        <div className="col-12 col-lg-6 text-center text-Anton fs-2">
          <small className="text-dark">Contacto</small>
          <div className="row">
            <div className="col-6 fs-5">
              Llamada directa
              <br />
              <small>
                <i className="bi bi-telephone-forward-fill" />
                &nbsp;&nbsp; 1132716458
              </small>
            </div>
            <div className="col-6 fs-5">
              Link directos
              <br />
              <small>
                <i
                  className="bi bi-whatsapp text-dark text-whatsapp"
                  href="http://wa.me/541162067821"
                >
                  &nbsp;
                  <a
                    className="text-dark text-Anton "
                    href="http://wa.me/541162067821"
                  >
                    Runnig Deporte 1
                  </a>
                </i>
              </small>
              <br />
              <small>
                <i
                  className="bi bi-whatsapp text-dark text-whatsapp"
                  href="http://wa.me/541132716458"
                >
                  &nbsp;
                  <a
                    className="text-dark text-Anton "
                    href="http://wa.me/541132716458"
                  >
                    Runnig Deporte 2
                  </a>
                </i>
              </small>
            </div>
          </div>
          <div className="col pt-2">
            Correo Electronico
            <br />
            <small>
              <i class="bi bi-envelope-check">
                <small className="text-dark text-Anton atencion fs-5">
                  &nbsp;&nbsp;Running@deporte.com.ar
                </small>
              </i>
            </small>
          </div>
          <div className="col pt-5">
            <div className="row">
              <div className="col">
                <i className="bi bi-geo-alt-fill text-danger">
                  <Link to="/feriaKm28" className=" text-Anton text-dark">
                    <small>Feria Km28</small>
                  </Link>
                </i>
              </div>
              <div className="col">
                <i className="bi bi-geo-alt-fill text-danger">
                  <Link to="/feriaPekin" className=" text-Anton text-dark">
                    <small>Feria Pekin</small>
                  </Link>
                </i>
              </div>
              <div className="col">
                <i className="bi bi-geo-alt-fill text-danger">
                  <Link to="/entregas" className=" text-Anton text-dark">
                    <small>Entregas</small>
                  </Link>
                </i>
              </div>
            </div>
          </div>
          <div className="col p-5 bg-black d-flex justify-content-center   align-items-center ">
            <small className="text-white">Runnig Deporte</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
