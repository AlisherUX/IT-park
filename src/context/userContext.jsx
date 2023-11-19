import { createContext, React, useEffect } from "react";
import { useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(!!localStorage.getItem("token"));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
