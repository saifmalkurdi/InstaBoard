// src/pages/Home/Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ darkMode }) {
  return (
    <div className={`home-page ${darkMode ? "dark" : "light"}`}>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-icon">📱</div>
            <h1 className="hero-title">Welcome to InstaBoard</h1>
            <p className="hero-subtitle">
              Discover amazing profiles and connect with talented individuals
              from around the world
            </p>
            <div className="hero-actions">
              <Link to="/team" className="action-btn primary">
                Explore Team
              </Link>
              <Link to="/about" className="action-btn secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Discover Users</h3>
              <p className="feature-description">
                Browse through a diverse collection of profiles from around the
                world
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3 className="feature-title">Save Favorites</h3>
              <p className="feature-description">
                Like your favorite profiles and save them for later access
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3 className="feature-title">Quick Contact</h3>
              <p className="feature-description">
                Easily reach out to profiles with integrated contact information
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3 className="feature-title">Dark Mode</h3>
              <p className="feature-description">
                Comfortable viewing experience with light and dark theme support
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">Ready to Explore?</h2>
          <p className="cta-description">
            Start discovering amazing profiles and connecting with talented
            individuals today
          </p>
          <Link to="/team" className="cta-button">
            Get Started →
          </Link>
        </section>
      </div>
    </div>
  );
}
