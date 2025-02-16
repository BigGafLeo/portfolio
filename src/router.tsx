import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { RootLayout } from './pages/RootLayout';
import { ErrorPage } from './pages/Error';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/about', element: <About /> },
//   { path: '*', element: <NotFound /> },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'aboutme',
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        index: true,
        element: <Contact />,
      },
      {
        path: 'projects',
        index: true,
        element: <Projects />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
