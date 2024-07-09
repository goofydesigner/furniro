import './App.css';

// react router dom imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages imports
import Navbar from './components/navbar/navbar';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
  },
  {
    path: '/test',
    element: <div>Test</div>,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
