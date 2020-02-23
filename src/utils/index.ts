import deepEqual from 'fast-deep-equal';
import shallowCompare from 'react-addons-shallow-compare';

const getType = (sth) => {
  return Object.prototype.toString.call(sth).slice(8, -1);
}

const deepObject = (obj) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const type = getType(obj[keys[i]]);
    if (type === 'Object' || type === 'Array') return true
  }
  return false
}

export const smartStrictEqual = (prev, next) => {
  // console.log(prev);
  // console.log(next);
  const prevType = getType(prev);
  const nextType = getType(next);
  // console.log('type check ↓')
  if (prevType !== nextType) return Object.is(prev, next);
  // console.log('array check ↓')
  if (prevType === 'Array') return deepEqual(prev, next);
  // console.log('Object check ↓');
  if (prevType !== 'Object') return Object.is(prev, next);
  // console.log('Deep Object check ↓')
  if (deepObject(prev) || deepObject(next)) {
    // console.log(deepEqual(prev,next));
    // console.log(_.isEqual(prev,next));
    return deepEqual(prev, next)
  }
  // console.log('Shallow Object check')
  return shallowCompare(prev, next)
}
