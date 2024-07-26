function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    }
    else {
        return 1;
    }
}
function memo(f) {
    var cache = {};
    return function (n) {
        if (cache[n] === undefined) {
            var f_n = f(n);
            cache[n] = f_n;
            return f_n;
        }
        else {
            return cache[n];
        }
    };
}
var memoizedFib = memo(fib);
console.log(memoizedFib(100));
console.log(memoizedFib(101));
