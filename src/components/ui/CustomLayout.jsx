import { Outlet, useLocation } from "react-router";
import React from "react";
import Contact from "../../pages/Contact";
import AsideContact from "../AsideContact";
import Container from "./Container";

const Layout = () => {
  const location = useLocation();
  const isProductPage = location.pathname.includes("/product");
  return isProductPage ? (
    <>
      <Container className="flex !max-w-screen-xl w-[95vw]">
        <Outlet />
        <AsideContact />
      </Container>
    </>
  ) : (
    <Outlet />
  );
};

export default Layout;
