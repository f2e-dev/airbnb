import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './components/search-tabs'
import SearchSections from './components/search-sections'

import SearchTitles from '@/assets/data/search_titles'

const HeaderCenter = memo((props) => {
  const { isSearch, handleClickHeaderCenter } = props
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const titles = SearchTitles.map((item) => item.title)

  const handleClickSearchBar = () => {
    if (handleClickHeaderCenter) handleClickHeaderCenter()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        classNames="bar"
        in={!isSearch}
        timeout={200}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={handleClickSearchBar}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="detail"
        in={isSearch}
        timeout={200}
        unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} handleClickTab={setCurrentTabIndex} />
          <div className="search-sections-container">
            <SearchSections
              searchInfo={SearchTitles[currentTabIndex].searchInfo}
            />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

HeaderCenter.propTypes = {
  isSearch: PropTypes.bool,
  handleClickHeaderCenter: PropTypes.func
}

export default HeaderCenter
