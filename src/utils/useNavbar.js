// src/hooks/useNavbar.js
import { useState, useEffect } from 'react';

const useNavbar = () => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("authToken"));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { token };
};

export default useNavbar;
