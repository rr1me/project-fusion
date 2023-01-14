import React from 'react';
import AppRouter from './router/AppRouter';
import AuthorizationPopup from './components/popups/authorizationPopus/AuthorizationPopup';
import UserCart from './components/userCart/UserCart';
const App = () => {
  return (
    <>
      <UserCart/>
      {/* <AuthorizationPopup/> */}
      <AppRouter />
    </>
  );
};

export default App;
