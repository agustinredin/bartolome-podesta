import "../App.css";
import ProductList from "../lib/ProductList.js";
import ProductCard from "./ProductCard.jsx";
import Container from "./ui/Container.jsx";

function ProductSlider() {

  const ids = new Set(ProductList.map(i => i.id))
  const uniqueProducts = Array.from(ids).map((id) => {
    return ProductList.find((product) => product.id === id);
  });
  return (
    <Container
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <h1 className="text-2xl lg:text-5xl text-green">Destacados</h1>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {uniqueProducts.map((producto) => (
          <div
            key={producto.id}
            className="hidden duration-500 ease-in-out w-1/2"
            data-carousel-item
          >
            {/* <img
              src={`/products/${producto.id}.jpg`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={producto.title}
            /> */}
            <ProductCard {...producto} />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: ProductList.length }).map((_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div> */}

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-[999] flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lblue dark:bg-gray-800/30 group-hover:bg-blue dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-[999] flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lblue dark:bg-gray-800/30 group-hover:bg-blue dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </Container>
  );
}

export default ProductSlider;
