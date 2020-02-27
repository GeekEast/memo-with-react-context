import React, { useState } from 'react'
import WithContainer from 'components/hocs/WithContainer';
import Level1 from './Level1';
import Level2 from './Level2';
export const debug = true;
const Container = () => {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Level1>
        <Level2></Level2>
      </Level1>
    </>
  )
}

export default WithContainer(Container);
