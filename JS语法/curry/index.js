

function curryAdd(fn){
    let len = 0;
    let args = [];
    let recurse = function (){
        let curLen = len + arguments.length;
        if (curLen === 3){
            return fn(...args, ...Array.prototype.slice.call(arguments));
        } else {
            len = curLen;
            args = args.concat(Array.prototype.slice.call(arguments));
            return recurse
        }
    }
    return recurse
}


function fn(a, b, c){
    return a + b + c
}

let curryFn = curryAdd(fn);
// console.log(curryFn(1)(2)(3));
console.log(curryFn(1,2)(3));