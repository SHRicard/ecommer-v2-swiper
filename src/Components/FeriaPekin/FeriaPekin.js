import React from "react";
import "./FeriaPekin.css";
const FeriaPekin = () => {
  return (
    <div className="row pb-3 pt-3 bg-warning m-0">
      <div className="col-12 col-lg-6  text-center">
        <small className="text-black text-Anton fs-5 ">Feria Pekin</small>
        <p className="text-muted text-Anton ">
          En la feria de Pekin nos podras encontrar desde las <br />
          <small className="text-success">&nbsp;6:00Am &nbsp;</small>hasta las
          <small className="text-success">&nbsp;15:00Pm&nbsp;</small>.<br />
          Los dias sabados podras encontrar gran variedad de modelos, <br />
          colores y talle de zapatillas. <br />
          Nosotro estamos a pasos del inicio de la feria entre <br /> Londres y
          Canadá sobre
          <small className="text-success ">&nbsp;" Pekín 3475 "&nbsp;</small>
        </p>
      </div>

      <div className="col-12 col-lg-5 d-flex justify-content-center pt-1 pb-1 mapBg">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1639.981842179107!2d-58.5770711!3d-34.7060959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7f623c7fb9b%3A0xab8ab6591217be59!2sFeria%20pekin!5e0!3m2!1ses!2sar!4v1656878025972!5m2!1ses!2sar"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="maps"
        ></iframe>
      </div>
    </div>
  );
};

export default FeriaPekin;
