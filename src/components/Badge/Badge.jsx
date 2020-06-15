import React from 'react'

import './Badge.css'

const Badge = ({ discount }) => {
  return discount ? (
    <span className='badge badge--discount'>{`- ${discount}`}</span>
  ) : (
    ''
  )
}

export default Badge
