import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Item from "./Item";

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
//   {
//     id: 3,
//     description: "Socks",
//     quantity: 12,
//     packed: false,
//   },
// ];

function App() {
  // const [count, setCount] = useState(0)
  // const [items, setItems] = useState(initialItems);
  const [items, setItems] = useState([]);

  // To add it
  function handldeAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // To delete items
  function handleDeleteItem(id) {
    // console.log(id);

    setItems((items) => items.filter((item) => item.id !== id));
  }

  // function handleDeleteItem(id) {
  //   setItems(items.filter((item) => item.id !== id));
  // }

  // To update object in Array
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // To clear list, or set item to zero
  // function handleClearList() {
  //   setItems([]);
  // }

  // OR
   function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }


  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handldeAddItems} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}

export default App;
