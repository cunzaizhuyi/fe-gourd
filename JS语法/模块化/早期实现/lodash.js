
(function (window) {
    function f1() {
        console.log('lodash.js-f1')
    }
    function f2() {
        console.log('lodash.js-f2')
    }
    window.lodash = {f1, f2};
})(window)