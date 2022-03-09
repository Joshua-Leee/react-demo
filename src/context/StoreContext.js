import { createContext } from 'react'
import store from '../store'

/*
 * @Author: Joshua
 * @Date: 2022-03-01 11:39:49
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-05 18:38:20
 */

const StoreContext = createContext(store)
export default StoreContext
