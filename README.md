### Smart Equal
- **讨论前提**: data is immutable
- **注意**: function is mutable
#### Reference Equal
- 针对**0**个`{}`的有效

#### [Shallow Compare](https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js)
- 针对只有**1**个`{}`的对象有效

#### [Deep Compare](https://github.com/epoberezkin/fast-deep-equal)
- 针对**大于1**个`{}`的对象有效


### memo in Component Composition
#### 组合的两种方式
- 作为内部元素
```javascript
// A的re-render会引起B的re-render
const ComponentA = () => (
  <ComponentB/>
)
```
- 作为`props`传入
```javascript
// A的re-render不会引起B的re-render
// App的re-render会引起A和B的re-render
const App = () => (
  <ComponentA>
    <ComponentB/>
  <ComponentA/>
)
```
#### 两者区别
- 内部元素: A的re-render会引起B的re-render
- props传入: 
  - App的re-render才会引起B的re-render，A不会; 
  - B的re-render势必引起A的re-render, 因为B作为props传入了A
  - 对A使用memo是无效的，因为children中包含函数，结果一定不同
#### 实例
- 背景: 无任何`memo`
- 问题: `C0` re-render时, 哪些组件会跟着re-render?
- 分析: `C1`, `C2`, `C3`都会re-render, 因为**字面上**，它们都是`C0`的子组件
```javascript
const C0 = (props) => {
  return (
    <div>
      C0 Component
      <C1>
          <C2>
            <C3/>
          </C2>
      </C1>
    </div>
  )
}
```
- 背景: 除`C0`外全部使用`memo`, 采用`smartStrictEqual`方法
- 问题: `C0`re-render时, 哪些组件会跟着re-render?
- 分析:
  - C3的props中**无**children，使用memo后不会重新渲染;
  - C2的props中**有**children，memo无法阻止渲染;
  - C1的props中**有**children, memo无法阻止渲染;

