//https://juejin.im/post/5b32f552f265da59991155f0#heading-12

//race方法
Promise.race = function(promises){
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            promises[i].then(resolve,reject)
        }
    })
}
