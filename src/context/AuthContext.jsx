import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Admin Credentials
const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "admin123",
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const login = ({ email, password }) => {
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      const user = { email };
      setUser(user);
      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(user));
      return { success: true };
    }
    return { success: false, message: "Invalid admin credentials." };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);
