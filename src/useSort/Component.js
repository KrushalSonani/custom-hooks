import { useState } from "react";
import { useSort } from "./useSort";

export const Component = () => {
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