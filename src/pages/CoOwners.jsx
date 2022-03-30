import React from "react";
import TableCoOwners from "../components/Co-owners/TableCoOwners";
import Header from "../components/Home/Header";
import LateralMenu from "../components/Home/LateralMenu";

const CoOwners = () => {
  return (
    <>
      <Header />
      <LateralMenu />
      <TableCoOwners />
    </>
  )
}

export default CoOwners;