import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Routes>
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
