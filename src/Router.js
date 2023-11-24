import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";

import ProfilePage from "./pages/Profile/ProfilePage";

import InfoRecipes from "./pages/InfoRecipes/InfoRecipesPage";
import Acces from "./pages/Acces/AccesPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile-page" element={<ProfilePage/>} />
      <Route path="/acces" element={<Acces/>} />
      <Route path="/detalles-recetas/:id" element={<InfoRecipes/>} />
    </Routes>
  );
}