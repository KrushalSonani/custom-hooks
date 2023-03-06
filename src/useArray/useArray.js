//This hook provides a simple way to manage state for an array, including adding, removing, and updating elements.

import { useState } from 'react';

const useArray = (initialArray) => {
  const [array, setArray] = useState(initialArray);

  const push = (element) => {
    setArray((prevArray) => [...prevArray, element]);
  };

  const filter = (callback) => {
    setArray((prevArray) => prevArray.filter(callback));
  };

  const updateAt = (index, element) => {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      element,
      ...prevArray.slice(index + 1),
    ]);
  };

  const removeAt = (index) => {
    setArray((prevArray) => [
      ...prevArray.slice(0, index),
      ...prevArray.slice(index + 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, setArray, push, filter, updateAt, removeAt, clear };
};

export default useArray;
