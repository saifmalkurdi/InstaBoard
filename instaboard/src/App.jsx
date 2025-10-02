import UserList from "./components/UserList/UserList";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className={`app-shell ${theme === "light" ? "light" : ""}`}>
      <header className="app-header">
        <div className="brand">
          <h1 className="logo">InstaBoard</h1>
          <p className="sub">
            Beautifully animated user profiles — RandomUser + Axios
          </p>
        </div>

        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === "light"}
            title="Toggle theme"
          >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </header>

      <main>
        <UserList />
      </main>

      <footer className="app-footer">
        <small>Built with ❤️ • RandomUser API</small>
      </footer>
    </div>
  );
}
