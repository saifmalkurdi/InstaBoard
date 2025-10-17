// src/pages/TeamDetails/TeamDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "./TeamDetails.css";

export default function TeamDetails({ darkMode }) {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likedUsers, setLikedUsers] = useState([]);

  // Load liked users from localStorage
  useEffect(() => {
    const storedLikedUsers = localStorage.getItem("likedUsersData");
    if (storedLikedUsers) {
      try {
        const parsed = JSON.parse(storedLikedUsers);
        setLikedUsers(parsed);
      } catch (err) {
        console.error("Error parsing liked users:", err);
      }
    }
  }, []);

  // Find user from location state (passed from Team page)
  useEffect(() => {
    // Get user from location state
    const userData = location.state?.user;

    if (userData) {
      setUser(userData);

      // Check if user is liked
      const userIsLiked = likedUsers.some((u) => u.email === userData.email);
      setIsLiked(userIsLiked);
    } else {
      console.log("No user in state");
    }

    setLoading(false);
  }, [id, location.state, likedUsers]);

  // Handle Like
  const handleLike = () => {
    if (!user) return;

    let updatedLikedUsers;
    if (isLiked) {
      updatedLikedUsers = likedUsers.filter((u) => u.email !== user.email);
      setIsLiked(false);
    } else {
      updatedLikedUsers = [...likedUsers, user];
      setIsLiked(true);
    }
    setLikedUsers(updatedLikedUsers);
    localStorage.setItem("likedUsersData", JSON.stringify(updatedLikedUsers));
  };

  if (loading) {
    return (
      <div className={`team-details-page ${darkMode ? "dark" : "light"}`}>
        <div className="team-details-container">
          <p className="loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={`team-details-page ${darkMode ? "dark" : "light"}`}>
        <div className="team-details-container">
          <Link to="/team" className="back-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Team
          </Link>
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#cbd5e1",
            }}
          >
            <p>No user data found. Please select a user from the Team page.</p>
            <Link
              to="/team"
              style={{
                color: "#a855f7",
                textDecoration: "none",
                marginTop: "20px",
                display: "inline-block",
              }}
            >
              Go Back to Team
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`team-details-page ${darkMode ? "dark" : "light"}`}>
      <div className="team-details-container">
        {/* Back Button */}
        <Link to="/team" className="back-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Team
        </Link>

        {/* Profile Card */}
        <div className={`profile-card ${darkMode ? "dark" : "light"}`}>
          {/* Header Section */}
          <div className="profile-header">
            <div className="profile-image-wrapper">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Basic Info */}
            <div className="profile-basic-info">
              <h1 className="profile-name">
                {user.name.first} {user.name.last}
              </h1>
              <p className="profile-title">
                {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
              </p>

              {/* Like Button */}
              <button
                className={`like-button-large ${isLiked ? "liked" : ""}`}
                onClick={handleLike}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>{isLiked ? "Liked" : "Like"}</span>
              </button>
            </div>
          </div>

          {/* Information Section */}
          <div className="profile-info">
            {/* Contact Information */}
            <div className="info-section">
              <h3 className="section-title">Contact Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <a href={`mailto:${user.email}`} className="info-value">
                    {user.email}
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <a href={`tel:${user.phone}`} className="info-value">
                    {user.phone}
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">Cell:</span>
                  <a href={`tel:${user.cell}`} className="info-value">
                    {user.cell}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="info-section">
              <h3 className="section-title">Location</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Street:</span>
                  <span className="info-value">
                    {user.location?.street?.number || ""}{" "}
                    {user.location?.street?.name || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">City:</span>
                  <span className="info-value">
                    {user.location?.city || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">State:</span>
                  <span className="info-value">
                    {user.location?.state || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Country:</span>
                  <span className="info-value">
                    {user.location?.country || "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Postal Code:</span>
                  <span className="info-value">
                    {user.location?.postcode || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="info-section">
              <h3 className="section-title">Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Username:</span>
                  <span className="info-value">@{user.login.username}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Gender:</span>
                  <span className="info-value">
                    {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Nationality:</span>
                  <span className="info-value">{user.nat}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">
                    {user.dob?.age || "N/A"} years old
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Date of Birth:</span>
                  <span className="info-value">
                    {user.dob?.date
                      ? new Date(user.dob.date).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Timezone:</span>
                  <span className="info-value">
                    {user.timezone?.description || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Link to="/team" className="action-button back-link">
            ← Back to Team
          </Link>
          <a
            href={`mailto:${user.email}`}
            className="action-button contact-link"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
