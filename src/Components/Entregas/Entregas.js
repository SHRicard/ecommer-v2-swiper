import React from "react";
import "./Entregas.css";
const Entregas = () => {
  return (
    <div className="row pb-3 pt-3 bg-warning m-0">
      <div className="col-12 col-lg-6  text-center">
        <small className="text-black text-Anton fs-5 ">Puento de Entrega</small>
        <p className="text-muted text-Anton ">
          Aparte de realizar envio a domicilio tambien realizamos entrega
          <br />
          todo los dias en la colectora de Juan Manuel de Rosas entre <br />
          Las Flores y Leonardo da Vinci.
          <br />
          En Juan Manuel de Rosas Al 12617 <br />o tambien conocido como ruta 3
          <br />
          <small className="text-success fs-6">
            &nbsp; Al frente del La Maderera Ruff.
          </small>
        </p>
      </div>

      <div className="col-12 col-lg-5 d-flex justify-content-center pt-1 pb-1 mapBg">
        <iframe
          className="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.2621112161346!2d-58.61484698530767!3d-34.748989572705106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc445f48e4547%3A0xa32f1f37731a0c1b!2sAv.%20Brig.%20Gral.%20Juan%20Manuel%20de%20Rosas%2012617%2C%20Gregorio%20de%20Laferrere%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1656884783092!5m2!1ses!2sar"
        ></iframe>
      </div>
    </div>
  );
};

export default Entregas;
