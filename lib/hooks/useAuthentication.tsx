import { useEffect, useState } from 'react';

export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () =>
      setIsAuthenticated(!!localStorage.getItem('token'));

    checkAuthentication();

    window.addEventListener('storage', checkAuthentication);

    return () => window.removeEventListener('storage', checkAuthentication);
  }, []);

  return isAuthenticated;
};
