// 合并两个有序数组
function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    result = result.concat(left[il] ? left.slice(il) : right.slice(ir));
    return result;
}
var left = [1, 4, 7, 8, 9, 10];
var right = [2, 5];
console.log(merge(left, right))

// 合并N个有序数组, 把N个数组放置到arr里面
function mergeMultiArray(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr = merge(newArr, arr[i])
  }
  return newArr;
}
let a1 = [1, 2, 3, 4];
let a2 = [5, 6, 7, 8];
let a3 = [9, 11, 13, 15];
let a4 = [10, 12, 14, 16];
console.log(mergeMultiArray([a1, a2, a3, a4]));