
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



保证最多两任务同时执行
// 限流器
class Scheduler {
...
    add(promise) {
        // ...
    }
}
// 模拟异步调用
const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler();
const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => {
        console.log(order);
    }))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

