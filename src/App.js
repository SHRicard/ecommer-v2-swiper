import React from "react";
import "./App.css";
import Home from "./Components/Home/Home.js";
import Menu from "./Components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Menu />}></Route>
          <Route path="/outle" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
