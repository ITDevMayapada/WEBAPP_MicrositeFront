import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login'
import Index from './pages/index'
import SideBar from './base/sidebar'
import Header from './base/header'
import MasterUser from './pages/master-user'
import NotFound from './pages/404'
import "./index.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header>
    <Index/>
    </Header>,
    errorElement: <Header>
    <NotFound/>
    </Header>,
  },
  {
    path: "/index",
    element: <Header>
    <Index/>
    </Header>
  },
  {
    path: "/master-user",
    element: <Header><MasterUser/></Header>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/sidebar",
    element: <SideBar/>
  },
  {
    path: "/header",
    element: <Header/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
