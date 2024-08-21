import axios from 'axios'

class Request {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 10000
    })

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

const request = new Request()

export default request
