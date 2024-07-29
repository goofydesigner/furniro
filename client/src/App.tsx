import './App.css';

// react router dom imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// auth provider import
import { AuthProvider } from './utils/AuthContext';
import PrivateRoutes from './utils/PrivateRoutes';

// pages imports
// import Navbar from './components/navbar/navbar';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Footer from './components/footer/Footer';
import ProductCard from './components/Product_card/ProductCard';
import BlogPost from './components/blog_post/BlogPost';
import Shop from './pages/shop/Shop';
import Home from './pages/home/Home';


const router = createBrowserRouter([

  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/test',
        element: <div>Test</div>,
      },
      {
        path: '/footer',
        element: <Footer />,
      },
      {
        path: '/card',
        element: <ProductCard />,
      },
      {
        path: '/blogpost',
        element: <BlogPost />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },

  {
    path: '/signin',
    element: <Signin />,
  },

  {
    path: '/signup',
    element: <Signup />,
  },
  
  {
    path: '*',
    element: <div>Page not found</div>,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
