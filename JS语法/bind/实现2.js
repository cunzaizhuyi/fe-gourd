
// 最终模拟：支持绑定对象 + 两步传参 + new
// new对this的影响比bind优先级要高，
// g虽然通过bind绑定了this指向的对象为{a:1}，
// 但是使用new g调用的时候，this仍然指向以f为构造函数的实例。
// bind返回的函数如果作为构造函数，搭配new关键字出现的话，我们绑定的this就需要被忽略
// 处理构造函数场景下的兼容
Function.prototype.bind = function(context) {
    //确保调用bind方法的一定要是一个函数
    if (typeof this !== "function") {
        throw new TypeError("只能使用函数调用本方法");
    }

    var args = Array.prototype.slice.call(arguments, 1);
    var self = this;
    var F = function () {};
    F.prototype = this.prototype;
    var bound = function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return self.apply(this instanceof F ? this : context || this, finalArgs);
    };
    bound.prototype = new F();
    return bound;
};

//测试
function fn2(m, n, o){
    return this.name + ' ' + m + ' ' + n + ' ' + o;
}
var obj2 = {name : '李四'};
fn2.bind(obj2, 7, 8)(9);       //kong 7 8 9