import React from 'react';
import AppRouter from './router/AppRouter';
import AuthorizationPopup from './components/popups/authorizationPopus/AuthorizationPopup';

const App = () => {
  return (
    <>
      <AuthorizationPopup/>
      <AppRouter />
    </>
  );
};

export default App;
