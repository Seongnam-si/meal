"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import sortProducts from "@/utils/sortProduct";

const useFetchProducts = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const res = await fetch("https://api.zeri.pics");
				const data = await res.json();
				const sortedProducts = sortProducts(data.content);
				setProducts(sortedProducts);
			} catch (err) {
				console.error("상품 목록 조회 실패 = ", err);
			} finally {
				setLoading(false);
			}
		}

		fetchProducts();
	}, []);

	return {
		products,
		loading
	}
};

export default useFetchProducts;
