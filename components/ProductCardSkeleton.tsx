const ProductCardSkeleton = () => {
	return (
  	<div className="flex gap-4 rounded-xl border border-gray-200 p-4 bg-white animate-pulse md:flex-row md:items-center">
      <div className="md:h-24 md:w-24 h-20 w-20 rounded-lg bg-gray-200" />
      <div className="flex md:flex-1 flex-col gap-3">
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/3 rounded bg-gray-200" />
      </div>
      <div className="md:flex-1">
        <div className="h-2 w-full rounded bg-gray-200" />
        <div className="mt-3 h-3 w-1/4 rounded bg-gray-200 ml-auto" />
      </div>
      <div className="md:flex-1">
        <div className="h-9 w-32 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
