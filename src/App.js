import Login from "./pages/login/login.component";
import Register from './pages/register/register.component';

import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";

import './App.scss'
import Navbar from "./components/navbar/navbar.component";
import Leftbar from "./components/leftbar/leftbar.component";
import Rightbar from "./components/rightbar/rightbar.component";
import Home from "./pages/home/home.component";
import Profile from "./pages/profile/profile.component"

function App() {

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
