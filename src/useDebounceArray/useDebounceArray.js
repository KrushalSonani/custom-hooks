// This hook takes an array and a filter function as input, 
// and returns a new array that contains only the elements that pass the filter. 
// This can be useful for implementing search or filtering functionality in your app.

import { useState, useEffect } from 'react';

export const useDebounceArray = (array, delay) => {
  const [debouncedArray, setDebouncedArray] = useState(array);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedArray(array);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [array, delay]);

  return debouncedArray;
};