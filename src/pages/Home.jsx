import React from "react";
import Content from "../components/Home/Content";
import Header from "../components/Home/Header";
import LateralMenu from "../components/Home/LateralMenu";

const Home = () => {
  return (
    <>
      <Header />
      <LateralMenu />
      <Content /> 
    </>
  )
}

export default Home;