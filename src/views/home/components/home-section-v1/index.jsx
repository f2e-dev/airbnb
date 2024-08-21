import { memo } from 'react'
import PropTypes from 'prop-types'

import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { data } = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionRooms roomList={data.list} />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  data: PropTypes.object
}

export default HomeSectionV1
