import request from '../request'

export const getHomeDiscountData = () => {
  return request.get({
    url: '/home/discount'
  })
}

export const getHomeHotRecommenddestData = () => {
  return request.get({
    url: '/home/hotrecommenddest'
  })
}

export const getHomeLongForData = () => {
  return request.get({
    url: '/home/longfor'
  })
}

export const getHomeGoodPriceData = () => {
  return request.get({
    url: '/home/goodprice'
  })
}

export const getHomeHighScoreData = () => {
  return request.get({
    url: '/home/highscore'
  })
}

export const getHomePlusData = () => {
  return request.get({
    url: '/home/plus'
  })
}
