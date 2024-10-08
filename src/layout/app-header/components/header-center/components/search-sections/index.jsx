import { memo } from 'react'
import PropTypes from 'prop-types'

import { SectionsWrapper } from './style'

const SearchSections = memo((props) => {
  const { searchInfo } = props

  return (
    <SectionsWrapper>
      {searchInfo.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== searchInfo.length - 1 && <div className="divider"></div>}
          </div>
        )
      })}
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfo: PropTypes.array
}

export default SearchSections
