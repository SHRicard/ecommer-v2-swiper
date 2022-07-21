import React from "react";
import "./Home.css";

import CaruselNovedades from "../CaruselNovedades/CaruselNovedades.js";
const Home = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 pb-5">
          <h1 className="text-center text-Anton pt-5 pb-3">Lanzamientos</h1>
          <CaruselNovedades />
        </div>
      </div>
    </div>
  );
};

export default Home;
