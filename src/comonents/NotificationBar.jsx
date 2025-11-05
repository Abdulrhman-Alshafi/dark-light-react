import { useNotify } from "../hooks/useNotify";

const NotificationBar = () => {
  const { message } = useNotify();
  if (!message) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        background: "#444",
        color: "#fff",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      {message}
    </div>
  );
};
export default NotificationBar;
