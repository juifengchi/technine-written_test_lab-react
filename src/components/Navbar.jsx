import i18n from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const { t } = useTranslation();

  const handleLogout = e => {
    e.preventDefault();
    onLogout();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('Home')}</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile">{t('Profile')}</Link>
            </li>
            <li>
              <a href="/" onClick={handleLogout}>
                {t('Log out')}
              </a>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">{t('Log in')}</Link>
          </li>
        )}
      </ul>
      <div className="language-select">
        <select onChange={e => i18n.changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
