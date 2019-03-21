// 给一个数，求平方根
function sqrt(n) {
  let sqrt;
  for(let i =0; i<= n; i++){
    if (i * i == n) {
      sqrt = i;
    }
  }
  return sqrt;
}
console.log(sqrt(4));