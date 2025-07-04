import { useParams, useNavigate } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) return;

    const updatedPosts = posts.filter(p => p.id !== parseInt(id));
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/"); // Go back to homepage after deleting
  };

  return (
   <div style={{
  padding: "1.5rem",
  maxWidth: "1125px",
  margin: "0 auto",
  textAlign: "center"
}}>

      <h1 class="titlePost">{post.title}</h1>
      <p class="paraPost">{post.body}</p>
      <button className="delete" onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  );
}

export default Post;
