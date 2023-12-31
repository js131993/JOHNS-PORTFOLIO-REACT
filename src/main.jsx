
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import About from './components/About/AboutMe.jsx';
import Contact from './components/Contact/ContactMe.jsx';
import Resume from './components/Resume/Resume.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

const router = createHashRouter([
  {
    basename: "/JOHNS-PORTFOLIO-REACT",
    path: '/',
    element: <App />,
    children: [
     {
        path: '/Resume',
        element: <Resume />,
      },
       {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/About',
        element: <About />,
      },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);