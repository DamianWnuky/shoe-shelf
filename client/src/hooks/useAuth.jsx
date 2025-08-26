import { useState, useEffect, createContext, useContext } from 'react';
import { authAPI } from '../api/auth.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (authAPI.isAuthenticated()) {
          const storedUser = authAPI.getStoredUser();
          setUser(storedUser);
          
          // Verify token is still valid
          try {
            const response = await authAPI.getCurrentUser();
            setUser(response.data.user);
          } catch (error) {
            // Token is invalid, clear auth data
            authAPI.logout();
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      setError(null);
      const response = await authAPI.login(credentials);
      const { user, token } = response.data;
      
      authAPI.storeAuthData(token, user);
      setUser(user);
      return response;
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      setError(null);
      const response = await authAPI.register(userData);
      const { user, token } = response.data;
      
      authAPI.storeAuthData(token, user);
      setUser(user);
      return response;
    } catch (error) {
      setError(error.response?.data?.error || 'Registration failed');
      throw error;
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
