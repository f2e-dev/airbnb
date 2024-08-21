import { memo } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = '显示全部'
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()

  const handleClickMore = () => {
    navigate('/entire')
  }

  return (
    <FooterWrapper $name={name}>
      <div className="info" onClick={handleClickMore}>
        <span className="text">{showMessage}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
