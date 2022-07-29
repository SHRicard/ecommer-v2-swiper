import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-black pb-3 pt-3 ">
        <div className="col-md-12 text-center  col-lg-4 pb-5">
          <small className="text-muted text-Anton text-white fs-5">
            Centro de Atención al Cliente
          </small>
          <br />
          <br />
          <small className="text-muted text-Anton text-white atencion fs-6">
            Lunes a Viernes de 9 a 20 hs / Sábado de 9 a 17 hs
          </small>
          <br />
          <i class="bi bi-envelope-fill text-muted">
            <small className="text-muted text-Anton atencion fs-6">
              &nbsp;&nbsp;Running@deporte.com.ar
            </small>
          </i>
          <br />
          <i
            className="   bi bi-whatsapp text-muted text-whatsapp"
            href="http://wa.me/541162067821"
          >
            &nbsp;
            <a
              className="text-Terminos text-muted text-Anton "
              href="http://wa.me/541162067821"
            >
              Runnig Deporte 1
            </a>
          </i>
          <br />
          <i
            className="bi bi-whatsapp text-muted text-whatsapp"
            href="http://wa.me/541162067821"
          >
            &nbsp;
            <a
              className="text-Terminos text-muted text-Anton "
              href="http://wa.me/541132716458"
            >
              Runnig Deporte 2
            </a>
          </i>
          <br />
          <i className="bi bi-headset text-muted text-Anton ">
            &nbsp;1132716458
          </i>
          <br />
          <i className="bi bi-headset text-muted text-Anton ">
            &nbsp;1162067821
          </i>
        </div>
        <div className="col-md-12 text-center  col-lg-4 text-center d-flex justify-content-center align-items-center pb-5">
          <small className="text-Anton text-muted">
            2019 - 2022 © Todos los derechos Reservados
            <br />
            www.runningdeporte.com.ar
            <br />
            TODOS LOS DERECHOS RESERVADOS.
            <br /> Las fotos contenidas en este sito y el logotipo <br />
            son propiedad de <br />
            www.runningdeporte.com.ar
            <br />
            Está prohibida la reproducción total o parcial
          </small>
        </div>
        <div className="col-md-12 text-center  col-lg">
          <small className="text-muted text-Anton fs-5">Punto de ventas</small>
          <br />
          <i className="bi bi-geo-alt-fill text-danger">
            <Link
              to="/feriaKm28"
              className=" text-Terminos text-Anton text-muted"
            >
              <small>Feria Km28</small>
            </Link>
          </i>
          <br />
          <i className="bi bi-geo-alt-fill text-danger">
            <Link
              to="/feriaPekin"
              className=" text-Terminos text-Anton text-muted"
            >
              <small>Feria Pekin</small>
            </Link>
          </i>
          <br />

          <i className="bi bi-geo-alt-fill text-danger">
            <Link
              to="/entregas"
              className=" text-Terminos text-Anton text-muted"
            >
              <small>Entregas</small>
            </Link>
          </i>
          <br />
          <br />

          <Link
            to="/termino"
            className=" text-Terminos  text-Anton text-muted pb-5"
          >
            Terminos y Condiciones
          </Link>

          <div className="col-12 text-center">
            <small className="text-Anton text-muted">Seguinos en</small>
            <br />
            <a href="https://www.facebook.com/mijael.ramirez.3914">
              <i class="bi bi-facebook"></i>
            </a>
            &nbsp;&nbsp;
            <i class="bi bi-instagram"></i>
          </div>
        </div>
        <div className="col-12 text-center">
          <small className="text-start text-muted text-center text-Anton">
            Running Depporte
          </small>
          <br />
          <small className="text-start text-muted text-center text-Anton">
            Desarrollador RRamirez
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
