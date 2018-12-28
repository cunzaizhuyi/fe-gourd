function deepClone (objOrArray) {
    if (typeof objOrArray !== 'object') {
        return -1;
    }
    if (Array.isArray(objOrArray)) {
        let newArray = [];
        for (let i = 0; i < objOrArray.length; i++) {
            if (typeof objOrArray[i] !== 'object') {
                newArray.push(objOrArray[i])
            } else {
                newArray.push(deepClone(objOrArray[i]));
            }
        }
        return newArray;
    } else {
        let obj = {};
        for (let key in objOrArray) {
            if (typeof objOrArray[key] !== 'object') {
                obj[key] = objOrArray[key];
            } else {
                obj[key] = deepClone(objOrArray[key]);
            }
        }
        return obj;
    }
}
// 对象
let obj = {
    name: 'zzz',
    friend: ['f', 'g', 'h']
};
let newObj = deepClone(obj);
newObj.friend.push('j');
console.log(obj, newObj);

// 数组
let arr = [1,2,3, [4,5], {name: 'f'}];
let newArr = deepClone(arr);
newArr.push({
    age: 12
});
console.log(arr, newArr);