/*
 * @Author: Joshua
 * @Date: 2022-03-07 14:22:50
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-09 11:23:36
 */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore, observer } from '../hooks/storeHooks'
import { getRouteList, getUserInfo, login } from '../server'
import { getSession } from '../utils'

const Login = () => {
  const { userStore } = useStore()
  const userInfo = getSession('userInfo')
  const routeList = getSession('routeList')
  const navigate = useNavigate()
  const handleGetRouteList = () => {
    getRouteList().then(res => {
      res = [...res, '/login', '/page404']
      sessionStorage.setItem('routeList', JSON.stringify(res))
      userStore.setRouteList(res)
      setTimeout(() => {
        navigate(res[0], { replace: true })
      }, 20)
    })
  }
  const handleGetUserInfo = () => {
    getUserInfo().then(res => {
      sessionStorage.setItem('userInfo', JSON.stringify(res))
      userStore.setUserInfo(res)
    })
  }
  const handleLogin = () => {
    login().then(res => {
      handleGetRouteList()
      handleGetUserInfo()
    })
  }
  useEffect(() => {
    userInfo && routeList && navigate(routeList[0])
  })
  return (
    <>
      <div>Login</div>
      <button onClick={() => handleLogin()}>登录</button>
    </>
  )
}

export default observer(Login)
