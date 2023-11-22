import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import InfoRecipes from "./pages/InfoRecipes/InfoRecipesPage";
import Acces from "./pages/Acces/AccesPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/acces" element={<Acces/>} />
      <Route path="/detalles-recetas/:id" element={<InfoRecipes/>} />
    </Routes>
  );
}
