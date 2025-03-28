import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { createBrowserRouter } from 'react-router-dom';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import './index.css'
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import Github from './Components/Github/GitHub.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:id",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
