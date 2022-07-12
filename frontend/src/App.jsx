import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Post_News from "./pages/create_post";
import Detail_Ativity from "./pages/detail_ativity";

import Admin from "./pages/admin";
import Error from "./pages/error";
import SelectType from "./pages/select_type";
import Mypost from "./pages/post_me";
import Edit from "./pages/edit_post";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<SelectType />} />
        <Route path="/home/:id" element={<SelectType />} />
        <Route path="/post_me" element={<Mypost />} />
        <Route path="home/post_me" element={<Mypost />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Post_News />} />
        <Route path="/detail" element={<Detail_Ativity />} />
        <Route path="/serve-ad_min@" element={<Admin />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
