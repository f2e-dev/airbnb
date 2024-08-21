import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'
import './assets/css/index.less'
import store from './store'
import { ConfigProvider } from 'antd'
import theme from './assets/theme'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.color.secondaryColor
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </ConfigProvider>
  </Provider>
)
