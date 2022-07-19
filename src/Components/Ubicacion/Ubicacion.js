import React from "react";
import axios from "axios";
import "./Ubicacion.css";

const iniciar = axios.get(
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"
);

// function iniciarMap() {
//   var coord = { lat: -34.5956145, lng: -58.4431949 };
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: coord,
//   });
//   var marker = new google.maps.Marker({
//     position: coord,
//     map: map,
//   });
// }

const Ubicacion = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12  pt-3 mx-5 ">
          <span className="text-black  text-Anton fs-2">Ubicacion</span>
        </div>
        <div className="row pb-3">
          <div className="col-12 col-lg-6  text-center">
            <small className="text-black text-Anton fs-5 ">Feria Pekin</small>
            <p className="text-muted text-Anton ">
              En la feria de Pekin nos podras encontrar desde las
              <small className="text-success">&nbsp;6:00Am &nbsp;</small>hasta
              las
              <small className="text-success">&nbsp;15:00Pm&nbsp;</small>.<br />
              Los dias sabados podras encontrar gran variedad de modelos, <br />
              colores y talle de zapatillas. <br />
              Nosotro estamos a pasos del inicio de la feria entre Londres y
              Canadá sobre
              <small className="text-success ">
                &nbsp;" Pekín 3475 "&nbsp;
              </small>
            </p>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center pt-1 pb-1 mapBg">
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
        <div className="row pb-3">
          <div className="col-12 col-lg-6  text-center">
            <small className="text-black text-Anton fs-5 ">Feria Km28</small>
            <p className="text-muted text-Anton ">
              En la feria de Km28 o tambien conocida como la feria de calderon
              nos podras encontrar desde las
              <small className="text-success">&nbsp;8:00Am &nbsp;</small>hasta
              las
              <small className="text-success">&nbsp;15:00Pm&nbsp;</small>.<br />
              Los dias Domingos podras encontrar gran variedad de modelos,
              <br />
              colores y talle de zapatillas. <br />
              Nosotro estamos ubicados sobre Int. Federico Pedro Russo 4194
              ,Estamos entre Celestino Vidal y Icalma
              <small className="text-success ">
                &nbsp;" Int. Federico Pedro Russo 4194 "&nbsp;
              </small>
            </p>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center pt-1 pb-1 mapBg">
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
        <div className="row pb-3">
          <div className="col-12 col-lg-6  text-center">
            <small className="text-black text-Anton fs-5 ">
              Puento de Entrega
            </small>
            <p className="text-muted text-Anton ">
              Aparte de realizar envio a domicilio tambien realizamos entrega
              <br />
              todo los dias en la colectora de Juan Manuel de Rosas entre <br />
              Las Flores y Leonardo da Vinci.
              <br />
              En Juan Manuel de Rosas Al 12617 <br />o tambien conocido como
              ruta 3<br />
              <small className="text-success fs-6">
                &nbsp; Al frente del La Maderera Ruff.
              </small>
            </p>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center pt-1 pb-1 mapBg">
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
        {console.log(iniciar)}
      </div>
    </div>
  );
};

export default Ubicacion;
