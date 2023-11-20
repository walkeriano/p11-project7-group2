import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile-page" element={<ProfilePage/>} />
    </Routes>
  );
}
