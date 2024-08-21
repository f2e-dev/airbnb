import { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './components/home-banner'
import HomeLongfor from './components/home-longfor'
import HomeSectionV1 from './components/home-section-v1'
import HomeSectionV2 from './components/home-section-v2'
import HomeSectionV3 from './components/home-section-v3'

import { setHeaderConfigAction } from '@/store/modules/main'
import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyObject } from '@/utils'

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      setHeaderConfigAction({
        isFixed: true,
        isTopTransparency: true
      })
    )
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  const {
    discountData,
    hotRecommenddestData,
    longForData,
    goodPriceData,
    highScoreData,
    plusData
  } = useSelector((state) => {
    return {
      discountData: state.homeReducer.discountData,
      hotRecommenddestData: state.homeReducer.hotRecommenddestData,
      longForData: state.homeReducer.longForData,
      goodPriceData: state.homeReducer.goodPriceData,
      highScoreData: state.homeReducer.highScoreData,
      plusData: state.homeReducer.plusData
    }
  }, shallowEqual)

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(discountData) && <HomeSectionV2 data={discountData} />}
        {isEmptyObject(hotRecommenddestData) && (
          <HomeSectionV2 data={hotRecommenddestData} />
        )}{' '}
        {isEmptyObject(longForData) && <HomeLongfor data={longForData} />}
        {isEmptyObject(goodPriceData) && <HomeSectionV1 data={goodPriceData} />}
        {isEmptyObject(highScoreData) && <HomeSectionV1 data={highScoreData} />}
        {isEmptyObject(plusData) && <HomeSectionV3 data={plusData} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
