// Here's an implementation of the useMemoArray custom hook that memoizes an array based on a set of dependencies

import { useMemo } from 'react';

const useMemoArray = (array, dependencies) => {
  const memoizedArray = useMemo(() => array, dependencies);
  return memoizedArray;
};

export default useMemoArray;

