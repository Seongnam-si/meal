"use client";

import { Product } from "@/types/product";
import { useState } from "react";

const usePagenation = (
	items: Product[],
	itemsPage: number
) => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPage = Math.ceil(items.length / itemsPage);
	const startIndex = (currentPage - 1) * itemsPage;
	const endIndex = startIndex + itemsPage;
	const currentItems = items.slice(startIndex, endIndex);

	const movePage = (page: number) => {
		if ((page < 1) || (page > totalPage)) return;
		setCurrentPage(page);
	}

	const moveNext = () => {
		if (currentPage < totalPage) {
			setCurrentPage(currentPage + 1);
		}
	}

	const movePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	}
	
	return {
		currentPage,
		totalPage,
		currentItems,
		moveNext,
		movePage,
		movePrev
	}
};

export default usePagenation;
