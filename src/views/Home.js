import { Link, useLocation } from 'react-router-dom'
import { useStore, observer } from '../hooks/storeHooks'

/*
 * @Author: Joshua
 * @Date: 2022-03-01 17:17:08
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-07 16:13:48
 */
const Home = () => {
  const { userStore } = useStore()
  const location = useLocation()
  return (
    <>
      <p>location:{JSON.stringify(location)}</p>
      <p>store:{JSON.stringify(userStore)}</p>
      <Link to='/dashboard'>dashboard</Link>
    </>
  )
}

export default observer(Home)
