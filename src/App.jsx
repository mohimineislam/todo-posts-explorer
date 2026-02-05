import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;