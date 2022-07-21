import React from "react";
import "./Menu.css";
import Envio from "../Envio/Envio.js";
import Footer from "../Footer/Footer.js";
import Running from "../../Util/Img/Running.png";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container-fluid mx-0">
      <Envio />
      <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img className="running img-fluid" src={Running} alt="running" />
          </Link>
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
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/zapatilla" className="nav-link">
                  Zapatilla
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/outlet" className="nav-link">
                  Outlet
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ubicacion" className="nav-link">
                  Ubicación
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sobreNosotros" className="nav-link">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
