import { memo } from 'react'
import PropTypes from 'prop-types'

import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { data } = props

  return (
    <LongforWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {data.list.map((item) => {
            return <LongforItem key={item.city} itemData={item} />
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  data: PropTypes.object
}

export default HomeLongfor
