//https://juejin.im/post/5b32f552f265da59991155f0#heading-3

class Promise{
    constructor(executor){
        if (typeof executor !== 'function'){
            return;
        }

        //控制状态，使用了一次之后，接下来的都不被使用
        this.status = 'pending'
        this.value
        this.reason
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        //定义resolve函数
        let resolve = (data)=>{
            //这里pending，主要是为了防止executor中调用了两次resovle或reject方法，而我们只调用一次
            if(this.status==='pending'){
                this.status = 'resolve'
                this.value = data
            }
        }

        //定义reject函数
        let reject = (data)=>{
            if(this.status==='pending'){
                this.status = 'reject'
                this.reason = data
            }
        }

        //executor方法可能会抛出异常，需要捕获
        try{
            //将resolve和reject函数给使用者
            executor(resolve, reject)
        }catch(e){
            //如果在函数中抛出异常则将它注入reject中
            reject(e)
        }
    }
}


Promise.then = function(onFulfilled, onRejected){
    if(this.status === 'pendding'){
        this.onResolvedCallbacks.push(()=>{
            // to do....
            let x = onFufilled(this.value)
            resolvePromise(promise2,x,resolve,reject)
        })
        this.onRejectedCallbacks.push(()=>{
            let x = onRejected(this.reason)
            resolvePromise(promise2,x,resolve,reject)
        })
    }
    if(this.status === 'resolve'){
        onFulfilled(this.value)
    }
    if(this.status === 'reject'){
        onRejected(this.reason)
    }
}

//resolve方法
Promise.resolve = function(val){
    return new Promise((resolve,reject)=>{
        resolve(val)
    })
}
//reject方法
Promise.reject = function(err){
    return new Promise((resolve,reject)=>{
        reject(err)
    })
}
