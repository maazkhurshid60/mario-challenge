import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';

import router from './routes/router.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(


  // DELETING this line for git activity 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
