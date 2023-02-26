import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

const ProfilePage = ({ isLoggedIn }) => {
  const { t } = useTranslation();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>{t('Profile')}</h1>
      <p>{t('You are logged in.')}</p>
    </div>
  );
};

export default ProfilePage;
