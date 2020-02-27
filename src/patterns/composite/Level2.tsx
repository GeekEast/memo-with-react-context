import React, { memo } from 'react'
import { smartStrictEqual } from 'utils';
import { debug } from './Composite';

// Presentation Component
const Level2 = () => {
  !!debug && console.log('Level 2 render')
  return (
    <div className="container">
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 2: media</h3>
        </div>
      </div>
    </div>
  )
}

export default Level2



