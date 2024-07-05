import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';

import router from './routes/router.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Adding this line for git Activity
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
