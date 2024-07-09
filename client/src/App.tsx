import './App.css';

// react router dom imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages imports
import Navbar from './components/navbar/navbar';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';
import Footer from './components/footer/Footer';
import ProductCard from './components/Product_card/ProductCard';
import BlogPost from './components/blog_post/BlogPost';
import Shop from './pages/shop/Shop';
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
