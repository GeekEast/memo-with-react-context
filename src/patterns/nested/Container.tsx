import React, { useState, memo, useContext } from 'react'
import { Provider, MyContext } from 'patterns/nested/MyContext';
import { smartStrictEqual } from 'utils';
import WithContainer from 'components/hocs/WithContainer';

const debug = false;
// This Component only manages the provision of context
const Container = () => {
  const [state, setState] = useState({ a: 1 });
  !!debug && console.log('Level 1 render');

  return (
    <div className="container">
      <Provider value={state}>
        <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
          <div className="card-body">
            <h3 className="card-title">Level 1: Provider</h3>
            <button className="btn btn-success" onClick={() => setState({ ...state, a: state.a + 1 })}>Update Context</button>
          </div>
        </div>
        <Level2 />
      </Provider>
    </div>
  )
}

// Presentation Component
const Level2 = memo(() => {
  !!debug && console.log('Level 2 render')
  return (
    <div>
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 2: media</h3>
        </div>
      </div>
      <Level3 />
    </div>
  )
}, smartStrictEqual())

// Presentation Component
const Level3 = memo(() => {
  !!debug && console.log('Level 3 render')
  return (
    <div>
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 3: media</h3>
        </div>
      </div>
      <Level4 />
    </div>
  )
}, smartStrictEqual())

// Presentation Component
const Level4 = memo((props: any) => {
  !!debug && console.log('Level 4 component render');
  const ctx = useContext(MyContext) as any;
  return (
    <div>
      <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 4: Consumer</h3>
          {`Context Value: ${ctx.a}`}
        </div>
      </div>
      <Level5 />
    </div>
  )
}, smartStrictEqual());

// Presentation Component
const Level5 = memo(() => {
  !!debug && console.log('Level 5 render');
  const [number, setNumber] = useState(0)
  return (
    <>
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 5: media</h3>
          <button className="btn btn-success" onClick={() => { setNumber(number + 1) }}>Update State</button>
        </div>
      </div>
    </>
  )
})

export default WithContainer(Container);
