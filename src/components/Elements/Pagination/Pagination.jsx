const Pagination = (props) => {
  const { itemsPerPage, totalItems, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3">Showing {itemsPerPage} data of {totalItems}</span>
      <span className="col-span-2"></span>
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 ${
                    currentPage === number
                      ? "text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                      : "rounded-md focus:outline-none focus:shadow-outline-purple"
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default Pagination;
