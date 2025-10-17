// src/pages/About/About.jsx
import { Link } from "react-router-dom";
import "./About.css";

export default function About({ darkMode }) {
  return (
    <div className={`about-page ${darkMode ? "dark" : "light"}`}>
      <div className="about-container">
        {/* Header */}
        <section className="about-header">
          <h1 className="about-title">About InstaBoard</h1>
          <p className="about-subtitle">
            Connect, Discover, and Explore Amazing Profiles Worldwide
          </p>
        </section>

        {/* Main Content */}
        <section className="about-content">
          {/* What is InstaBoard */}
          <div className="content-section">
            <h2 className="content-title">What is InstaBoard?</h2>
            <p className="content-text">
              InstaBoard is a modern web application designed to help you
              discover and connect with talented individuals from around the
              world. Whether you're looking to network, collaborate, or simply
              explore amazing profiles, InstaBoard makes it easy and fun.
            </p>
          </div>

          {/* Our Mission */}
          <div className="content-section">
            <h2 className="content-title">Our Mission</h2>
            <p className="content-text">
              Our mission is to create a seamless platform where people can
              showcase their talents, connect with others, and build meaningful
              relationships. We believe in the power of human connection and the
              value of networking.
            </p>
          </div>

          {/* Key Features */}
          <div className="content-section">
            <h2 className="content-title">Key Features</h2>
            <ul className="features-list">
              <li>🌍 Browse profiles from all around the world</li>
              <li>❤️ Save your favorite profiles for quick access</li>
              <li>📞 Contact information readily available</li>
              <li>🌙 Beautiful dark and light themes</li>
              <li>📱 Fully responsive design for all devices</li>
              <li>⚡ Fast and smooth user experience</li>
            </ul>
          </div>

          {/* Technology */}
          <div className="content-section">
            <h2 className="content-title">Built With Modern Technology</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <span className="tech-name">React</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🔀</span>
                <span className="tech-name">React Router</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">💾</span>
                <span className="tech-name">localStorage</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🎨</span>
                <span className="tech-name">CSS3</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🌐</span>
                <span className="tech-name">Random User API</span>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📦</span>
                <span className="tech-name">Axios</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2 className="cta-title">Ready to Explore?</h2>
          <p className="cta-description">
            Start discovering amazing profiles and connecting with talented
            individuals today!
          </p>
          <div className="cta-buttons">
            <Link to="/team" className="cta-btn primary">
              Explore Team
            </Link>
            <Link to="/" className="cta-btn secondary">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
