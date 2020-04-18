// filter方法的使用
let arr = [1, 2, 3, 4];
let newArr = arr.filter(function (item) {
   return item > 2; 
});
// console.log(newArr);


// 实现filter方法
 Array.prototype.filter2 = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let flag = fn (this[i]);
        if (flag) {
            newArr.push(this[i]);
        }
    }
    return newArr;
 };
let arrNew2 = arr.filter2(function (item) {
    return item > 2;
 });
console.log(arrNew2);

