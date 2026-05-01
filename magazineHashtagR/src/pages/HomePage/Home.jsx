import React from "react";
import CartOverlay from "../../components/Cart/CartOverlay";
import MainSection from "./MainSection";

function Home() {
  return (
    <>
      <CartOverlay />
      <MainSection />
    </>
  );
}

export default Home;
