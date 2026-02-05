import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post, isFavorite, toggleFavorite }) {
  return (
    <article 
      className="glass-card"
      style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}
    >
      {/* --- NEW: Favorite Button (Top Right) --- */}
      <button
        onClick={() => toggleFavorite(post.id)}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'transparent',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: isFavorite ? '#ff4757' : '#ccc', // Red if favorite, gray if not
          transition: 'color 0.2s ease'
        }}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? '♥' : '♡'}
      </button>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', lineHeight: '1.4', paddingRight: '30px' }}>{post.title}</h3>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.9375rem', 
          marginTop: '1rem', 
          display: '-webkit-box', 
          WebkitLineClamp: '3', 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden' 
        }}>
          {post.body}
        </p>
      </div>
      
      <Link 
        to={`/posts/${post.id}`}
        className="btn-primary"
        style={{ marginTop: '2rem', width: '100%' }}
      >
        Learn More
      </Link>
    </article>
  );
}

export default PostCard;