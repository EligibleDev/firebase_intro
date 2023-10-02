import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import React from 'react';
import MyRouter from './Routers/MyRouter';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={MyRouter} />
    </HelmetProvider>
  </React.StrictMode>,
)
