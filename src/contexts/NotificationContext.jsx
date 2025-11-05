/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { createContext } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [messages, setMessages] = useState(null);
  const notify = (text, timeout = 3000) => {
    setMessages(text);
    setTimeout(() => setMessages(null), timeout);
  };
  return (
    <NotificationContext.Provider value={{ messages, notify }}>
      {children}
    </NotificationContext.Provider>
  );
};
