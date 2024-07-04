import './App.css';

// react router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages imports
import Navbar from "./components/navbar/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/test",
    element: <div>Test</div>,
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
