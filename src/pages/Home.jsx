import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      
      {/* HERO */}
      <div className="hero-content">
        <h1 className="hero-title">
          Discover and Manage <br />
          <span className="hero-gradient">Your Digital World.</span>
        </h1>

        <p className="hero-subtitle">
          A premium explorer for your tasks and articles. Built with React and
          modern design principles to give you the best experience.
        </p>

        <div className="hero-actions">
          <Link to="/todos" className="btn-primary hero-btn">
            Get Started with Tasks
          </Link>

          <Link to="/posts" className="btn-glass hero-btn">
            Explore Articles
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        <div className="glass-card stat-card">
          <h3>200+</h3>
          <p>Placeholder Tasks</p>
        </div>

        <div className="glass-card stat-card">
          <h3>100+</h3>
          <p>Recent Articles</p>
        </div>

        <div className="glass-card stat-card">
          <h3>99%</h3>
          <p>Satisfaction</p>
        </div>
      </div>

    </section>
  );
}

export default Home;
