import { useState } from 'react';

 export const usePagination = (data=[], itemsPerPage=10) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  function nextPage() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages - 1));
  }

  function previousPage() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 0));
  }

  function goToPage(page) {
    const pageNumber = Math.max(0, Math.min(page, totalPages - 1));
    setCurrentPage(pageNumber);
  }

  const paginatedData = data?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return {
    currentPage,
    paginatedData,
    pages,
    nextPage,
    previousPage,
    goToPage,
  };
}