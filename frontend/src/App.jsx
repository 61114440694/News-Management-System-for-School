import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Post_News from "./pages/create_post";
import Detail_Ativity from "./pages/detail_ativity";

import Admin from "./pages/Admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/home"  element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Post_News />} />
        <Route path="/detail/:id" element={<Detail_Ativity />} />
        <Route path="/serve-ad_min@" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
