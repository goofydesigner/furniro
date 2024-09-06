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
import SingleItem from './pages/singleItem/SingleItem';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Cart from './pages/cart/Cart';
import Comparison from './pages/comparison/Comparison';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';


const router = createBrowserRouter([

  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        // element: <Home />,
        // element: <SingleItem />,
        // element: <ShoppingCart/>,
        // element: <Cart/>,
        // element: <Checkout/>,
        element: <Comparison/> ,
        // element: <Contact/>,

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
