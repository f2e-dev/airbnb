import { memo, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { data } = props
  const tabNames = data.dest_address?.map((item) => item.name)
  const initialName = Object.keys(data.dest_list)[0]
  const [name, setName] = useState(initialName)

  const handClickTab = useCallback((index, item) => {
    setName(item)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={handClickTab} />
      <SectionRooms roomList={data.dest_list?.[name]} roomItemWidth="33.3%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  data: PropTypes.object
}

export default HomeSectionV2
