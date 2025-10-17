// src/App.js - UPDATED WITH LAYOUT
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";
import LikedUsers from "./pages/LikedUsers/LikedUsers";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.toggle("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/team" element={<Team darkMode={darkMode} />} />
          <Route
            path="/team/:id"
            element={<TeamDetails darkMode={darkMode} />}
          />
          <Route
            path="/liked-users"
            element={<LikedUsers darkMode={darkMode} />}
          />
          <Route path="*" element={<NotFound darkMode={darkMode} />} />
        </Routes>
      </Layout>
    </>
  );
}
