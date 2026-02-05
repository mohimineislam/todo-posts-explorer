import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // --- NEW: Favorites State (Initialize from LocalStorage) ---
  const [favorites, setFavorites] = useState(() => {
    // Try to get data from local storage on first load
    const saved = localStorage.getItem('favoritePosts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 20));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // --- NEW: Toggle Favorite Function ---
  const toggleFavorite = (postId) => {
    let updatedFavorites;
    if (favorites.includes(postId)) {
      // Remove if already favorite
      updatedFavorites = favorites.filter(id => id !== postId);
    } else {
      // Add if not favorite
      updatedFavorites = [...favorites, postId];
    }
    
    setFavorites(updatedFavorites);
    // Save to LocalStorage immediately
    localStorage.setItem('favoritePosts', JSON.stringify(updatedFavorites));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="app-container"><p>Loading posts...</p></div>;
  if (error) return <div className="app-container"><p style={{ color: 'var(--error)' }}>Error: {error}</p></div>;

  return (
    <div className="posts-page">
      <div className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h2>Articles & News</h2>
          <p className="subtitle" style={{ color: 'var(--text-secondary)' }}>Explore the latest insights from our community.</p>
        </div>
        <div style={{ width: '300px' }}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div className="grid-layout">
        {filteredPosts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            // --- NEW: Pass Favorite Props ---
            isFavorite={favorites.includes(post.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
        
        {filteredPosts.length === 0 && (
          <div className="glass-card" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No articles matched your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;