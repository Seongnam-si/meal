import { Product } from "@/types/product";
import isSoldout from "./isSoldout";

const sortProducts = (products: Product[]): Product[] => {
	const notSoldout = products
		.filter((product) => !isSoldout(product))
		.sort((a, b) => a.index - b.index);

	const soldout = products
		.filter((product) => isSoldout(product))
		.sort((a, b) => a.index - b.index);

	return [...notSoldout, ...soldout];
}

export default sortProducts;
