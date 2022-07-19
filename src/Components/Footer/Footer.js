import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="">
      <div className="row bg-black pb-3 pt-3 mx-0">
        <div className="col-md-12 text-center  col-lg-4 mx-2 pb-5">
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
            className="bi bi-whatsapp text-muted text-whatsapp"
            href="http://wa.me/541162067821"
          >
            &nbsp;
            <a
              className="text-muted text-Anton "
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
              className="text-muted text-Anton "
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
            2018 - 2022 © Todos los derechos Reservados
            <br />
            www.runningdeporte.com.ar
            <br />
            TODOS LOS DERECHOS RESERVADOS.
            <br /> Las fotos contenidas en este sito y el logotipo son propiedad
            de <br />
            www.runningdeporte.com.ar
            <br />
            Está prohibida la reproducción total o parcial
          </small>
        </div>
        <div className="col-md-12 text-center  col-lg">
          <small className="text-muted text-Anton fs-5">Punto de ventas</small>
          <br />
          <i className="bi bi-geo-alt-fill text-danger">
            <Link to="/feriaKm28" className=" text-Anton text-muted">
              <small>Feria Km28</small>
            </Link>
          </i>
          <br />
          <i className="bi bi-geo-alt-fill text-danger">
            <Link to="/feriaPekin" className=" text-Anton text-muted">
              <small>Feria Pekin</small>
            </Link>
          </i>
          <br />

          <i className="bi bi-geo-alt-fill text-danger">
            <Link to="/entregas" className=" text-Anton text-muted">
              <small>Entregas</small>
            </Link>
          </i>
          <br />
          <br />

          <Link to="/termino" className=" Terminos text-Anton text-muted pb-5">
            Terminos y Condiciones
          </Link>
        </div>
        <div className="row text-center">
          <small className="text-Anton text-muted mx-1">Seguinos en</small>
          <div className="col-6 text-end">
            <i class="bi bi-facebook"></i>
          </div>
          <div className="col-6 text-start">
            <i class="bi bi-instagram"></i>
          </div>
          <div className="col-12 text-start text-muted text-center text-Anton">
            Running Depporte
          </div>
          <div className="col-12 text-start text-muted text-center text-Anton RRamirez d-flex justify-content-center align-items-center">
            Desarrollador RRamirez
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
