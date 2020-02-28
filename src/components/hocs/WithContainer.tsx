import React, { memo } from 'react'
import { smartStrictEqual } from '../../utils/index';

const WithContainer = (Component) => () => {
  console.log('render Container Pattern')
  const MemoizedComponent = memo(Component, smartStrictEqual());
  return (
    <div className="container">
      <MemoizedComponent />
    </div>
  )
}

export default WithContainer
