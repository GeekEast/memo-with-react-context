import React from 'react'

const Level4 = () => {
  console.log('Level 4 component render');
  return (
    <div className="container">
      <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem", margin: "2rem 0 0 0" }}>
        <div className="card-body">
          <h3 className="card-title">Level 4: Consumer</h3>
        </div>
      </div>
    </div>
  )
}

export default Level4
