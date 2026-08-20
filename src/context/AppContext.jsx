import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const savedUser = localStorage.getItem('eduflow_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Invalid user JSON', e);
        localStorage.removeItem('eduflow_user');
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('eduflow_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('eduflow_user');
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
