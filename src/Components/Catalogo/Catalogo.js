import React from "react";
import "./Catalogo.css";
import Cards from "../Cards/Cards.js";
import ProductosJson from "../../Util/Json/Productos.json";
const Catalogo = () => {
  const Productos = ProductosJson;
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {Productos.map((producto) => {
        return (
          <div className="col-auto p-2 bg-primary  ">
            <Cards key={producto.id} props={producto} />
          </div>
        );
      })}
    </div>
  );
};

export default Catalogo;
