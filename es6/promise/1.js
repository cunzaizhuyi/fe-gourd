let p = new Promise(function(resolve, reject){
  console.log('111111')
  setTimeout(function(){
    let num = Math.random();
    if (num > .5) {
      resolve('succ')
    } else {
      reject('fail')
    }
  }, 2000);
})
p.then(function (value) {
    console.log('成功', value)
}, function (reason) {
    console.log('失败', reason)
})