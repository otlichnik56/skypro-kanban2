import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("user");
    return userInfo ? JSON.parse(userInfo) : null;
  };

  const [userData, setUserData] = useState(getUserFromLocalStorage());

  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [userData]);

  const logout = () => {
    setUserData(null);
  };

  const logon = (newUser) => {
    setUserData(newUser);
  };

  return (
    <UserContext.Provider value={{ userData, logout, logon }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;