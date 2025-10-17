import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ darkMode, toggleDarkMode }) {
  // Function to determine if link is active
  const isNavLinkActive = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-icon">📱</span>
          InstaBoard
        </Link>

        {/* Navigation Links */}
        <div className="nav-menu">
          <NavLink to="/" className={isNavLinkActive}>
            Home
          </NavLink>
          <NavLink to="/about" className={isNavLinkActive}>
            About
          </NavLink>
          <NavLink to="/team" className={isNavLinkActive}>
            Team
          </NavLink>
          <NavLink to="/liked-users" className={isNavLinkActive}>
            Liked Users
          </NavLink>
        </div>

        {/* Dark Mode Toggle */}
        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          title="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
