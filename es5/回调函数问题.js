// 1 没有返回值
// 2 try catch 不到
// 3 回调地狱

//  主要说一下2
let fs = require('fs')
function read (filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    throw new Error('出错了')
    console.log(err, data)
  })
}

try{
  read('./aaa.txt')
}catch(e){
  console.log('err', e)
}
