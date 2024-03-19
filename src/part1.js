import React, { useState } from "react";

function Part1() {
  const [textboxes, setTextboxes] = useState([]);
  const [sum, setSum] = useState(0);
  const [warnings, setWarnings] = useState({});

  const addTextbox = () => {
    const newTextbox = {
      id: textboxes.length + 1,
      value: "",
    };
    setTextboxes((prevTextboxes) => [...prevTextboxes, newTextbox]);
    setWarnings((prevWarnings) => ({ ...prevWarnings, [newTextbox.id]: "" }));
  };

  const deleteTextbox = (id) => {
    setTextboxes((prevTextboxes) =>
      prevTextboxes.filter((textbox) => textbox.id !== id)
    );
    setWarnings((prevWarnings) => {
      const updatedWarnings = { ...prevWarnings };
      delete updatedWarnings[id];
      return updatedWarnings;
    });
  };

  const handleChange = (id, value) => {
    const isNumber = /^\d*$/.test(value);
    if (!isNumber) {
      setWarnings((prevWarnings) => ({
        ...prevWarnings,
        [id]: "Please enter only digits.",
      }));
    } else {
      setWarnings((prevWarnings) => ({ ...prevWarnings, [id]: "" }));
    }

    const updatedTextboxes = textboxes.map((textbox) =>
      textbox.id === id ? { ...textbox, value } : textbox
    );
    setTextboxes(updatedTextboxes);
    calculateSum(updatedTextboxes);
  };

  const calculateSum = (textboxes) => {
    const total = textboxes.reduce(
      (acc, curr) => acc + parseInt(curr.value || 0),
      0
    );
    setSum(total);
  };

  return (
    <div>
      <h1>Add and Delete Textboxes</h1>
      <button onClick={addTextbox}>Add Textbox</button>
      {textboxes.map((textbox) => (
        <div key={textbox.id}>
          <input
            type="text"
            value={textbox.value}
            onChange={(e) => handleChange(textbox.id, e.target.value)}
          />
          <button onClick={() => deleteTextbox(textbox.id)}>Delete</button>
          <p style={{ color: "red" }}>{warnings[textbox.id]}</p>
        </div>
      ))}
      <p>Total Sum: {sum}</p>
    </div>
  );
}

export default Part1;
