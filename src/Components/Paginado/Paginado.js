import React from "react";
import "./Paginado.css";
export default function Paginado({
  setPaginaActual,
  nProductos,
  paginaActual,
}) {
  const numeroPagina = Array.from(
    { length: Math.ceil(nProductos / 2) },
    (v, i) => i + 1
  );

  return (
    <div>
      {numeroPagina.map((numero) => {
        return (
          <button
            className="btn btn-primary"
            disabled={paginaActual === numero}
            onClick={() => setPaginaActual(numero)}
          >
            {numero}
          </button>
        );
      })}
    </div>
  );
}
