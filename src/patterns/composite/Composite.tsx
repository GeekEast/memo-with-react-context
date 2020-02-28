import React, { useState } from 'react'
import WithContainer from 'components/hocs/WithContainer';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
export const debug = true;
const Container = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="container btn btn-success" style={{ margin: "1rem 0 0 1rem" }} onClick={() => setCount(c => c + 1)}>Update State</button>
      <div className="alert alert-danger" style={{margin: "1rem 0 0 1rem", width
    : "100%", height: "3rem", textAlign: "center", color:"white"}} role="alert">
        {count}
      </div>
      <Level1>
        <Level2>
          <Level3>
            <Level4></Level4>
          </Level3>
        </Level2>
      </Level1>
    </>
  )
}

export default WithContainer(Container);
