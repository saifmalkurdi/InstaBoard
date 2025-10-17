// src/pages/LikedUsers/LikedUsers.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LikedUsers.css";

export default function LikedUsers({ darkMode }) {
  const navigate = useNavigate();
  const [likedUsers, setLikedUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load liked users from localStorage
  useEffect(() => {
    const storedLikedUsers = localStorage.getItem("likedUsersData");
    if (storedLikedUsers) {
      try {
        setLikedUsers(JSON.parse(storedLikedUsers));
      } catch (err) {
        console.error("Error parsing liked users:", err);
        setLikedUsers([]);
      }
    }
    setLoading(false);
  }, []);

  // Handle Unlike
  const handleUnlike = (email) => {
    const updatedLikedUsers = likedUsers.filter((user) => user.email !== email);
    setLikedUsers(updatedLikedUsers);
    localStorage.setItem("likedUsersData", JSON.stringify(updatedLikedUsers));
  };

  // Handle Clear All
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all liked users?")) {
      setLikedUsers([]);
      localStorage.setItem("likedUsersData", JSON.stringify([]));
    }
  };

  if (loading) {
    return (
      <div className={`liked-users-page ${darkMode ? "dark" : "light"}`}>
        <div className="liked-users-container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading your liked users...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`liked-users-page ${darkMode ? "dark" : "light"}`}>
      <div className="liked-users-container">
        {/* Header */}
        <header className="liked-header">
          <h1 className="liked-title">Your Liked Users</h1>
          <p className="liked-subtitle">
            Keep track of your favorite team members
          </p>
        </header>

        {/* Stats */}
        <div className="liked-stats">
          <div className="stat-card">
            <span className="stat-label">Total Liked</span>
            <span className="stat-value">{likedUsers.length}</span>
          </div>
        </div>

        {/* Empty State */}
        {likedUsers.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💔</div>
            <h2>No Liked Users Yet</h2>
            <p>Start exploring the team and like your favorite members!</p>
            <button
              className="empty-action-button"
              onClick={() => navigate("/team")}
            >
              Explore Team
            </button>
          </div>
        ) : (
          <>
            {/* Liked Users Grid */}
            <div className="liked-users-grid">
              {likedUsers.map((user) => (
                <div key={user.email} className="liked-user-card">
                  <div className="card-image">
                    <img
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                    />
                  </div>
                  <div className="card-info">
                    <h3 className="card-name">
                      {user.name.first} {user.name.last}
                    </h3>
                    <p className="card-email">{user.email}</p>
                    <p className="card-location">
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>
                  <button
                    className="unlike-button"
                    onClick={() => handleUnlike(user.email)}
                    title="Unlike"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Clear All Button */}
            {likedUsers.length > 0 && (
              <div className="clear-all-container">
                <button className="clear-all-button" onClick={handleClearAll}>
                  Clear All Likes
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
