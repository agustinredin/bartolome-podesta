import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ProductList from "../lib/ProductList";
import Container from "./ui/Container";
import Button from './ui/Button'

function ProductDetail() {
  const { id } = useParams();
  const [productArray, setProduct] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [found, setFound] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      let productArray = ProductList.filter((i) => i.id == id);
      if (productArray.length > 0) {
        setProduct(productArray)
        setActiveItem(productArray[0])
      }
      else setFound(false);
    }, 2000);
  }, [id]);

  return productArray && found ? (
    <Container className="!my-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-[var(--color-white)] h-fit rounded-xl shadow-lg">
          <img
            src={`/products/${productArray[0].id}.png`}
            alt={productArray[0].title}
            className="w-full object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6 pr-4">
          <div className="xs:max-lg:text-center">
            <h1 className="text-3xl font-bold mb-2">{productArray[0].title}</h1>
            <div className="mt-4 mb-6">
              <span className="text-lg bg-blue text-white px-2 py-1 rounded-lg">
                {productArray[0].brand}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Variantes disponibles</h3>
            <div className="space-y-4">
              <div className="flex gap-4 flex-wrap">
              {productArray.map((item, index) => {
                const customActiveClass = item.variant == activeItem.variant ? `text-white bg-green pointer-events-none` : ``
                return (
                  <Button key={index + item.id + item.subdesc} className={`text-sm !m-0 px-2 py-1 ${customActiveClass}`} onClick={() => setActiveItem(item)}>{item.variant}</Button>     
                )
              })}
              </div>
              <ActiveItemSubDesc item={activeItem}/>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Descripción:</h3>
            <ul className="list-disc pl-6 space-y-3">
              {productArray[0].description
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
          Producto {id} no encontrado.{" "}
          <Link to="/products" className="underline underline-offset-2">
            Volver
          </Link>
        </div>
      ) : (
        <Loader className="animate-spin" />
      )}
    </Container>
  );
}

const ActiveItemSubDesc = ({ item }) => {
  return (
    <div key={item.id} className="text-[var(--color-black)/90] text-base">
      <div>
        <strong>Modelo:</strong> {item.variant}
      </div>
      <div>
        <strong>Unidad:</strong> {item.unit}
      </div>
      <div>
        <strong>Precio:</strong> U$D {item.price?.toFixed(2) || 'Consultar'}
      </div>
      <div>
        <strong>Medida:</strong> {item.subdesc}
      </div>
    </div>
  );
};

export default ProductDetail;
