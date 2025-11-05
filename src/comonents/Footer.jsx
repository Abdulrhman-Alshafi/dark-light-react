import { useTheme } from "../hooks/useTheme";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      style={{
        background: theme === "light" ? "#ddd" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <p>© 2025 ContextAPI Advanced Demo — Theme: {theme}</p>
    </footer>
  );
};
export default Footer;
