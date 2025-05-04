import { createContext, useState, useContext, useEffect } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("contactMessages");
    return saved ? JSON.parse(saved) : [];
  });

  const addMessage = (message) => {
    setMessages(prev => {
      const updated = [...prev, message];
      localStorage.setItem("contactMessages", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    // Optional: re-sync messages in case they change externally
    const saved = localStorage.getItem("contactMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  return (
    <ContactContext.Provider value={{ messages, addMessage }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
