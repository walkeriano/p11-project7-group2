import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import InfoRecipes from "./pages/InfoRecipes/InfoRecipesPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detalles-recetas/:id" element={<InfoRecipes/>} />
    </Routes>
  );
}
