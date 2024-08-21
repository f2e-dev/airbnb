import { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { Spin } from 'antd'
import routes from './router'
import AppHeader from './layout/app-header'
import AppFooter from './layout/app-footer'

import { useScrollTop } from './hooks'

const App = memo(() => {
  useScrollTop()

  const fullback = (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Spin tip="Loading" size="large">
        <div
          style={{
            padding: '50px'
          }}
        />
      </Spin>
    </div>
  )

  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={fullback}>
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
