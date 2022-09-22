import React from "react";
import NavBar from "../../components/NavBar/NavBar.js"
import Footer from "../../components/Footer/Footer.js"
import Recommended from "../../components/Recommended/Recommended.js";

function Home() {
  return (
    <>
      <NavBar />
      <Recommended/>
      <Footer />
    </>
  );
}

export default Home;
