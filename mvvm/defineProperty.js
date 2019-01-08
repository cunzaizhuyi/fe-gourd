// 对象属性分两种：数据属性 和 访问器属性

let obj = {};
Object.defineProperty(obj, "name", {
  value: "zhangsan",
  configurable: true, // delete关键字是否生效
  writable: true, // obj.name = "new name"，关系到setter是否生效
  enumerable: true // 关系到for in 循环是否能出来这个属性
});
for (let key in obj) {
  console.log(key);
}

// writable 对应set ()
// value 对应 get()
Object.defineProperty(obj, 'age', {
  configurable:true,
  enumerable:true,
  get () {
    return 28;
  },
  set (v) {
    console.log(v)
  }
});
obj.age = 14;
