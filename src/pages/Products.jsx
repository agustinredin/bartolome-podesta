import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Container from "../components/ui/Container";
import ProductList from "../lib/ProductList";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <Container className="w-[85vw] max-w-screen-xl">
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-5xl font-bold pb-5">Productos</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
          {ProductList.map((product) => (
            <ProductCard {...product}></ProductCard>
          ))}
        </div>
        <div className="lg:w-1/4 lg:h-fit rounded-lg">
          <h2 className="text-3xl font-semibold mb-5">Consultas</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              label="Nombre"
              placeholder="NOMBRE COMPLETO"
              required
            />
            <input
              type="email"
              label="Correo Electrónico"
              placeholder="EMAIL"
              required
            />
            <input
              type="tel"
              label="Telefono"
              placeholder="TELÉFONO"
              required
            />
            <textarea label="Mensaje" placeholder="MENSAJE" required />
            <Button
              className="cursor-pointer transition bg-blue hover:bg-lblue"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Products;
