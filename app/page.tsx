"use client";

import ProductCard from "@/components/ProductCard";
import isSoldout from "@/utils/isSoldout";
import sortProducts from "@/utils/sortProduct";
import { mockProducts } from "@/mocks/products";
import { useState } from "react";

const ITEMS_PER_PAGE = 4;

export default function Home() {
  const sortedProducts = sortProducts(mockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 ml-6 text-2xl font-bold">
        척척밥상 주문서
      </h1>
      <section className="flex flex-col gap-4">
        {currentProducts.map((product) => (
          <ProductCard 
            key={product.index}
            index={product.index}
            name={product.name}
            price={product.price}
            current={product.current}
            limit={product.limit}
            image={product.image}
            isSoldout={isSoldout(product)}
          />
        ))}  
      </section>
      <div className="mt-8 flex justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="rounded px-3 py-1 text-sm border disabled:opacity-30"
        >
          이전
        </button>
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded px-3 py-1 text-sm border
                ${page === currentPage ? "bg-gray-200" : ""}
              `}
            >
              {page}
            </button>
          );
        })}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="rounded px-3 py-1 text-sm border disabled:opacity-30"
        >
          다음
        </button>
      </div>
    </main>
  );
}
