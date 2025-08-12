import React from "react";
import Item from "./Item";

import { useState } from "react";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  // const initialItems = [
  //   {
  //     id: 1,
  //     description: "Passport",
  //     quantity: 2,
  //     packed: false,
  //   },

  //   {
  //     id: 2,
  //     description: "Charger",
  //     quantity: 22,
  //     packed: true,
  //   },
  //     {
  //     id: 3,
  //     description: "Socks",
  //     quantity: 12,
  //     packed: false,
  //   },
  // ];
  //

  // Sorting to select item to show first
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

 if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));



  return (
    <div className="list">
      <ul className="">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      {/* // Sorting to select item to show first */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
