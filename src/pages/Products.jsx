import React from "react";
import Container from "../components/ui/Container";
import ProductList from "../lib/ProductList";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const ids = new Set(ProductList.map(i => i.id))
  const uniqueProducts = Array.from(ids).map((id) => {
    return ProductList.find((product) => product.id === id);
  });
  return (
    <Container className="w-[85vw] max-w-screen-xl">
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-5xl pl-5 font-bold pb-5 text-green">
          Productos
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {uniqueProducts.map((product) => {
            return <ProductCard key={product.id} {...product}></ProductCard>;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Products;
