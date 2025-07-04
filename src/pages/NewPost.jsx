import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    const updated = [newPost, ...existing];
    localStorage.setItem("posts", JSON.stringify(updated));

    navigate("/"); // go back to homepage
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Write a New Post</h1>
     <form onSubmit={handleSubmit} className="form">
  <input
    type="text"
    placeholder="Title"
    value={title}
    required
    onChange={(e) => setTitle(e.target.value)}
  />
  <textarea
    placeholder="Body"
    value={body}
    required
    rows="6"
    onChange={(e) => setBody(e.target.value)}
  ></textarea>
  <button type="submit">Post</button>
</form>

    </div>
  );
}

export default NewPost;
