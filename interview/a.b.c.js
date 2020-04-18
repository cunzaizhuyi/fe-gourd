

function f(obj, str) {
    let arr = str.split('.');
    let v;
    for(let i = 0; i < arr.length; i++){
        if (!obj[arr[i]]){
            return;
        }
        obj = obj[arr[i]];
        v = obj;
    }
    return v;
}

let o = {
    a: {
        b: {
            c: 'saf'
        }
    }
}
let s = 'a.b.c'
console.log(f(o, s))