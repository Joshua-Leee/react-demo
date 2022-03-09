/*
 * @Author: Joshua
 * @Date: 2022-03-08 17:29:20
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-09 11:12:54
 */
import { Navigate, useLocation } from 'react-router-dom'
import { getSession } from '../utils'

const AuthRoute = ({ children }) => {
  const userInfo = getSession('userInfo')
  const routeList = getSession('routeList')
  const location = useLocation()

  if (
    location.pathname !== '/login' &&
    routeList &&
    !routeList.includes(location.pathname)
  ) {
    return <Navigate to='page404' replace />
  }

  return location.pathname === '/login' || userInfo ? (
    children
  ) : (
    <Navigate to='/login' state={location} replace />
  )
}

export default AuthRoute
