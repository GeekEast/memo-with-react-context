import React, { memo } from "react";
import { smartStrictEqual } from './utils'
const Level4Component = ({ context }) => {
  console.log('Level 4 component render');
  return (
    <div>
      <h4>4th Level</h4>
      <h5>{`a:${context.a}`}</h5>
      {/* <button onClick={() => { setContext({ a: '2', b: '1' }) }}>Change Context</button> */}
    </div>
  )
}

export default memo(Level4Component, smartStrictEqual);