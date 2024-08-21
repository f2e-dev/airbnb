import { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'

import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo(() => {
  const [selectedItems, setSelectedItems] = useState([])

  const handleClickItem = (item) => {
    let newSelectedItems = [...selectedItems]
    if (newSelectedItems.includes(item)) {
      newSelectedItems = newSelectedItems.filter(
        (selectedItem) => selectedItem !== item
      )
    } else {
      newSelectedItems.push(item)
    }
    setSelectedItems(newSelectedItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames('item', {
                active: selectedItems.includes(item)
              })}
              key={item}
              onClick={() => handleClickItem(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
