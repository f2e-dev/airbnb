import { memo, useState, useRef } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

import { ThemeProvider } from 'styled-components'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './components/header-left'
import HeaderCenter from './components/header-center'
import HeaderRight from './components/header-right'

import { useScrollPosition } from '@/hooks'

const AppHeader = memo(() => {
  const { headerConfig } = useSelector((state) => {
    return {
      headerConfig: state.mainReducer.headerConfig
    }
  }, shallowEqual)
  const { isFixed, isTopTransparency } = headerConfig
  const [isSearch, setIsSearch] = useState(false)
  const { scrollY } = useScrollPosition()
  const prevScrollY = useRef(0)
  if (!isSearch) {
    prevScrollY.current = scrollY
  }
  if (isSearch && Math.abs(scrollY - prevScrollY.current) > 30) {
    setIsSearch(false)
  }
  const isTransparency = isTopTransparency && scrollY === 0

  return (
    <ThemeProvider theme={{ isTransparency }}>
      <HeaderWrapper
        className={classNames({
          fixed: isFixed
        })}
      >
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isTransparency || isSearch}
              handleClickHeaderCenter={() => setIsSearch(true)}
            />
            <HeaderRight isTransparency={isTransparency} />
          </div>
          <SearchAreaWrapper $isSearch={isTransparency || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
