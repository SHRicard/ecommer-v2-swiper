import React from "react";
import "./Menu.css";
import Running from "../../Util/Img/Png/Running.png";

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              className="running mx-2 img-fluid"
              src={Running}
              alt="running"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav ms-auto  mb-2 mb-lg-0 text-center
      text-Anton "
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Zapatilla
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ubicación
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
