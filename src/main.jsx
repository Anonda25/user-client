import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import AddUser from './Components/AddUser/AddUser.jsx'
import ShowUsers from './Components/AddUser/ShowUsers.jsx'
import Update from './Components/AddUser/Update.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/addusers',
        element:<AddUser></AddUser>
      },
      {
        path:'/showusers',
        element:<ShowUsers></ShowUsers>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
