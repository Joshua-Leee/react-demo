import { useContext } from 'react'
import StoreContext from '../context/StoreContext'
import { observer } from 'mobx-react-lite'
/*
 * @Author: Joshua
 * @Date: 2022-03-01 17:02:44
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-01 17:24:46
 */
function useStore() {
  const store = useContext(StoreContext)
  return store
}

export { useStore, observer }
