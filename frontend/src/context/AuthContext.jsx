import React, { createContext, useContext, useEffect, useState } from "react";

// this creates a global storage box for the auth data
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(
          "https://plainly-backend.onrender.com/users/profile",
          {
            credentials: "include",
          },
        );
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  return (
    // makes user,setUser and loading available everywhere inside our app
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
