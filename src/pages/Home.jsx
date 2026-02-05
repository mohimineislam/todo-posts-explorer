import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '70vh', 
      textAlign: 'center' 
    }}>
      <div className="hero-content" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
          Discover and Manage <br />
          <span style={{ 
            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Your Digital World.</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          A premium explorer for your tasks and articles. Built with React and modern design principles to give you the best experience.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link to="/todos" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Get Started with Tasks
          </Link>
          <Link to="/posts" className="glass-card" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', border: '1px solid var(--glass-border)' }}>
            Explore Articles
          </Link>
        </div>
      </div>

      <div className="stats-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '2rem', 
        marginTop: '6rem',
        width: '100%'
      }}>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '2rem', margin: 0 }}>200+</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Placeholder Tasks</p>
        </div>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '2rem', margin: 0 }}>100+</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Recent Articles</p>
        </div>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '2rem', margin: 0 }}>99%</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default Home;