import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router'
import { NextUIProvider } from '@nextui-org/react'
import AuthProvider from './providers/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={router}/>
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
)
