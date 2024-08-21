import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const { titles, handleClickTab } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClickTabItem = (index) => {
    setCurrentIndex(index)
    if (handleClickTab) {
      handleClickTab(index)
    }
  }

  return (
    <TabsWrapper>
      {titles.map((item, index) => {
        return (
          <div
            className={classNames('item', { active: currentIndex === index })}
            key={item}
            onClick={() => handleClickTabItem(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array,
  tabClick: PropTypes.func
}

export default SearchTabs
