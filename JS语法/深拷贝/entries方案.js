

let deepClone = (obj) => {
    if (typeof obj !== 'object') return;

    let res = obj instanceof Array ? []: {};
    for(let [k, v] of Object.entries(obj)){
        res[k] = typeof v === 'object' ? deepClone(v): v;
    }
    return res;
}

let obj = {
    name: 'zs',
    age: 11,
    school:{
        name: 'xhxx',
        age: '15年'
    },
    family: ['mama', 'dad', 'sister']
}

let copy = deepClone(obj);
copy.family.push('brother');
console.log(JSON.stringify(copy, null, 2))
console.log(JSON.stringify(obj, null, 2))
