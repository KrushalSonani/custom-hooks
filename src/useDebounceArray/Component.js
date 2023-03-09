import { useState } from 'react';
import { useDebounceArray } from './useDebounceArray';

export const Component = () => {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);
  const debouncedListItems = useDebounceArray(listItems, 500);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    setListItems([...listItems, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {debouncedListItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};