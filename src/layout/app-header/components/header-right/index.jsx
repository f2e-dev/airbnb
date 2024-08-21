import { memo, useState, useEffect } from 'react'

import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo((props) => {
  const { isTransparency } = props

  const [isRenderPanel, setIsRenderPanel] = useState(false)
  useEffect(() => {
    const handleWindowClick = () => {
      setIsRenderPanel(false)
    }
    window.addEventListener('click', handleWindowClick, true)
    return () => {
      window.removeEventListener('click', handleWindowClick, true)
    }
  }, [])

  const handleClickProfile = () => {
    setIsRenderPanel(true)
  }

  return (
    <RightWrapper>
      <div className="global">
        <IconGlobal color={isTransparency ? '#fff' : '#222'} />
      </div>
      <div className="profile" onClick={handleClickProfile}>
        <IconMenu color={isTransparency ? '#fff' : '#222'} />
        <IconAvatar color={isTransparency ? '#fff' : '#6a6a6a'} />
        {isRenderPanel && (
          <div className="panel">
            <div className="top">
              <div>注册</div>
              <div>登录</div>
            </div>
            <div className="bottom">
              <div>帮助中心</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
