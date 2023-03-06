import useArray from './useArray';

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
