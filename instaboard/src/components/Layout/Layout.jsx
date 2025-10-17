import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout({ darkMode, toggleDarkMode, children }) {
  return (
    <div className={`layout ${darkMode ? "dark" : "light"}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="layout-main">
        <div className="layout-content">{children}</div>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
