import { Link } from "react-router";

function ProductCard({ id, title, description, className }) {
  return (
    <Link className={`flex-3/4 p-2 ${className}`} to={`/product/${id}`}>
      <div className="flex flex-col p-4 bg-[#fff] rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div className="relative h-64">
          <img
            src={`/products/${id}.jpg`}
            className="h-full object-cover w-full"
            alt={title}
          />
        </div>
        <div className="py-4 flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-gray-900 h-16">{title}</h4>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard