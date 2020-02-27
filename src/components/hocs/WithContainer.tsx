import React from 'react'

const WithContainer = (Component) => () => {
  return (
    <div className="container">
      <Component />
    </div>
  )
}

export default WithContainer
