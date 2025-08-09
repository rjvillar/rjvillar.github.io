import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await new Promise((resolve) =>
        setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000)
      );
      setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
