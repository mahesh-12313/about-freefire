import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/Contactus.jsx';
import Loginpage from './components/Login page/Loginpage.jsx';
import User from './components/User/User.jsx';
import Getstarted from './components/get started/Getstarted.jsx';
import Signup from './components/Signup/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contactus', element: <Contact /> },
      { path: 'Loginpage', element: <Loginpage /> },
      { path: 'User/:Userid', element: <User /> },
      { path: 'Getstarted', element: <Getstarted /> },
      { path: 'Signup', element: <Signup /> },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
