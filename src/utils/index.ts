import deepEqual from 'fast-deep-equal';
import { equal } from 'fast-shallow-equal';

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
  const prevType = getType(prev);
  const nextType = getType(next);
  if (prevType !== nextType) return Object.is(prev, next);
  if (prevType === 'Array') return deepEqual(prev, next);
  if (prevType !== 'Object') return Object.is(prev, next)
  if (deepObject(prev) || deepObject(next)) return deepEqual(prev, next)
  return equal(prev, next)
}