import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import Register from './Components/Register.jsx'
import Login from './Components/Login.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import Order from './Components/Order.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Profile from './Components/Profile.jsx'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx'


const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      { index: true, Component: Login },
      { path: 'signup', Component: Register },
      { path: 'orders', element:<PrivateRoute><Order></Order></PrivateRoute> },
      { path: 'dashboard', element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> },
      { path: 'profile', element:<PrivateRoute><Profile></Profile></PrivateRoute>},
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
