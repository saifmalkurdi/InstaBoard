// src/pages/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound({ darkMode }) {
  return (
    <div className={`notfound-page ${darkMode ? "dark" : "light"}`}>
      <div className="notfound-container">
        {/* 404 Number */}
        <div className="notfound-number">
          <span className="number">4</span>
          <span className="emoji">🔍</span>
          <span className="number">4</span>
        </div>

        {/* Content */}
        <div className="notfound-content">
          <h1 className="notfound-title">Page Not Found</h1>
          <p className="notfound-message">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <p className="notfound-description">
            The route you tried to access is not available in InstaBoard.
          </p>
        </div>

        {/* Suggestions */}
        <div className="notfound-suggestions">
          <p className="suggestion-title">Here are some helpful links:</p>
          <div className="suggestion-links">
            <Link to="/" className="suggestion-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </Link>
            <Link to="/team" className="suggestion-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Team
            </Link>
            <Link to="/about" className="suggestion-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              About
            </Link>
            <Link to="/liked-users" className="suggestion-link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Liked
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="notfound-actions">
          <Link to="/" className="action-button primary">
            ← Go Back Home
          </Link>
          <button
            className="action-button secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="floating-icons">
          <div className="icon icon-1">📱</div>
          <div className="icon icon-2">🔍</div>
          <div className="icon icon-3">💬</div>
          <div className="icon icon-4">✨</div>
        </div>
      </div>
    </div>
  );
}
