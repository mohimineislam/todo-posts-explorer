import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="app-container">
        <p>Loading post details...</p>
      </div>
    );

  if (error)
    return (
      <div className="app-container">
        <p className="error-text">Error: {error}</p>
      </div>
    );

  return (
    <section className="post-detail-page">
      <Link to="/posts" className="back-link">
        ← Back to Articles
      </Link>

      {post && (
        <article className="glass-card post-detail-card">
          {/* HEADER */}
          <header className="post-header">
            <div className="post-badges">
              <span className="badge badge-primary">
                Article #{post.id}
              </span>
              <span className="badge badge-secondary">
                User {post.userId}
              </span>
            </div>

            <h1 className="post-detail-title">{post.title}</h1>
          </header>

          {/* CONTENT */}
          <div className="post-body">
            <p>
              {post.body}
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* FOOTER */}
          <footer className="post-footer">
            <div className="author-info">
              <div className="author-avatar" />
              <div>
                <p className="author-name">
                  Written by Author {post.userId}
                </p>
                <p className="author-meta">
                  Feb 5, 2026 • 5 min read
                </p>
              </div>
            </div>

            <button className="btn-primary" onClick={() => window.print()}>
              🖨️ Print Article
            </button>
          </footer>
        </article>
      )}
    </section>
  );
}

export default PostDetail;
