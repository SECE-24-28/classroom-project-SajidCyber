import React, { useState } from "react";

function AddStudent({ onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim() === "") return alert("Enter a valid name");
    onAdd(name);
    setName("");
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
}

export default AddStudent;
