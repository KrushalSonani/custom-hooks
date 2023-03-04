// This hook takes an array and a filter function as input, 
// and returns a new array that contains only the elements that pass the filter. 
// This can be useful for implementing search or filtering functionality in your app.

import { useEffect, useState } from "react";


function useFilter(array, filterFn) {
    const [filteredArray, setFilteredArray] = useState(array);
    useEffect(() => {
      setFilteredArray(array.filter(filterFn));
    }, [array, filterFn]);
    return filteredArray;
  }

  export default useFilter;
