import React from "react";
import { Routes, Route } from "react-router-dom";
import Plus from "../Plus/Plus";
import Heroes from "../Heroes/Heroes";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import HeroDetail from "../Heroes/HeroDetail/HeroDetail";
import TeamDetail from "../Teams/TeamDetail/TeamDetail";

const Router = ({ setActive }) => {
  return (
    <Routes>
      <Route path="/" element={<Home setActive={setActive} />} />
      <Route path="heroes" >
        <Route index={true} element={<Heroes setActive={setActive} />} />
        <Route path="herodetail" element={<HeroDetail />} />
      </Route>
      <Route path="teams"  >
      <Route index={true} element={<Teams setActive={setActive} />} />
        <Route path="teamdetail" element={<TeamDetail />} />
      </Route>
      <Route path="dotaplus" element={<Plus setActive={setActive} />} />
    </Routes>
  );
};

export default Router;
