import { useState, useEffect } from "react";

export const useSort = (array, key, direction) => {
  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    const sorted = [...array].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setSortedArray(sorted);
  }, [array, key, direction]);

  return sortedArray;
};