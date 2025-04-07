import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {Profile,Home,Error} from './components'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/error',
    element:<Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
