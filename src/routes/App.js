import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Somos from "../containers/Somos";
import Contacto from "../containers/Contacto";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Productos from "../containers/Productos";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exat path="/" element={<Home />}></Route>
          <Route exat path="/somos" element={<Somos />}></Route>
          <Route exat path="/contacto" element={<Contacto />}></Route>
          <Route exat path="/productos" element={<Productos />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
