import React from "react";
import "./App.css";
import Home from "./Components/Home/Home.js";
import Menu from "./Components/Menu/Menu";
import Catalogo from "./Components/Catalogo/Catalogo.js";
import Outlet from "./Components/CatalogOutlet/CatalogOutlet.js";
import Ubicacion from "./Components/Ubicacion/Ubicacion.js";
import Nosotro from "./Components/Nosotro/Nosotro.js";
import Contacto from "./Components/Contacto/Contacto.js";
import TerminosCondiciones from "./Components/TerminosCondiciones/TerminosCondiciones.js";
import FeriaKm28 from "./Components/FeriaKm28/FeriaKm28.js";
import FeriaPekin from "./Components/FeriaPekin/FeriaPekin.js";
import Entregas from "./Components/Entregas/Entregas.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />}></Route>
          <Route path="outlet" element={<Outlet />}></Route>
          <Route path="zapatilla" element={<Catalogo />}></Route>
          <Route path="ubicacion" element={<Ubicacion />}></Route>
          <Route path="contacto" element={<Contacto />}></Route>
          <Route path="sobreNosotros" element={<Nosotro />}></Route>
          <Route path="termino" element={<TerminosCondiciones />}></Route>
          <Route path="feriaKm28" element={<FeriaKm28 />}></Route>
          <Route path="feriaPekin" element={<FeriaPekin />}></Route>
          <Route path="entregas" element={<Entregas />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
