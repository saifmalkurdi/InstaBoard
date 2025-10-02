import { useState } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";

const API_URL = "https://randomuser.me/api/?results=12&nat=us,gb,ca,au";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  async function loadProfiles() {
    try {
      // loading
      setLoading(true);
      // error
      setError(null);
      // data
      const res = await axios(API_URL);
      const results = res.data?.results ?? [];
      setUsers(results);
      // catch error
    } catch (err) {
      console.error(err);
      setError("Failed to load users. Try again.");
      // finally loading
    } finally {
      setLoading(false);
    }
  }

  async function loadMore() {
    try {
      // loading
      setLoadingMore(true);
      // error
      setError(null);
      // data
      const res = await axios(API_URL);
      const results = res.data?.results ?? [];
      setUsers((prev) => [...prev, ...results]);
      // catch error
    } catch (err) {
      console.error(err);
      setError("Failed to load more users.");
    } finally {
      setLoadingMore(false);
    }
  }

  const displayedUsers = users.filter((u) => {
    const fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
    return fullName.includes(search.trim().toLowerCase());
  });

  return (
    <section className="userlist-shell">
      <div className="controls">
        <div className="left">
          <h2>Profiles</h2>
          <p className="desc">
            Discover people — click ♥ to like. Toggle email per card.
          </p>
        </div>

        <div className="right">
          <input
            type="search"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search profiles by name"
          />

          <button
            className="load-profiles"
            onClick={loadProfiles}
            disabled={loading}
            aria-busy={loading}
          >
            {loading
              ? "Loading..."
              : users.length
              ? "Reload Profiles"
              : "Load Profiles"}
          </button>
        </div>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="grid">
        {loading && users.length === 0 ? (
          Array.from({ length: 12 }).map((_, i) => (
            <div className="skeleton" key={i} aria-hidden="true">
              <div className="avatar-skel" />
              <div className="line-skel short" />
              <div className="line-skel" />
              <div className="line-skel tiny" />
            </div>
          ))
        ) : displayedUsers.length > 0 ? (
          displayedUsers.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))
        ) : users.length > 0 ? (
          <div className="no-results">No profiles match “{search}”.</div>
        ) : (
          <div className="no-results">
            No profiles loaded. Click “Load Profiles”.
          </div>
        )}
      </div>

      <div className="actions">
        {users.length > 0 && (
          <button
            className="load-more"
            onClick={loadMore}
            disabled={loadingMore}
            aria-busy={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
}
