import React, { useState } from "react";
import "./Catalogo.css";
import Cards from "../Cards/Cards.js";
import ProductosJson from "../../Util/Json/Productos.json";
import Paginado from "../Paginado/Paginado.js";

const Catalogo = () => {
  const Productos = ProductosJson;
  const [paginaActual, setPaginaActual] = useState(1);

  return (
    <div className="d-flex flex-wrap justify-content-center m-0">
      {Productos?.slice(
        (paginaActual - 1) * 2,
        Productos[paginaActual * 2] ? paginaActual * 2 : paginaActual * 4 - 1
      ).map((producto) => {
        return (
          <div className="col-auto p-2 bg-primary  ">
            <Cards key={producto.id} props={producto} />
            {console.log(producto)}
          </div>
        );
      })}
      {/* <div className="col-12 d-flex justify-content-center pt-3">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Atras</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Siguiente
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
      <Paginado
        setPaginaActual={setPaginaActual}
        nProductos={Productos.length}
        paginaActual={paginaActual}
      />
    </div>
  );
};

export default Catalogo;
