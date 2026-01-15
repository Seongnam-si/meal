import { Product } from "@/types/product";

const isSoldout = (product: Product): boolean => {
	return product.current >= product.limit;
};

export default isSoldout;
