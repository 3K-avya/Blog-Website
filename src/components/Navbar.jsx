import { Link } from 'react-router-dom';
import './Navbar.css';
// Navbar.jsx
import { useSearch } from '../context/SearchContext';


function Navbar() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <nav className="navbar">
      <Link to="/">
  <img src="/src/Logo.png" alt="Logo" className="logo" />
</Link>
      <ul>
        <li class="home-style"><Link to="/">Home</Link></li>
        <li class="home-style"><Link to="/new">New Post</Link></li>
      </ul>

<div className="search-container">
  <input
    type="text"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="navbar-search"
  />
  <img src="/src/image.png" alt="Search Icon" className="search-icon" />
</div>
    </nav>
  );
}

export default Navbar;
