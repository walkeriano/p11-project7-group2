import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import InfoRecipesPage from "./pages/InfoRecipes/InfoRecipesPage";
import AccesPage from "./pages/AccesSesion/AccesPage";
import DetailContinentPage from "./pages/DetailContinent/DetailContinentPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile-page" element={<ProfilePage/>} />
      <Route path="/acces-sesion" element={<AccesPage/>} />
      <Route path="/detalles-recetas/:id" element={<InfoRecipesPage/>} />
      <Route path="/continentes" element={<DetailContinentPage/>} />
    </Routes>
  );
}