import Login from "./pages/login/login.component";
import Register from './pages/register/register.component';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './App.scss'

function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
