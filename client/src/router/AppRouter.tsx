import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const AppRouter: FC = () => {
  return (
      <Routes>
        <Route path={'/'} element={'main'}/>
        <Route path={'/projects'} element={'projects'}/>
        <Route path={'/teams'} element={'teams'}/>
        <Route path={'/about-us'} element={'about-us'}/>
        <Route path={'*'} element={'404 NOT FOUND'}/>
      </Routes>
  );
};

export default AppRouter;