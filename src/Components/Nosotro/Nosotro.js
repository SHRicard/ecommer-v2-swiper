import React from "react";
import RunningDeporte from "./RunningDeporteMas.png";
import TerminosCondiciones from "../TerminosCondiciones/TerminosCondiciones.js";
import "./Nosotro.css";
const Nosotro = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-Anton text-black fs-2 pt-3">
          Running Deporte
        </div>
        <div className="col-12 col-lg-6 pb-3 d-flex text-center align-items-center text-Anton text-black ">
          Running Deporte es mas que una tienda online, <br />
          Es un equipo que trabajo que todo los dias busca la manera de ofrecer
          <br />
          la mejor atencion , productos y precio a los cliente Running Deporte
          inicio con la idea de ofrecer <br />
          productos de buena calidad a un buen precio. <br />
          Trabajamos con muchas marcas líderes, pero al pasar
          <br /> el tiempo esas marcas líderes empezaron a aumentar sus costos
          <br /> y en Running Deporte decidimos optar por una opc más económica
          pero mantener un producto de excelente calidad. En este tiempo
          <br />
          trascurrido hemos trabajado mucho para ofrecer la mejor atención y
          <br />
          productos por ese motivo todo el equipo de <br />
          Running Deporte te da las Gracias por seguir eligiendonos.
        </div>
        <div className="col-12 col-lg-6  pb-2 ">
          <img src={RunningDeporte} alt="running" className="img-fluid" />
        </div>
        <div>
          <TerminosCondiciones />
        </div>
      </div>
    </div>
  );
};

export default Nosotro;
