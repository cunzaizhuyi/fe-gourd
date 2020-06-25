
//https://juejin.im/post/5b32f552f265da59991155f0#heading-12
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.prototype.all = function(promises){
    let arr = [];
    let cnt = 0;

    return new Promise((resolve,reject)=>{

        for(let i=0;i<promises.length;i++){
            promises[i].then(data=>{
                arr[i] = data;
                cnt++;
                if (cnt === promises.length){
                    resolve(arr);
                }
            },reject)
        }
    })
}
