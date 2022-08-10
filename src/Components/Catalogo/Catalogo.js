import React, { useState, useEffect } from "react";
import Cards from "../Cards/Cards.js";
import ProductosJson from "../../Util/Json/Productos.json";
import "./Catalogo.css";

const Catalogo = () => {
  const productos = ProductosJson;
  const Talles = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  ////stados/////
  const [paginaActual, setPaginaActual] = useState(1);
  const [select, setSelect] = useState(0);
  const [result, setResult] = useState([]);
  const [nPaginas, setNPaginas] = useState(1);
  /////variables/////
  // const nPaginas = productos.length / 4;

  const productoActual = (e) => {
    setSelect(Number(e.target.value));
  };

  useEffect(() => {
    ///filtrado////

    if (!select) {
      setResult(productos.slice((paginaActual - 1) * 4, paginaActual * 4));
      setNPaginas(productos.length / 4);
    } else {
      let totalResultado = productos.filter((producto) => {
        return producto.talles.includes(select);
      });
      setResult(totalResultado.slice((paginaActual - 1) * 4, paginaActual * 4));
      setNPaginas(totalResultado.length / 4);
    }
  }, [select, paginaActual]);

  useEffect(() => {
    ///filtrado////
    setPaginaActual(1);
  }, [select]);
  const filterReset = () => {
    setSelect(0);
  };
  const changePage = (number) => {
    window.scrollTo(0, 0);
    setPaginaActual(number);
  };

  return (
    <div className="container-fluid bg-warning">
      <div className="row pt-3">
        <div className="col-12 ">
          <div className="row">
            <div className="col-sm-12 text-center pt-2 col-md-4  text-dark  text-Anton  text-end">
              <small className="fs-5">Filtro de Talle&nbsp;&nbsp;&nbsp;</small>
            </div>
            <div className="col-sm-12 text-center pt-2 col-md-4">
              <select
                className="form-select form-select-sm   text-dark  text-Anton"
                aria-label=".form-select-sm example"
                value={select}
                onChange={productoActual}
              >
                <option selected>Elige el Talle</option>
                {Talles.map((talle) => {
                  return (
                    <option className="text-dark  text-Anton  " value={talle}>
                      {talle}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-12 text-center pt-2 col-md-4   text-white  text-Anton  text-center">
              <button
                onClick={filterReset}
                type="button"
                className="btn btn-dark btn-sm"
              >
                Reset Filtro
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center pt-2 ">
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

        <div className="d-flex flex-wrap justify-content-center m-0 p-2 ">
          {result.map((producto) => {
            return (
              <div className="col-auto p-2   ">
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
                  onClick={() => changePage(paginaActual - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </span>
              </li>
              {paginaActual - 1 >= 1 && (
                <li className="page-item">
                  <span
                    className="page-link"
                    onClick={() => changePage(paginaActual - 1)}
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
                    onClick={() => changePage(paginaActual + 1)}
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
                  onClick={() => changePage(paginaActual + 1)}
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
