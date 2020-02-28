import React, { useState, memo } from 'react'
import { debug } from "./Composite";
import { smartStrictEqual } from '../../utils/index';

const Level1 = (props: any) => {
  !!debug && console.log('Level 1 render');
  const [state, setState] = useState({ a: 1 });
  const {children} = props;
  return (
    <>
      <div className="container">
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
          <div className="card-body">
            <h3 className="card-title">Level 1</h3>
            <button className="btn btn-success" onClick={() => setState({ ...state, a: state.a + 1 })}>Update State</button>
            <span style={{ margin: '1rem' }}>{`Count: ${state.a}`}</span>
          </div>
        </div>
      </div>
      {!!children && children}
    </>
  )
}

export default memo(Level1, smartStrictEqual( { type: 'composite' }));
