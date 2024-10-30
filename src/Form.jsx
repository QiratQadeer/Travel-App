import { useState } from "react";

function Form({ list, setList }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (item.trim() === "") return;

    const data = {
      id: crypto.randomUUID(),
      item: item,
      quantity: quantity,
      packed: false,
    };

    setList([...list, data]);
    setItem("");
    setQuantity(1);
    console.log(list, "hook");
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>

        <select
          name="count"
          id="itemCount"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
