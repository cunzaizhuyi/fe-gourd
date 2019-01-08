// 在文件中打印，this是{}，不是global。
// 但是在命令行中打印this，是global。
// 因为node的文件是一个模块，有独立作用域，this指的是当前文件

// console.log(this)
// console.log(global)
// console.log(this === global) // false. ans: {}

// a类似于web前端中函数里的局部变量
let a = 1;
console.log(this.a) // undefined
console.log(global.a) //undefined


// time, timeEnd方法
console.time('loop')
for (let i = 0; i < 1000000; i++){
  if (2 < 1) {
    console.log(33333)
  }
}
console.timeEnd('loop')
