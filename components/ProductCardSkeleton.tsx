const ProductCardSkeleton = () => {
	return (
  	<div className="flex gap-4 rounded-xl border border-gray-200 p-4 bg-white items-center animate-pulse">
      <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-200" />
      <div className="flex flex-1 flex-col gap-3">
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/3 rounded bg-gray-200" />
      </div>
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <div className="h-2 w-full rounded bg-gray-200" />
          <div className="mt-3 h-3 w-1/4 rounded bg-gray-200 ml-auto" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="h-9 w-32 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
