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

export const smartStrictEqual = (options = { type: 'container' }) => (prev, next) => {
  const { type } = options;
  let prevProps = prev;
  let nextProps = next;

  if (type === 'composite') {
    const { children: _1, ..._prev } = prev;
    const { children: _2, ..._next } = next;
    prevProps = _prev;
    nextProps = _next;
  }

  const prevType = getType(prevProps);
  const nextType = getType(nextProps);
  if (prevType !== nextType) return Object.is(prevProps, nextProps);
  if (prevType === 'Array') return deepEqual(prevProps, nextProps);
  if (prevType !== 'Object') return Object.is(prevProps, nextProps)
  if (deepObject(prevProps) || deepObject(nextProps)) return deepEqual(prevProps, nextProps)
  return equal(prevProps, nextProps)
}