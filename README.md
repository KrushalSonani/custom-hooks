# custom-hooks-array

## custome-hooks-array

Custom hooks are a powerful feature in React that allow you to extract reusable logic from your components. Here are some useful custom hooks for arrays in React:

**1. useFilter**

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