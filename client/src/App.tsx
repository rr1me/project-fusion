import React from 'react';
import AppRouter from './router/AppRouter';
import AuthorizationPopup from './components/popups/authorizationPopus/AuthorizationPopup';
<<<<<<< HEAD
<<<<<<< HEAD
import UserCart from './components/userCart/UserCart';
const App = () => {
  return (
    <>
      <UserCart/>
=======
import UserCard from './components/userCard/UserCard';
import ProjectCard from './components/projectCard/ProjectCard';
=======
import UserCard from './components/ui/userCard/UserCard';
import ProjectCard from './components/ui/projectCard/ProjectCard';
>>>>>>> fe970c4 (log btn fix)
const App = () => {
  return (
    <>
      {/* <ProjectCard/> */}
      {/* <UserCard/> */}
<<<<<<< HEAD
>>>>>>> b6344c2 (projectCard added)
      {/* <AuthorizationPopup/> */}
=======
      <AuthorizationPopup/>
>>>>>>> fe970c4 (log btn fix)
      <AppRouter />
    </>
  );
};

export default App;
