import "./index.css";
import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div>
      <Logo></Logo>
      <Form></Form>
      <PackingList></PackingList>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  return <h1>✈️Far Away👜</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(4);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newData = {
      id: id,
      description: description,
      quantity: quantity,
      package: false,
    };
    setId(id + 1);
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
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObj }) {
  return (
    <li>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button>✖️</button>
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
