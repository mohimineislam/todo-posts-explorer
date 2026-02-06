import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, isFavorite, toggleFavorite }) {
  return (
    <article className="glass-card post-card">
      
      {/* Favorite Button */}
      <button
        className={`fav-btn ${isFavorite ? "active" : ""}`}
        onClick={() => toggleFavorite(post.id)}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      {/* New Badge */}
      <span className="post-badge">NEW</span>

      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>

        <p className="post-body">
          {post.body}
        </p>
      </div>

      <Link to={`/posts/${post.id}`} className="btn-primary post-btn">
        Learn More →
      </Link>
    </article>
  );
}

export default PostCard;
