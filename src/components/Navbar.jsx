import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="nav-container">
        
        <div className="nav-brand">
          Mohimine
        </div>

        <nav className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/todos"
            className={`nav-link ${isActive("/todos") ? "active" : ""}`}
          >
            Todos
          </Link>

          <Link
            to="/posts"
            className={`nav-link ${isActive("/posts") ? "active" : ""}`}
          >
            Posts
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
