function Base(){
  return this;
}
let b = new Base();

// 4step, 若构造器无返回值，则无第四步。
let obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
return obj;
