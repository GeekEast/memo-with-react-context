import React, { useState, memo } from 'react';
import { Provider, MyContext } from './MyContext';
import withContext from './utils/withContext';
import { smartStrictEqual } from './utils/index'

const App = () => {
  const [state, setState] = useState({ a: 1 });
  console.log('Level 1 render');

  return (
    <div>
      <Provider value={state}>
        <h1>1st Provider</h1>
        <button onClick={() => setState({ ...state, a: state.a + 1 })}> Update </button>
        ⬇
        <Level2></Level2>
      </Provider>
    </div>
  )
}

export const CX = memo((props) => {
  console.log('cx rendered');
  return (
    <div>
      {props.children};
      
    </div>
  )
}, smartStrictEqual);


const Level2 = memo(() => {
  console.log('Level 2 render')
  return (
    <div>
      <h2>2nd Level</h2>
      ⬇
      <Level3></Level3>
    </div>
  )
}, smartStrictEqual)

const Level3 = memo(() => {
  console.log('Level 3 render')
  return (
    <div>
      <h3>3rd Level</h3>
      ⬇
      <Level4>
        <Level5 />
      </Level4>
    </div>
  )
}, smartStrictEqual)


const Level4Component = memo((props: any) => {
  const { ctx, children } = props;
  console.log('Level 4 component render');
  return (
    <div>
      <h4>4th Consumer</h4>
      <h5>{`a:${ctx.a}`}</h5>
      {/* <button onClick={() => { setContext({ a: '2', b: '1' }) }}>Change Context</button> */}
      {children}
      {/* <Level5></Level5> */}
    </div>
  )
}, smartStrictEqual);

const Level4 = withContext(MyContext)(['a'])(Level4Component);

const Level5 = () => {
  console.log('Level 5 render');
  const [number, setNumber] = useState(0)
  return (
    <>
      <h5>5th Level</h5>
      <button onClick={() => { setNumber(number + 1) }}>Update 5</button>
    </>
  )
}

export default App;
