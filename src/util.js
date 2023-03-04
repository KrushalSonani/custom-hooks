// This function takes an item from the array and a searchTerm as input. 
// It uses Object.values to get an array of all the values of the properties of the item. 
// Then, it loops through the values and checks if any of them are strings that contain the searchTerm (case-insensitive). 
// If so, it returns true to include the item in the filtered array.

export const filterBySearch = (item, searchTerm) => {
    const values = Object.values(item);
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'string' && values[i].toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
    return false;
  }