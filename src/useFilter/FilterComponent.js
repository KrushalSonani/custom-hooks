import { filterBySearch } from "../util";
import useFilter from "./useFilter";

export const FilterComponent = ({ items =[{id: 1, name: 'Manish' }, {id: 2 , name: 'Krushal'}], searchTerm = 'krushal' }) => {
    const filteredItems = useFilter(items, (item) => filterBySearch(item, searchTerm));
    return (
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }