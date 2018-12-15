let str = 'dggsowegniovsprwnglvshd';

function findMostCountChar (str) {
  // 单个字符组成的数组
  let charArr = str.split('');
  let charTree = {};
  let length = charArr.length;

  // 构建一棵键值对树
  for (let i = 0; i < length; i++) {
    if (!charTree[charArr[i]]) {
      charTree[charArr[i]] = 1;
    } else {
      charTree[charArr[i]]++;
    }
  }

  // 遍历打印数值最大的属性及其出现次数
  let num = 0;
  let char;
  for (let item in charTree) {
    if (charTree[item] > num) {
      num = charTree[item];
      char = item;
    }
  }
  return {num, char};
}

let v = findMostCountChar (str)
console.log(v);
