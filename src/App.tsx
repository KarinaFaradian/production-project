import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.lazy';
import { MainPageAsync } from './pages/MainPage/MainPage.lazy';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
