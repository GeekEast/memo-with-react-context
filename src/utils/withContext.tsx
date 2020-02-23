import React, { useContext } from 'react'
import _ from 'lodash';

const withContext = (ctx_obj) => (path) => (Component) => (intermediate_props: any) => {
  const { children, ...props } = intermediate_props;
  const ctx = useContext(ctx_obj);
  return <Component ctx={_.get(ctx, path)} {...props} >{!!children && children}</Component>
}

export default withContext;
