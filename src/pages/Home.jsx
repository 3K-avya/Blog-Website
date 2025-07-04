import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSearch } from '../context/SearchContext';

function Home() {
  const [posts, setPosts] = useState([]);
  const { searchQuery } = useSearch();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 class="home-head">All Blog Posts</h1>

      {filteredPosts.length === 0 && <p>No matching posts found.</p>}

      <div className="card-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
