import React, { memo } from 'react'

const PairComponent = () => {
  console.log('Level 4 Pair Component render');
  return (
    <div>
      Pair
    </div>
  )
}

export default memo(PairComponent);
