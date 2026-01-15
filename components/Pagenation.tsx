type PaginationProps = {
  currentPage: number;
  totalPage: number;
  movePrev: () => void;
  moveNext: () => void;
  movePage: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPage,
  movePrev,
  moveNext,
  movePage,
}: PaginationProps) => {
  return (
    <div className="mt-8 overflow-x-auto">
      <div className="flex justify-center gap-2 min-w-max px-2">
        <button
          disabled={currentPage === 1}
          onClick={movePrev}
          className="rounded px-3 py-1 text-sm border disabled:opacity-30"
        >
          이전
        </button>

        {Array.from({ length: totalPage }).map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => movePage(page)}
              className={`rounded px-3 py-1 text-sm border
                ${page === currentPage ? "bg-gray-200" : ""}
              `}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPage}
          onClick={moveNext}
          className="rounded px-3 py-1 text-sm border disabled:opacity-30"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Pagination;
