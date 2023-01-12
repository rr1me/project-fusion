import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={'SOSI'}/>
        <Route path={'*'} element={'404 NOT FOUND'}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;