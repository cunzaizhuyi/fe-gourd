

function debounce(fn, delay){
    let timeId;
    return function (){
        clearTimeout(timeId)
        timeId = setTimeout(() => {
            fn()
        }, delay)
    }
}