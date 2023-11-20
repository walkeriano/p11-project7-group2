import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
}
