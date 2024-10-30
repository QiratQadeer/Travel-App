import React, { useState } from "react";

function PackingList({ list, setList }) {
  const [filter, setFilter] = useState("input");

  function handleChange(id) {
    setList(
      list.map((item) =>
        id === item.id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDelete(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  let sortedList = list;
  if (filter === "description") {
    sortedList = list.slice().sort((a, b) => a.item.localeCompare(b.item));
  } else if (filter === "packed") {
    sortedList = list
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      {sortedList.length <= 0 && "There are no items in the list"}
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handleChange(item.id)}
            />
            <span>
              {item.item} ({item.quantity})
            </span>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </li>
        ))}
      </ul>

      <div className="actions">
        <select
          name="sortingActions"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={() => setList([])}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
