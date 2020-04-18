function Base(){
  return this;
}
let b = new Base();

// 4step, 若构造器无返回值，则无第四步。
// 1 创建对象 2 将构造函数的作用域给对象（this就指向了对象） 3 执行构造函数（对象就有了属性） 4 返回对象
let obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
return obj;
