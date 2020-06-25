// 这是早期
(function (window) {
    function f1() {
        console.log('jquery.js-f1')
    }
    function f2() {
        console.log('jquery.js-f2')
    }
    window.jQuery = {f1, f2};
})(window)


// 后来es6出现了块级作用域，可以按照下面的方式写
{
    function f3() {
        console.log('jquery.js-f3')
    }
    window.jQuery.f3 = f3;
}