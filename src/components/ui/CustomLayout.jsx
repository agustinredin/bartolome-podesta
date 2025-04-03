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
      <Container className="flex">
        <Outlet />
        <AsideContact />
      </Container>
    </>
  ) : (
    <Outlet />
  );
};

export default Layout;
