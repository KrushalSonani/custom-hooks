# custom-hooks-array

## custome-hooks-array

Custom hooks are a powerful feature in React that allow you to extract reusable logic from your components. Here are some useful custom hooks for arrays in React:

1. [useFilter](https://github.com/KrushalSonani/custom-hooks-array/tree/main/src/useFilter)

>This hook takes an array and a filter function as input, and returns a new array that contains only the elements that pass the filter. This can be useful for implementing search or filtering functionality in your app.

```
function useFilter(array, filterFn) {
    const [filteredArray, setFilteredArray] = useState(array);
    useEffect(() => {
      setFilteredArray(array.filter(filterFn));
    }, [array, filterFn]);
    return filteredArray;
  }

  export default useFilter;
 ```
 > In the context of using a filter function with arrays in React, the filter function should take an element from the array as input and return a boolean value. The boolean value indicates whether the element should be included in the filtered array or not.
 >Here's an example filter function that filters an array of objects based on a search term:
 ```
 export const filterBySearch = (item, searchTerm) => {
    const values = Object.values(item);
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'string' && values[i].toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
 ```
 > This function takes an item from the array and a searchTerm as input. It uses Object.values to get an array of all the values of the properties of the item. Then, it loops through the values and checks if any of them are strings that contain the searchTerm (case-insensitive). If so, it returns true to include the item in the filtered array.

 2. [useArray](https://github.com/KrushalSonani/custom-hooks-array/tree/main/src/useArray)
 
 > This hook provides a simple way to manage state for an array, including adding, removing, and updating elements.

 ```
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

 ```

 How to use:
 ```
 export const Component = () => {
  const { array, push, filter, updateAt, removeAt, clear } = useArray([]);

  const handleAdd = () => {
    push({ id: 1, name: 'Krushal' });
  };

  const handleFilter = () => {
    filter((item) => item.id !== 1);
  };

  const handleUpdate = () => {
    updateAt(0, { id: 1, name: 'Krish' });
  };

  const handleRemove = () => {
    removeAt(0);
  };

  const handleClear = () => {
    clear();
  };

  return (
    <div>
      <button onClick={handleAdd}>Add item</button>
      <button onClick={handleFilter}>Filter items</button>
      <button onClick={handleUpdate}>Update item</button>
      <button onClick={handleRemove}>Remove item</button>
      <button onClick={handleClear}>Clear array</button>
      <ul>
        {array.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
 ```

  3. [useMemoArray](https://github.com/KrushalSonani/custom-hooks-array/tree/main/src/useMemoArray)
  >This custom hook that memoizes an array based on a set of dependencies.

  ```
 import { useMemo } from 'react';

const useMemoArray = (array, dependencies) => {
  const memoizedArray = useMemo(() => array, dependencies);
  return memoizedArray;
};

export default useMemoArray;
```

  >How to use:
  ```
  import useMemoArray from './useMemoArray';

const MyComponent = ({ items, searchTerm }) => {
  const filteredItems = useMemoArray(
    items.filter((item) => item.name.includes(searchTerm)),
    [items, searchTerm]
  );

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
```

4. [useSort](https://github.com/KrushalSonani/custom-hooks-array/tree/main/src/useSort)
>here's an example of a custom dynamic useSort hook:

```
const useSort = (array, key, direction) => {
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
```
>How to use:

```
const App = () => {
  const users = [
    { name: "Alice", age: 32 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 42 },
  ];

  const [sortKey, setSortKey] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedUsers = useSort(users, sortKey, sortDirection);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortKey("name")}>
              Name {sortKey === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
            </th>
            <th onClick={() => setSortKey("age")}>
              Age {sortKey === "age" ? (sortDirection === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}>
        Toggle Sort Direction
      </button>
    </div>
  );
};
```

>In this example, the useSort hook takes an array of objects, a key to sort by, and a direction (either "asc" or "desc"). The hook returns a sorted array based on the given parameters. The example then uses this hook to sort a list of users in a table, with the ability to toggle the sort direction by clicking a button.