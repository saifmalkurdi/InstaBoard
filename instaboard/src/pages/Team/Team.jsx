// src/pages/Team/Team.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Team.css";

export default function Team({ darkMode }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultsCount, setResultsCount] = useState(12);
  const [likedUsers, setLikedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmails, setShowEmails] = useState({});

  // Toggle email visibility for a specific user
  const toggleEmailVisibility = (userEmail) => {
    setShowEmails((prev) => ({
      ...prev,
      [userEmail]: !prev[userEmail],
    }));
  };

  // Load liked users from localStorage on mount
  useEffect(() => {
    const storedLikedUsers = localStorage.getItem("likedUsersData");
    if (storedLikedUsers) {
      setLikedUsers(JSON.parse(storedLikedUsers));
    }
  }, []);

  // Fetch users from API
  const fetchUsers = async (count) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${count}`
      );
      setUsers([...users, ...response.data.results]);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Load initial users on component mount
  useEffect(() => {
    fetchUsers(resultsCount);
  }, []);

  // Handle results count change
  const handleResultsChange = (e) => {
    const newCount = parseInt(e.target.value);
    setResultsCount(newCount);
    setUsers([]);
  };

  // Handle Load More
  const handleLoadMore = () => {
    fetchUsers(resultsCount);
  };

  // Handle Like
  const handleLike = (user) => {
    let updatedLikedUsers;
    if (likedUsers.find((u) => u.email === user.email)) {
      updatedLikedUsers = likedUsers.filter((u) => u.email !== user.email);
    } else {
      updatedLikedUsers = [...likedUsers, user];
    }
    setLikedUsers(updatedLikedUsers);
    localStorage.setItem("likedUsersData", JSON.stringify(updatedLikedUsers));
  };

  // Handle View Profile - Navigate with state
  const handleViewProfile = (user) => {
    navigate(`/team/${user.email}`, {
      state: { user: user },
    });
  };

  // Filter users based on search term
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className={`team-page ${darkMode ? "dark" : "light"}`}>
      <div className="team-container">
        {/* Header */}
        <header className="team-header">
          <h1 className="team-title">Our Team</h1>
          <p className="team-subtitle">
            Meet our amazing team members from around the world
          </p>
        </header>

        {/* Controls */}
        <div className="team-controls">
          <div className="control-group">
            <label htmlFor="results-count" className="label">
              Results per request:
            </label>
            <select
              id="results-count"
              value={resultsCount}
              onChange={handleResultsChange}
              className="select-input"
            >
              {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <div className="control-group search-group">
            <label htmlFor="search-input" className="label">
              Search by name:
            </label>
            <div className="search-wrapper">
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                id="search-input"
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchTerm("")}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <p className="user-count">
            {searchTerm
              ? `Found ${filteredUsers.length} of ${users.length} users`
              : `Total users: ${users.length}`}
          </p>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* No Results Message */}
        {searchTerm && filteredUsers.length === 0 && (
          <div className="no-results">
            <p>No users found matching "{searchTerm}"</p>
            <button className="clear-btn" onClick={() => setSearchTerm("")}>
              Clear Search
            </button>
          </div>
        )}

        {/* Users Grid */}
        {filteredUsers.length > 0 && (
          <div className="users-grid">
            {filteredUsers.map((user, index) => (
              <div key={index} className="user-card-wrapper">
                <div
                  className={`team-user-card ${darkMode ? "dark" : "light"}`}
                >
                  {/* Profile Picture */}
                  <div className="card-image">
                    <img
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                    />
                  </div>

                  {/* User Info */}
                  <div className="card-content">
                    <h3 className="card-name">
                      {user.name.first} {user.name.last}
                    </h3>

                    {/* Email with toggle */}
                    <div className="card-email-section">
                      {showEmails[user.email] ? (
                        <p className="card-email visible">{user.email}</p>
                      ) : (
                        <p className="card-email hidden">••••••@••••.com</p>
                      )}
                      <button
                        className="toggle-email-btn"
                        onClick={() => toggleEmailVisibility(user.email)}
                        title={
                          showEmails[user.email] ? "Hide email" : "Show email"
                        }
                      >
                        {showEmails[user.email] ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>

                    <p className="card-location">
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="card-actions">
                    <button
                      className={`like-btn ${
                        likedUsers.find((u) => u.email === user.email)
                          ? "liked"
                          : ""
                      }`}
                      onClick={() => handleLike(user)}
                      title={
                        likedUsers.find((u) => u.email === user.email)
                          ? "Unlike"
                          : "Like"
                      }
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

                    <button
                      className="view-profile-btn"
                      onClick={() => handleViewProfile(user)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="load-more-container">
          <button
            className={`load-more-button ${loading ? "loading" : ""}`}
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
