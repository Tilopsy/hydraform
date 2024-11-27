import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/landing-page';
import RootLayout from './layouts/rootLayout';
import About from './pages/landing-page/about';
import { ToastContainer } from "react-toastify";
import Blog from './pages/landing-page/blog';
import Contact from './pages/landing-page/contact';
import Hero from './pages/landing-page/hero';
import Services from './pages/landing-page/services';
import Testimonials from './pages/landing-page/components/testimonials';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/hero',
          element: <Hero />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/testimonials',
          element: <Testimonials />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
