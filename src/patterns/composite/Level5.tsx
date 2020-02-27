import React, { useState } from 'react'

const Level5 = () => {
  console.log('Level 5 render');
  const [number, setNumber] = useState(0)
  return (
    <div className="container">
      <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 5: media</h3>
          <button className="btn btn-success" onClick={() => { setNumber(number + 1) }}>Update State</button>
        </div>
      </div>
    </div>
  )
}

export default Level5
