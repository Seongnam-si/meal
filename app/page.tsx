"use client";

import Pagenation from "@/components/Pagenation";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import useFetchProducts from "@/hooks/useFetchProducts";
import usePagenation from "@/hooks/usePagenation";
import isSoldout from "@/utils/isSoldout";

export default function Home() {
  const { products, loading } = useFetchProducts();
  const {
    currentPage,
		totalPage,
		currentItems,
		moveNext,
		movePage,
		movePrev
  } = usePagenation(products, 4);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 ml-6 text-2xl font-bold">
        척척밥상 주문서
      </h1>
      <section className="flex flex-col gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
            ))
          : currentItems.map((product) => (
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
      <Pagenation
        currentPage={currentPage}
        totalPage={totalPage}
        movePage={movePage}
        movePrev={movePrev}
        moveNext={moveNext}
      />
    </main>
  );
}
