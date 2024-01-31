import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

import Transport from "../pages/Transport";
import Accessories from "../pages/Accessories";
import Hotel from "../pages/Hotel";
import Meals from "../pages/Meals";
import Contact from "./Contact";
import Login from "../pages/Login";
import Home from "../pages/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/transport" element={<Transport />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
