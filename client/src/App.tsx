import React from 'react';
import AppRouter from './router/AppRouter';
import AuthorizationPopup from './components/popups/authorizationPopus/AuthorizationPopup';
<<<<<<< HEAD
import UserCart from './components/userCart/UserCart';
const App = () => {
  return (
    <>
      <UserCart/>
=======
import UserCard from './components/userCard/UserCard';
import ProjectCard from './components/projectCard/ProjectCard';
const App = () => {
  return (
    <>
      <ProjectCard/>
      {/* <UserCard/> */}
>>>>>>> b6344c2 (projectCard added)
      {/* <AuthorizationPopup/> */}
      <AppRouter />
    </>
  );
};

export default App;
