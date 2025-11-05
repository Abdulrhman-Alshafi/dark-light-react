import Dashboard from "./comonents/Dashboard";
import Footer from "./comonents/Footer";
import Navbar from "./comonents/Navbar";
import NotificationBar from "./comonents/NotificationBar";
import { NotificationProvider } from "./contexts/NotificationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import Profile from "./pages/Profile";

function App() {
  return (
    <NotificationProvider>
      <UserProvider>
        <ThemeProvider>
          <Navbar />
          <Dashboard />
          <Profile />
          <Footer />
          <NotificationBar />
        </ThemeProvider>
      </UserProvider>
    </NotificationProvider>
  );
}

export default App;
