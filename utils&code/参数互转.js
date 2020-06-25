

// get请求参数转json
let toJson = (str) => {
    let obj = {};
    str = str.slice(1);
    let arr = str.split('&');
    for(let i = 0; i < arr.length; i++){
        obj[arr[i][0]] = arr[i].slice(2);
    }
    return obj;
}

console.log(toJson('?a=1&b=2'))