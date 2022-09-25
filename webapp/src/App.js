import React from "react";
import { Route, Routes } from "react-router-dom";
import CampDetail from "./pages/CampDetail/CampDetail";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Signup/Login";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/campdetail" element={<CampDetail />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
