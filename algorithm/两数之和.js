//  给定一个数组和一个目标数值，求和为目标数值的数组两项的下标

let arr = [1,3,5,8,9];
let des = 10;
function twoSum (arr, des) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      let dif = des - arr[i];
      if (newArr[dif] !== undefined) {
        return [newArr[dif], i];
      }
      newArr[arr[i]] = i;
    }
}
console.log(twoSum(arr, des));