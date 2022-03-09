import { useStore, observer } from '../hooks/storeHooks'
/*
 * @Author: Joshua
 * @Date: 2022-03-02 15:46:25
 * @LastEditors: Joshua
 * @LastEditTime: 2022-03-02 15:47:58
 */

const Invoices = observer(() => {
  const { userStore } = useStore()
  return (
    <>
      <h1>Invoices</h1>
      <p>store:{JSON.stringify(userStore)}</p>
      <p>
        <button onClick={() => userStore.updateName('lijianhua')}>
          更新name的值
        </button>
        <button onClick={() => userStore.updateName('joshua')}>
          重置name的值
        </button>
        <button onClick={() => userStore.increaseAge()}>更新age的值</button>
      </p>
    </>
  )
})

export default Invoices
