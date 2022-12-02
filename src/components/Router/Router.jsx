import React from "react";
import { Routes, Route } from "react-router-dom";
import Plus from "../Plus/Plus";
import Heroes from "../Heroes/Heroes";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";

const Router = ({setActive}) => {
  return <Routes>
  <Route path="/" element={<Home setActive={setActive} />} />
  <Route path="/heroes" element={<Heroes setActive={setActive} />} />
  <Route path="/teams" element={<Teams setActive={setActive} />} />
  <Route path="/dotaplus" element={<Plus setActive={setActive} />} />
</Routes>;
};

export default Router;
