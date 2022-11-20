import Login from "./pages/login/login.component";
import Register from './pages/register/register.component';

import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";

import './App.scss'
import Navbar from "./components/navbar/navbar.component";
import Leftbar from "./components/leftbar/leftbar.component";
import Rightbar from "./components/rightbar/rightbar.component";
import Home from "./pages/home/home.component";
import Profile from "./pages/profile/profile.component"

function App() {

  const currentUser = false;

  const Layout = () => {
    return (<div>
      <Navbar />
      <div style={{display: "flex"}}>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </div>)
  }

  // to check for login
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
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
