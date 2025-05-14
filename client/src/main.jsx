import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Post from './components/pages/Post/Post'

import App from './App'
import './index.css'
import Users from './components/pages/Users/Users'
import Contact from './components/pages/Contact/Contact'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/'
      },
      {
        path: '/post',
        element: <Post></Post>,
        loader: () => fetch('http://localhost:5500/posts')
      },
      {
        path: '/user',
        element: <Users></Users>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
