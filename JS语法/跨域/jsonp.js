
// 没事就手写

function jsonp({url, params, cb}){
    // 参数处理
    let arr = [];
    for(let k in params){
        arr.psuh(`${k}=${params[k]}`)
    }
    arr.join('&');

    // 用script标签发请求，拿结果
    let s = ducument.createElement('script');
    s.src = url + '?' + queryStr;
    document.body.appendChild(s);
    Window[params.cb] = cb;
}

let url = 'www.baidu.com';
let params = {
    a: 'aa',
    cb: 'show'
}
jsonp({url, params, cb: (v) => {
    console.log(v);
}})