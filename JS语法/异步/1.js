
// 是不是一定要执行完主线任务以后，才执行异步任务呢
// 答案是是的。即使下面那两个循环超过1秒。也得先走完两个循环

setTimeout(() => {
    console.log('yibu')
}, 1000)


for(let i = 0; i < 100000; i++){
    console.log(i);
}

for(let i = 0; i < 10000; i++){
    console.log(i + 'SSS')
}