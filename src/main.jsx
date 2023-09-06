import App from './App.jsx';
import About from './components/About/AboutMe.jsx';
import Contact from './components/Contact/ContactMe.jsx';
import Resume from './components/Resume/Resume.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';

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
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);