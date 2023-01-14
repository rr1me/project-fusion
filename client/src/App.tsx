import React from 'react';
import AppRouter from './router/AppRouter';
import AuthorizationPopup from './components/popups/authorizationPopus/AuthorizationPopup';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/slices/authSlice';
import UserCard from './components/ui/userCard/UserCard';



>>>>>>> c939c70 (update-auth-popup)
const App = () => {
  const dispatch = useDispatch()
  const onClickAuth = () => {
    dispatch(setUserData(true))
  }
  return (
    <>
<<<<<<< HEAD
      {/* <ProjectCard/> */}
      {/* <UserCard/> */}
<<<<<<< HEAD
>>>>>>> b6344c2 (projectCard added)
      {/* <AuthorizationPopup/> */}
=======
      <AuthorizationPopup/>
>>>>>>> fe970c4 (log btn fix)
=======
      <AuthorizationPopup />
      <UserCard/>
      <button onClick={onClickAuth}>421412421</button>
>>>>>>> c939c70 (update-auth-popup)
=======
import UserCard from './components/ui/userCard/UserCard';
import ProjectCard from './components/ui/projectCard/ProjectCard';
import Header from './components/semantic/header/Header';
const App = () => {
  return (
    <>
      <Header/>
      <ProjectCard/>
      <UserCard/>
      {/* <AuthorizationPopup/> */}
>>>>>>> c811b5c (header)
      <AppRouter />
    </>
  );
};

export default App;
