import { memo } from 'react'

import { styleStrToObject } from '@/utils'

const IconClose = memo((props) => {
  const { size = 24 } = props

  return (
    <svg
      viewBox="0 0 12 12"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={styleStrToObject(
        `height: ${size}px; width: ${size}px; display: block; fill: #fff`
      )}
    >
      <path
        d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
})

export default IconClose
