import { memo } from 'react'
import PropTypes from 'prop-types'

import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { data } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="room-list">
        <ScrollView>
          {data.list.map((item, index) => (
            <RoomItem key={item.id} itemData={item} itemWidth="25%" />
          ))}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  data: PropTypes.object
}

export default HomeSectionV3
