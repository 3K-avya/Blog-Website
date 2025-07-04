import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
