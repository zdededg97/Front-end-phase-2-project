import React, { useState } from "react";

function AddRecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [externalLink, setExternalLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to the backend
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, image, externalLink }),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data);
        setTitle("");
        setImage("");
        setExternalLink("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        required
      />
      <input
        value={externalLink}
        onChange={(e) => setExternalLink(e.target.value)}
        placeholder="External Recipe Link"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
