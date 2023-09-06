import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import About from './components/About/AboutMe.jsx';
import Contact from './components/Contact/ContactMe.jsx';
import Footer from './components/Footer/Foot.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Resume from './components/Resume/Resume.jsx';
import { Outlet } from "react-router-dom";

function App() {
  return ( 
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
