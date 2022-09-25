import React from "react";
import { Route, Routes } from "react-router-dom";
import CampDetail from "./pages/CampDetail/CampDetail";
import Home from "./pages/Home/Home";
import Login from "./pages/Signup/Login";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/campdetail" element={<CampDetail />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
