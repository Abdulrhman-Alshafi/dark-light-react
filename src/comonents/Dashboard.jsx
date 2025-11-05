import { useTheme } from "../hooks/useTheme";
import { useUser } from "../hooks/useUser";

const Dashboard = () => {
  const { theme } = useTheme();
  const { user } = useUser();
  return (
    <div
      style={{
        background: theme === "light" ? "#f5f5f5" : "#111",
        color: theme === "light" ? "#111" : "#eee",
        minHeight: "70vh",
        padding: "2rem",
      }}
    >
      <h1>Dashboard</h1>
      {user ? (
        <p>Welcome back, {user.name}! Here's your dashboard.</p>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
};
export default Dashboard;
