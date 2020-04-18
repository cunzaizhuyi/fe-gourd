// 深拷贝
function deepClone(objOrArr, target){
  if (typeof objOrArr !== 'object'){
    return objOrArr;
  }
  target = target || {};
  for(let key in objOrArr){
    if (typeof key === 'object' && typeof item !== 'null'){
      if(Array.isArray(objOrArr[key])){
        deepClone(objOrArr[key], []);
      }else {
        deepClone(objOrArr[key], {});
      }
    }else{
      target[key] = objOrArr[key];
    }
  }
  return target;
}

console.log(deepClone({
  name: 'ff',
  car: [1,2,3],
  son: {
    first: 'son1',
    second: 'son2'
  }
},{}));
console.log(deepClone([1,2,[1,2,3], {name:'33'}], []))