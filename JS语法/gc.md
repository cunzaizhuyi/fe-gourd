# 垃圾回收的3个问题

虽然浏览器是自动垃圾回收，但如果编码有内存泄漏的情况，
gc的策略没法生效。
```
let arr = [1,2,3]
console.log('hello world')
```
声明了arr却一直没有用，如果浏览器是“引用计数策略”， 就无法回收[1,2,3]这个对象

## 1、浏览器垃圾回收的两种策略
* 引用计数 reference counting
* 标记清除 mark --> sweep

## 2、怎么判断内存泄漏
* Chrome中performance面板下，start record -->> stop
* node下 process.memoryUsage返回一个对象，其中headUsed键值对指的就是内存占用

## 3、避免内存泄漏方法
* 手动清除对对象的引用
* weakMap弱引用