import React from 'react'

const withHOC = (Component) => (i_props: any) => {
  const { children, ...props } = i_props;
  return (
    <Component {...props}>
      {!!children && children}
    </Component>
  )
}

export default withHOC
