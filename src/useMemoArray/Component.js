import useMemoArray from './useMemoArray';

export const Component = ({ items, searchTerm }) => {
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

