/*
 * @Author: Joshua
 * @Date: 2022-02-28 10:58:32
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-09 10:52:06
 */
import { useNavigate, useRoutes } from 'react-router-dom'
import { observer, useStore } from './hooks/storeHooks'
import { routes } from './routes'
import { getSession } from './utils'
import AuthRoute from './views/AuthRoute'

const App = () => {
  const element = useRoutes(routes)
  const navigate = useNavigate()
  const userInfo = getSession('userInfo')
  const routeList = getSession('routeList')
  console.log(userInfo)
  console.log(routeList)

  const handleSignOut = () => {
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('routeList')
    navigate('/login')
  }

  return (
    <>
      {userInfo ? (
        <button onClick={() => handleSignOut()}>退出当前账号</button>
      ) : null}
      <AuthRoute>{element}</AuthRoute>
    </>
  )
}

export default observer(App)
