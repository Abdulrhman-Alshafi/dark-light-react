import { NotificationProvider } from "./contexts/NotificationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider></ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
}

export default App;
