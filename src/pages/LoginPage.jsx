import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

const LoginPage = ({ onLogin, isLoggedIn }) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(username, password);
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>{t('Log in')}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">{t('Username')}</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">{t('Password')}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{t('Log in')}</button>
      </form>
    </div>
  );
};

export default LoginPage;
