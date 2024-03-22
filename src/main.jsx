import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';

import AppliedJobs from './AppliedJobs';
import ErrorPages from './components/ErrorPages';

import JobDetail from './JobDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children: [
     {
      path: '/',
      element:<Home></Home>
     },
     {
      path: '/applied',
      element: <AppliedJobs></AppliedJobs>
     },
     {
      path:'/job/:id',
      element:<JobDetail></JobDetail>,
      loader:() => fetch('../jobs.json')
       
     }


    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

