import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ProductList from "../lib/ProductList";
import Container from "./ui/Container";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [found, setFound] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      let product = ProductList.find((i) => i.id == id);
      if (product) setProduct(product);
      else setFound(false);
    }, 2000);
  });

  return product && found ? (
    <Container className="!my-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-[var(--color-white)] rounded-xl shadow-lg">
          <img
            src={`/products/${product.id}.jpg`}
            alt={product.title}
            className="w-full  object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6 pr-4">
          <div className="xs:max-lg:text-center">
            <h1 className="text-3xl font-bold mb-2">
              {product.title}
            </h1>
            <div className="mt-4 mb-6">
              <span className="text-lg bg-blue text-white px-2 py-1 rounded-lg">
                Covidien
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Descripción:
            </h3>
            <ul className="list-disc pl-6 space-y-3">
              {product.description
                .split(/\. (?=\D)/)
                .filter((item) => item.trim())
                .map((item, index) => (
                  <li
                    key={index}
                    className="text-[var(--color-black)/90] text-base"
                  >
                    {item.replace(/\.$/, "")}.
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  ) : (
    <Container className="h-64 flex items-center justify-center text-lg">
      {!found ? (
        <div>
          Producto {id} no encontrado. <Link to="/products" className="underline underline-offset-2">Volver</Link>
        </div>
      ) : (
        <Loader className="animate-spin" />
      )}
    </Container>
  );
}

export default ProductDetail;
