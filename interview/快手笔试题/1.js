// -------------------------------------------------------------------
// 11题： 输出下面题目的输出结果
// console.log('A')
// var promise = new Promise(function(resolve, reject) {
//   console.log("c");
//   setTimeout(() => {
//     console.log("d");
//     resolve();
//     reject();
//     resolve();
//   }, 10);
//   setTimeout(()=>{
//     console.log('H')
//   })
// })
// promise.then((res) => {
//   console.log('E')
// })
// promise.then((res) => {
//   console.log('F')
// })
// promise.catch((err) => {
//   console.log('G')
// })
// console.log("B")

// a c b h d e f g(不打印g因为不会调用reject())


// -------------------------------------------------------------------
// 6题 基础题
// console.log(typeof null) // 'object'
// console.log(typeof undefined) // 'undeifined'
// console.log(NaN == undefined) // 不会。false。猜想undefined会类型转化为NaN，不过因为NaN==NaN是false
// // 所以，是false。                      
// console.log(1 + 2 + '3' + 4) // '334'
// let str = '12345f'
// console.log(typeof(str++));  // 不会。'number'。因为str++是NaN
// console.log('a' == new String('a'))  // true

// 自己加的题目：null == undefined 是true

// -------------------------------------------------------------------
// var x = 1, y=0, z=0;
// var add = function(x){
//   return x = x + 1;
// }
// y = add(x);
// function add (x) {
//   return x = x + 3;
// }
// z = add(x);
// console.log(x, y, z); // 1, 2, 2
// 我的理解是1,4,4。
// 原因：函数声明会变量提升，但是函数表达式不会。所以，add表达式覆盖了add声明。而不是相反。

// -------------------------------------------------------------------
// 9、展开数组
// 比如：[1,[2,[3,4,2],2],5,[6]] => [1,2,3,4,2,2,5,6]
// 方法1，字符串化，再变成数组
// function flatten(arr) {
//   return arr.toString().split(',').map(item => {
//     return Number(item);
//   })
// }
// console.log(flatten([1,[2,[3,4,2],2],5,[6]]))

// 方法2， 递归
// function flatten2(arr){
//   let newArr = [];
//   for(let i=0; i<arr.length; i++){
//     if (Array.isArray(arr[i])){
//       newArr = newArr.concat(flatten2(arr[i]))
//     }else{
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(flatten2([1,[2,[3,4,2],2],5,[6]]))

// 方法3 reduce方法


// -------------------------------------------------------
// 2.两种继承
// 借调
// function Parent(){
//   this.name = 'zhansan'
// }
// function Son(){
//   Parent.call(this);
//   this.age = 16;
// }
// let son = new Son();
// console.log(son)
// 2原型链
// function Parent(){
//   this.name = 'hah';
// }
// Parent.prototype.getName = function(){
//   return this.name;
// }
// function Son(){
//   this.name = 'lisi';
// }
// Son.prototype = new Parent();
// let son = new Son();
// console.log(son.getName())


