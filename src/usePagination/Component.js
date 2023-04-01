import { useState } from 'react';
import { usePagination } from './usePagination';

export const Component =({ data=[], itemsPerPage=100 }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    items: paginatedData,
    pages,
    page,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = usePagination({
    data,
    pageSize: itemsPerPage,
    pageIndex: currentPage,
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        {pages.map((pageIndex, index) => (
          <button
            key={index}
            onClick={() => gotoPage(index)}
            disabled={page === index}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}