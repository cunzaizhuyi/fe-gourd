
let arr = [1,2,3];
let obj = {
    name: 'zs',
    age: 11
}

// 正是因为该函数可以将array和object都转化为同种k/v形式。所以用它做深拷贝方案不用区分这两种情况分别遍历
console.log(JSON.stringify(Object.entries(arr), null, 2))
console.log(JSON.stringify(Object.entries(obj), null, 2))