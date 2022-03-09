/*
 * @Author: Joshua
 * @Date: 2022-03-07 14:04:19
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-08 17:47:18
 */
export const getRouteList = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['/', '/dashboard', '/dashboard/invoices'])
    }, 1000)
  })
}

export const login = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ code: 200 })
    }, 2000)
  })
}

export const getUserInfo = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'lijianhua', age: 25 })
    }, 1000)
  })
}
