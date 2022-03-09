import { useStore, observer } from '../hooks/storeHooks'
import { Link, Outlet, useLocation } from 'react-router-dom'
/*
 * @Author: Joshua
 * @Date: 2022-03-02 15:45:32
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-07 16:10:19
 */
const Dashboard = () => {
  const { userStore } = useStore()
  const location = useLocation()
  return (
    <div>
      <p>location:{JSON.stringify(location)}</p>
      <h1>Dashboard</h1>
      <p>store:{JSON.stringify(userStore)}</p>
      <p>fullName: {userStore.fullName}</p>
      <p>
        <button onClick={() => userStore.updateName('lijianhua')}>
          更新name的值
        </button>
        <button onClick={() => userStore.updateName('joshua')}>
          重置name的值
        </button>
        <button onClick={() => userStore.increaseAge()}>更新age的值</button>
      </p>
      <nav>
        <Link to='invoices'>Invoices</Link> <Link to='team'>Team</Link>{' '}
        <Link to='nopage'>No Page</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default observer(Dashboard)
