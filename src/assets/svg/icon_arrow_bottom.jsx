import { memo } from 'react'

import { styleStrToObject } from '@/utils'

const IconArrowBottom = memo((props) => {
  const { size = 12 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        `display: block; fill: none; height: ${size}px; width: ${size}px; stroke: currentcolor; stroke-width: 4; overflow: visible;`
      )}
    >
      <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
    </svg>
  )
})

export default IconArrowBottom
