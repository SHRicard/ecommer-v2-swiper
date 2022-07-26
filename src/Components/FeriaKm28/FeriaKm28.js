import React from "react";
import "./FeriaKm28.css";
const FeriaKm28 = () => {
  return (
    <div className="row pb-3 pt-3 bg-warning m-0">
      <div className="col-12 col-lg-6  text-center">
        <small className="text-black text-Anton fs-5 ">Feria Km28</small>
        <p className="text-muted text-Anton ">
          En la feria de Km28 o tambien conocida como la <br />
          feria de calderon nos podras encontrar desde las
          <small className="text-success">&nbsp;8:00Am &nbsp;</small>hasta las
          <small className="text-success">&nbsp;15:00Pm&nbsp;</small>.<br />
          Los dias Domingos podras encontrar gran variedad de modelos,
          <br />
          colores y talle de zapatillas. <br />
          Nosotro estamos ubicados sobre Int. Federico Pedro Russo 4194 ,
          <br />
          Estamos entre Celestino Vidal y Icalma
          <small className="text-success ">
            &nbsp;" Int. Federico Pedro Russo 4194 "&nbsp;
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.29648720232!2d-58.624375885307636!3d-34.748123472659046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc440303c2f8d%3A0x4d3040130901d9c!2sInt.%20Federico%20Pedro%20Russo%204194%2C%20Gonz%C3%A1lez%20Cat%C3%A1n%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1656883400744!5m2!1ses!2sar"
        ></iframe>
      </div>
    </div>
  );
};

export default FeriaKm28;
