import React, { memo, useState } from 'react'
import { smartStrictEqual } from 'utils';
import { debug } from './Composite';

// Presentation Component
const Level2 = (props: any) => {
  !!debug && console.log('Level 2 render')
  const [count, setCount] = useState(0);
  const { children } = props;
  return (
    <>
      <div className="container">
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
          <div className="card-body">
            <h3 className="card-title">Level 2</h3>
            <button className="btn btn-success" onClick={() => setCount(c => c + 1)}>Update State</button>
            <span style={{ margin: '1rem' }}>{`Count: ${count}`}</span>
          </div>
        </div>
      </div>
      {!!children && children}
    </>
  )
}

export default memo(Level2, smartStrictEqual({ type:"composite"}));



