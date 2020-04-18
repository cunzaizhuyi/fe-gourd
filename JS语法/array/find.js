// find方法的使用
let arr3 = [1,2,3,4];
let item = arr3.find(function (item) {
    return item === 3;
});
console.log(item);


// 实现find方法
Array.prototype.find2 = function (fn) {
    let item;
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (flag) {
            return this[i];
        }
    }
};
let item2 = arr3.find(function (item) {
    return item === 3;
});
console.log(item2);

