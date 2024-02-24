import "./index.css";
import { useState } from "react";

export default function App() {
  const [items, setItem] = useState([]);

  function addItem(item) {
    return setItem((items) => [...items, item]);
  }

  return (
    <div>
      <Logo></Logo>
      <Form onAddItem={addItem} />
      <PackingList items={items} />
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>✈️Far Away👜</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newData = {
      id: Date.now(),
      description,
      quantity,
      package: false,
    };
    onAddItem(newData);
    console.log(newData);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack 😁 for your trip.</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}

        {console.log(items)}
      </ul>
    </div>
  );
}

function Item({ itemObj }) {
  const [isPacked, setIsPacked] = useState(false);
  return (
    <li>
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => setIsPacked(!isPacked)}>✖️</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have packed X items, and 100-X% still not packed.</em>
    </footer>
  );
}
