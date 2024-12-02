import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Components/MainLayout/MainLayout.jsx'
import Home from './Components/Home/Home.jsx'
import AddUser from './Components/AddUser/AddUser.jsx'
import ShowUsers from './Components/AddUser/ShowUsers.jsx'
import Update from './Components/AddUser/Update.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Users from './Components/Users/Users.jsx'
import SignIn from './Components/SignUp/SignIn.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addusers',
        element: <AddUser></AddUser>
      },
      {
        path: '/showusers',
        element: <ShowUsers></ShowUsers>,
        loader: () => fetch('https://new-user-server-two.vercel.app/users')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://new-user-server-two.vercel.app/users/${params.id}`)
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },{
        path:'/Users',
        element:<Users></Users>,
        loader: () => fetch('https://new-user-server-two.vercel.app/user')
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
