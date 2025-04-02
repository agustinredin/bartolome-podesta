import React from "react";
import Container from "../components/ui/Container";
import ProductList from "../lib/ProductList";

const Products = () => {
  //challenge: hacer el map con ProductCard (/components/ProductCard.jsx) y hacer un mini form de contacto. EXACTAMENTE como https://tienda.euroswiss.com.ar/catalogo
  return (
    <div className="min-w-full flex flex-col lg:flex-row justify-between">
      <Container>
        <div className="flex flex-col">
          <h1 className="text-2xl lg:text-5xl">Productos</h1>
        </div>
        <div className="flex xs:max-lg:flex-col flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ProductList.map((product)=> (<div className="col-auto">{product.title}</div>))}
          </div>
          <div className="flex-1/3">
            aca va el contacto
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
