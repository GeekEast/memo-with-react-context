import React, { useState } from 'react'
import { debug } from "./Composite";

const Level1 = (props: any) => {
  !!debug && console.log('Level 1 render');
  const [state, setState] = useState({ a: 1 });
  const {children} = props;
  return (
    <>
      <div className="container">
        <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
          <div className="card-body">
            <h3 className="card-title">Level 1: Provider</h3>
            <button className="btn btn-success" onClick={() => setState({ ...state, a: state.a + 1 })}>Update Context</button>
            <span style={{ margin: '1rem' }}>{`Count: ${state.a}`}</span>
          </div>
        </div>
      </div>
      {!!children && children}
    </>
  )
}

export default Level1;
