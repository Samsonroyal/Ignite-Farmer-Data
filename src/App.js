import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import EmailVerification from './pages/EmailVerification';
import authService from './api/authService';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Check if user is already authenticated when the app loads
    const checkAuth = () => {
      const isAuth = authService.isAuthenticated();
      setAuthenticated(isAuth);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleAuth = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    authService.logout();
    setAuthenticated(false);
  };

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            authenticated ? <Navigate to="/dashboard" replace /> : <Auth onAuth={handleAuth} />
          } 
        />
        <Route 
          path="/verify-email" 
          element={<EmailVerification />} 
        />
        <Route
          path="/dashboard"
          element={
            authenticated ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route 
          path="/" 
          element={
            <Navigate to={authenticated ? "/dashboard" : "/login"} replace />
          } 
        />
        {/* Add other routes as needed, e.g. weather, longrange, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
