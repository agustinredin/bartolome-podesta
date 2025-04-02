function ProductCard({ title, description, image, className }) {
  return (
    <div className={`flex-3/4 p-2 ${className}`}>
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div className="relative h-64">
          <img
            src={image}
            className="h-full object-cover"
            alt={title}
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard