import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Home')}</h1>
      <p>{t('Welcome to the app!')}</p>
    </div>
  );
};

export default HomePage;
