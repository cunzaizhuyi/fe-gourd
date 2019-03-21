// 百度大搜面试题目
// 给定数组arr(n个元素，可能有重复的)，和一个n, 求一个arrB（都是arr的项，保证随机公平性）
function generateArr(arr, n){
  let arrLength = arr.length;
  if (arrLength<n){
    return '数组长度不够'
  }
  let newArr = [];
  let i = 0;
  let randomArr = [];
  while(i < n && randomArr.length <= arrLength) {
    let random = Math.floor(Math.random() * arrLength);
    if (randomArr.indexOf(random) == -1){
      randomArr.push(random);
      if (newArr.indexOf(arr[random]) == -1){
        newArr.push(arr[random]);
        i++;
      }
    }
  }
  if (newArr.length == n){
    return newArr;
  }else{
    return 'fsfsfs';
  };
}
let arr = [1,2,3,4,5,6,7,8,9,9];
console.log(generateArr(arr, 5));