import React from 'react';
import AppRouter from './router/AppRouter';
import AuthorizationPopup from './components/popups/authorizationPopus/AuthorizationPopup';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/slices/authSlice';
import UserCard from './components/ui/userCard/UserCard';
import Header from './components/semantic/header/Header';
import ProjectCard from './components/ui/projectCard/ProjectCard';
import ProfileInfo from './components/ui/profileInfo/ProfileInfo';



const App = () => {
  const dispatch = useDispatch()
  const onClickAuth = () => {
    dispatch(setUserData(true))
  }
  return (
    <>
      <Header/>
      {/* <AuthorizationPopup /> */}
       <ProfileInfo/>
      {/* <UserCard/>
      <ProjectCard/> */}
      <button onClick={onClickAuth}>421412421</button>
      <AppRouter />
    </>
  );
};

export default App;
