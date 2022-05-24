import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Jane',
    age: 35
  });
  return (
    <UserContext.Provider value={{
      developer: "Javi",
      community: "The Fullstack Devs",
      year: 2022, 
      user, setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}