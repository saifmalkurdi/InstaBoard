import { useState } from "react";
import "./UserCard.css";

export default function UserCard({ user }) {
  // only useState (no useCallback)
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(false);

  const fullName = `${user.name.first} ${user.name.last}`;

  function handleLike() {
    setLikes((prev) => prev + 1);
  }

  function toggleEmail() {
    setShowEmail((prev) => !prev);
  }

  return (
    <article
      className="card"
      tabIndex="0"
      aria-label={`Profile card for ${fullName}`}
    >
      <div className="card-top">
        <img
          className="avatar"
          src={user.picture.large}
          alt={`${fullName} avatar`}
        />
        <div className="meta">
          <h3 className="name">{fullName}</h3>
          <p className="location">
            {user.location.city}, {user.location.country}
          </p>
        </div>
      </div>

      <div className="card-body">
        <div className={`email ${showEmail ? "visible" : ""}`}>
          {showEmail ? user.email : "Email hidden"}
        </div>

        <div className="actions-row">
          <button
            className="btn like-btn"
            onClick={handleLike}
            aria-pressed="false"
            aria-label={`Like ${fullName}`}
          >
            <span className="heart" aria-hidden>
              ♥
            </span>
            <span className="likes-count">{likes}</span>
          </button>

          <button
            className="btn toggle-btn"
            onClick={toggleEmail}
            aria-expanded={showEmail}
            aria-controls="email"
          >
            {showEmail ? "Hide Email" : "Show Email"}
          </button>
        </div>
      </div>
    </article>
  );
}
