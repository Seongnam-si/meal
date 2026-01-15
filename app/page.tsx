"use client";

import ProductCard from "@/components/ProductCard";
import isSoldout from "@/utils/isSoldout";
import sortProducts from "@/utils/sortProduct";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { Product } from "@/types/product";

const ITEMS_PER_PAGE = 4;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);
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
        console.error("상품 데이터 조회 실패", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts();
  }, [])

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 ml-6 text-2xl font-bold">
        척척밥상 주문서
      </h1>
      <section className="flex flex-col gap-4">
        {loading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <ProductCardSkeleton key={i} />
            ))
          : currentProducts.map((product) => (
            <ProductCard 
              key={product.index}
              index={product.index}
              name={product.name}
              price={product.price}
              current={product.current}
              limit={product.limit}

              isSoldout={isSoldout(product)}
            />
          ))
        }  
      </section>
      <div className="mt-8 overflow-x-auto">
        <div className="flex justify-center gap-2 min-w-max px-2">
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
      </div>
    </main>
  );
}
