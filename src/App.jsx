import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import About from './components/About/AboutMe.jsx';
import Contact from './components/Contact/ContactMe.jsx';
import Footer from './components/Footer/Foot.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Resume from './components/Resume/Resume.jsx';

function App() {
  return ( 
    <div className='App'></div>
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //       <Route path="/portfolio">
    //         <Portfolio />
    //       </Route>
    //       <Route path="/resume">
    //         <Resume />
    //       </Route>
    //       <Route path="/">
    //         <About />
    //       </Route>
    //     </Routes>

    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
