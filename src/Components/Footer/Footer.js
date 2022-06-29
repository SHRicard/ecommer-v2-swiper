import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="">
      <div className="row bg-black pb-3 pt-3">
        <div className="col-md-12 text-center  col-lg-4 mx-2 pb-5">
          <small className="text-muted text-Anton text-white fs-5">
            Centro de Atención al Cliente
          </small>
          <br />
          <br />
          <small className="text-muted text-Anton text-white atencion">
            Lunes a Viernes de 9 a 20 hs / Sábado de 9 a 17 hs
          </small>
          <br />
          <i class="bi bi-envelope-fill text-muted">
            <small className="text-muted text-Anton atencion">
              &nbsp;&nbsp;Running@deporte.com.ar
            </small>
          </i>
          <br />
          <i className="bi bi-whatsapp text-muted ">Link de WHASAPP</i>
          <br />
          <i className="bi bi-headset text-muted ">Telephone</i>
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
          <i className="bi bi-geo-alt-fill text-muted">
            <small className="text-Anton">Ubicacion 1</small>
          </i>
          <br />
          <i className="bi bi-geo-alt-fill text-muted">
            <small className="text-Anton">Ubicacion 2</small>
          </i>
          <br />
          <i className="bi bi-geo-alt-fill text-muted">
            <small className="text-Anton">Ubicacion 3</small>
          </i>
          <br />
          <br />
          <a className="text-Anton text-muted pb-5">Terminos y Condiciones</a>
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
