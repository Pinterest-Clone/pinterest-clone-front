import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
