


// 简单模拟：支持绑定对象 + 两步传参
// my_bind方法不仅可以绑定对象，还可以传参
Function.prototype.my_bind = function(context){
    var args = Array.prototype.slice.call(arguments, 1); //args [7, 8]
    var self = this;
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments); //innerArgs [9]
        var finalArgs = args.concat(innerArgs); //finalArgs [7, 8, 9]
        return self.apply(context, finalArgs);
    }
};

//测试
function fn(m, n, o){
    return this.name + ' ' + m + ' ' + n + ' ' + o;
}
var obj = {name : 'kong'};
console.log(fn.my_bind(obj, 7, 8)(9, 10)); // 注意， 这里故意多传一个参数，不要紧的会忽略。这个跟apply的实现有关







