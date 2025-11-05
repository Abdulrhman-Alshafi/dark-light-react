import { useNotify } from "../hooks/useNotify";
import { useTheme } from "../hooks/useTheme";
import { useUser } from "../hooks/useUser";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();
  const { notify } = useNotify();
  const handleLogin = () => {
    login("John Doe");
    notify("Logged in successfully!");
  };
  const handleLogout = () => {
    logout();
    notify("Logged out successfully!");
  };
  return (
    <nav
      style={{
        background: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>🌍 Multi-Level App</h2>
      <div>
        <button onClick={toggleTheme} style={{ marginRight: "1rem" }}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        {user ? (
          <>
            <span style={{ marginRight: "1rem" }}>Hello, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
