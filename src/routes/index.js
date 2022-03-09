import { Navigate } from 'react-router-dom'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Invoices from '../views/Invoices'
import Login from '../views/Login'
import Page404 from '../views/Page404'
import Team from '../views/Team'

/*
 * @Author: Joshua
 * @Date: 2022-03-02 15:50:16
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-09 10:40:55
 */
const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'invoices',
        element: <Invoices />
      },
      {
        path: 'team',
        element: <Team />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'page404',
    element: <Page404 />
  },
  {
    path: '*',
    element: <Navigate to='page404' replace />
  }
]

export { routes }
