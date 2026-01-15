type ProductCardProps = {
  name: string;
  price: string;
  current: number;
  limit: number;
	index: number;
  isSoldout?: boolean;
};

const ProductCard = ({
	name,
	price,
	current,
	limit,
	index,
	isSoldout
}: ProductCardProps) => {
	const progressBar = Math.min((current / limit) * 100, 100);
	const isAlmostSoldout = !isSoldout && current / limit >= 0.9;

	return (
		<div className="flex gap-4 rounded-xl border border-gray-200 p-4 bg-white items-center">
      <div className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        Image
      </div>
			<div className="flex flex-1 flex-col gap-2">
				<h3 className="text-lg font-semibold">
					{index}. {name}
				</h3>
				<p className="font-medium">
					{price}
				</p>
			</div>
			<div className="relative flex flex-1 items-center">
				<div className="w-full">
					{isAlmostSoldout && (
						<span className="absolute bottom-6 right-0 text-xs font-semibold text-red-500">
							품절 임박!
						</span>
					)}
					<div className="h-2 w-full rounded bg-gray-200">
						<div
							className={`h-2 rounded ${
								isSoldout ? "bg-gray-400" : "bg-green-500"
							}`}
							style={{ width: `${progressBar}%` }}
						/>
					</div>
					<span className="absolute top-6 right-0 text-xs text-gray-500">
						{current}/{limit}
					</span>
				</div>
			</div>
			<div className="flex flex-1 items-center justify-center">
				<button
					disabled={isSoldout}
					className={`h-9 w-32 rounded-md border text-sm font-medium transition
            ${
              isSoldout
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-green-400 hover:bg-gray-50"
            }
          `}
				>
					{isSoldout ? "품절" : "구매"}
				</button>
			</div>
    </div>
	);
};

export default ProductCard;
