import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Post not found');
        return response.json();
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

  if (loading) return <div className="app-container"><p>Loading post details...</p></div>;
  if (error) return <div className="app-container"><p style={{ color: 'var(--error)' }}>Error: {error}</p></div>;

  return (
    <div className="post-detail-page" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/posts" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        ← Back to Articles
      </Link>
      
      {post && (
        <article className="glass-card" style={{ padding: '3rem' }}>
          <header style={{ position: 'static', background: 'none', border: 'none', padding: 0, backdropFilter: 'none', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <span className="badge" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                Article #{post.id}
              </span>
              <span className="badge" style={{ background: 'rgba(236, 72, 153, 0.1)', color: 'var(--secondary)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                User {post.userId}
              </span>
            </div>
            <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>{post.title}</h1>
          </header>

          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-primary)', opacity: 0.9 }}>
            {post.body}
            {/* Adding some dummy text to make it look like a real article */}
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--primary), var(--secondary))' }}></div>
              <div>
                <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>Written by Author {post.userId}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Feb 5, 2026 • 5 min read</p>
              </div>
            </div>
            <button className="btn-primary" onClick={() => window.print()}>
               Print Article
            </button>
          </div>
        </article>
      )}
    </div>
  );
}

export default PostDetail;
