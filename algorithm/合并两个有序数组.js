function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    result = result.concat(left[il] ? left.slice(il) : right.slice(ir));
    return result;
}
var left = [1, 4, 7, 8, 9, 10];
var right = [2, 5];
console.log(merge(left, right))