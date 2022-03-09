/*
 * @Author: Joshua
 * @Date: 2022-03-09 10:49:14
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-09 10:50:49
 */
const getSession = key => {
  try {
    return JSON.parse(sessionStorage.getItem(key))
  } catch (error) {
    return sessionStorage.getItem(key)
  }
}

const setSession = (key, val) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(val))
  } catch (error) {}
}

export { getSession, setSession }
