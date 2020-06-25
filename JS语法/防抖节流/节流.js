

function throttle(fn, frequency){
    let preTime;
    return function (){
        let now = Date.now()
        if (now - preTime > frequency){
            setTimeout(() => {
                fn();
                preTime = now;
            }, frequency)
        }
    }
}