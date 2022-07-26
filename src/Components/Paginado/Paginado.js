import React from "react";
const Paginado = (props) => {
  const productos = props.productos.return(
    <div>
      <h2>pagina : {props.currentPage}</h2>
      <button onClick={props.prevHandler}>prev</button>
      <button onClick={props.nextHandler}>next</button>
      {productos}
    </div>
  );
};

export default Paginado;
