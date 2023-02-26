import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'Admin&8181') {
      setIsLoggedIn(true);
    } else {
      alert(t('Invalid credentials'));
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <HomePage />
                ) : (
                  <Navigate to="/login" replace={true} />
                )
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage onLogin={handleLogin} isLoggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/profile"
              element={
                isLoggedIn ? (
                  <ProfilePage isLoggedIn={isLoggedIn} />
                ) : (
                  <Navigate to="/login" replace={true} />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
