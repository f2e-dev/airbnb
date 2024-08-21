import { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  )
})

SectionHeader.proTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default SectionHeader
