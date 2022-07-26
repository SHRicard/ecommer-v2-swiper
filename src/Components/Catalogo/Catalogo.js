import React, { useState } from "react";
import Cards from "../Cards/Cards.js";
import ProductosJson from "../../Util/Json/Productos.json";
// import FiltroSelect from "../Filtros/FiltroSelect.js";
import "./Catalogo.css";

const Catalogo = () => {
  const productos = ProductosJson;
  const [paginaActual, setPaginaActual] = useState(1);
  const nPaginas = productos.length / 4;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-warning"></div>
        {/* <div className="col-6 bg-warning">
          <div className="d-flex justify-content-center pt-2 bg-warning">
            <nav role="button" aria-label="Page navigation example bg-warning">
              <ul className="pagination">
                <li className={`page-item ${paginaActual === 1 && "disabled"}`}>
                  <span
                    className="page-link"
                    onClick={() => setPaginaActual(paginaActual - 1)}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </span>
                </li>
                {paginaActual - 1 >= 1 && (
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => setPaginaActual(paginaActual - 1)}
                    >
                      {paginaActual - 1}
                    </span>
                  </li>
                )}
                <li className="page-item disabled">
                  <span className="page-link">{paginaActual}</span>
                </li>
                {paginaActual < nPaginas && (
                  <li className="page-item">
                    <span
                      className="page-link"
                      onClick={() => setPaginaActual(paginaActual + 1)}
                    >
                      {paginaActual + 1}
                    </span>
                  </li>
                )}
                <li
                  className={`page-item ${
                    paginaActual >= nPaginas && "disabled"
                  }`}
                >
                  <span
                    className="page-link"
                    onClick={() => setPaginaActual(paginaActual + 1)}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
        <div className="d-flex flex-wrap justify-content-center m-0 p-2 bg-warning">
          {productos
            .slice((paginaActual - 1) * 4, paginaActual * 4)
            .map((producto) => {
              return (
                <div className="col-auto p-2 bg-warning  ">
                  <Cards key={producto.id} props={producto} />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-center pt-2 bg-warning">
          <nav role="button" aria-label="Page navigation example bg-warning">
            <ul className="pagination">
              <li className={`page-item ${paginaActual === 1 && "disabled"}`}>
                <span
                  className="page-link"
                  onClick={() => setPaginaActual(paginaActual - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </span>
              </li>
              {paginaActual - 1 >= 1 && (
                <li className="page-item">
                  <span
                    className="page-link"
                    onClick={() => setPaginaActual(paginaActual - 1)}
                  >
                    {paginaActual - 1}
                  </span>
                </li>
              )}
              <li className="page-item disabled">
                <span className="page-link">{paginaActual}</span>
              </li>
              {paginaActual < nPaginas && (
                <li className="page-item">
                  <span
                    className="page-link"
                    onClick={() => setPaginaActual(paginaActual + 1)}
                  >
                    {paginaActual + 1}
                  </span>
                </li>
              )}
              <li
                className={`page-item ${
                  paginaActual >= nPaginas && "disabled"
                }`}
              >
                <span
                  className="page-link"
                  onClick={() => setPaginaActual(paginaActual + 1)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
