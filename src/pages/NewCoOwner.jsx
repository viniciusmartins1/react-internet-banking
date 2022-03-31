import React from "react";
import FormNewCoOwner from "../components/Forms/FormNewCoOwner";
import Header from "../components/Home/Header";
import LateralMenu from "../components/Home/LateralMenu";

const NewCoOwner = () => {
  return (
    <>
      <Header />
      <LateralMenu />
      <FormNewCoOwner />
    </>
  )
}

export default NewCoOwner;