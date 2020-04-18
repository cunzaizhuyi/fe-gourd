
let s1 = new Set([1,2,3,4,5])
let s2 = new Set([2,3,4,5,6])

// 并集
console.log(new Set([...s1, ...s2]))

// 交集
let jiaoji = [...s1].filter((val) => {
    return s2.has(val);
});
console.log(jiaoji);


// 差集： s1 - s2表示s1有s2没有
let diff = [...s1].filter((val) => {
    return !s2.has(val);
});
console.log(diff);