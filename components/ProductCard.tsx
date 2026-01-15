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
		<div
			className="
				flex flex-col gap-4 p-4 bg-white 
				rounded-xl border border-gray-200
				md:flex-row md:items-center
			"
		>
			<div className="md:w-[300px] flex gap-4">
				<div
					className="
						h-20 w-20 flex flex-shrink-0
						rounded-lg bg-gray-100 items-center justify-center
						text-sm text-gray-400
					"
				>
					Image
				</div>
				<div className="flex flex-col gap-2 justify-center">
					<h3 className="text-base font-semibold">
						{index}. {name}
					</h3>
					<p className="text-sm font-medium">
						{price}
					</p>
				</div>
			</div>
				<div className="relative md:flex-1 md:px-6">
					{isAlmostSoldout && (
						<span className="block text-right mb-2 text-xs font-semibold text-red-500">
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
					<span className="mt-2 block text-right text-xs text-gray-500">
						{current}/{limit}
					</span>
				</div>
			<div className="md:w-36">
				<button
					disabled={isSoldout}
					className={`w-full h-11 rounded-md text-sm font-medium transition
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
