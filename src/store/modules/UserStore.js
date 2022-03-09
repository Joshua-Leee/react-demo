import { makeAutoObservable } from 'mobx'

/*
 * @Author: Joshua
 * @Date: 2022-03-01 11:23:50
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-07 15:59:14
 */
class UserStore {
  userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || null
  routeList = JSON.parse(sessionStorage.getItem('routeList')) || []
  constructor() {
    makeAutoObservable(this)
  }

  setRouteList(state) {
    this.routeList = state
    // sessionStorage.setItem('routeList', JSON.stringify(this.routeList))
  }

  updateName(state) {
    this.userInfo.name = state
    sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
  }

  setUserInfo(state) {
    this.userInfo = state
    // sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
  }

  increaseAge() {
    this.userInfo.age++
    sessionStorage.setItem('userInfo', JSON.stringify(this.userInfo))
  }

  get fullName() {
    return 'name:' + this.userInfo.name + ',age:' + this.userInfo.age
  }
}

export default new UserStore()
