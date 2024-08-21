import { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { PicturesWrapper } from './style'
import PictureBrowser from '@/base-ui/pricture-browser'

const DetailPictures = memo(() => {
  const { roomData } = useSelector((state) => {
    return {
      roomData: state.detailReducer.roomData
    }
  }, shallowEqual)
  const [isRenderPictureBrowser, setIsRenderPictureBrowser] = useState(false)

  const handleClosePictureBrowser = () => {
    setIsRenderPictureBrowser(false)
  }

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={() => setIsRenderPictureBrowser(true)}>
            <img src={roomData?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {roomData?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={() => setIsRenderPictureBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="show-all-pictures"
        onClick={() => setIsRenderPictureBrowser(true)}
      >
        显示所有照片
      </div>
      {isRenderPictureBrowser && (
        <PictureBrowser
          pictures={roomData?.picture_urls}
          handleClosePictureBrowser={handleClosePictureBrowser}
        />
      )}
    </PicturesWrapper>
  )
})

export default DetailPictures
