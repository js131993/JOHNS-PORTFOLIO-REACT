
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from "react-dom";

import App from './App.jsx';
import About from './components/About/AboutMe.jsx';
import Contact from './components/Contact/ContactMe.jsx';
import Resume from './components/Resume/Resume.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
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

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
