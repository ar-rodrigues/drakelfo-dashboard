

export default function PaginationButtons ({data, PAGE_SIZE, currentPage, handlePageChange}) {
  const pages = Math.ceil(data.length / PAGE_SIZE);
  
  return (
    <div className="flex justify-center my-4">
          {[...Array(pages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`mx-2 p-2 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-500 hover:text-white'}`}
            >
              {page + 1}
            </button>
          ))}
    </div>
  );
          }
