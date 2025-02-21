"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import STORAGE from "../../constants/storage";
import Profile from "../../services/Profile";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const userId = Cookies.get("iduser");
    if (!userId) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const response = await Profile.getUserById(userId);
      setUser(response.data.content);
    } catch (error) {
      console.error("Lỗi khi lấy user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);  // Gọi lại fetchUser mỗi khi iduser trong cookies thay đổi

  return (
    <UserContext.Provider value={{ user, setUser, loading, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook để sử dụng UserContext
export const useUser = () => useContext(UserContext);
