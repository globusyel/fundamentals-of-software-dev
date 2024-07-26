"use strict";
function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    }
    else {
        return 1;
    }
}
function memo(f) {
    const cache = {};
    return function (n) {
        if (cache[n] === undefined) {
            const f_n = f(n);
            cache[n] = f_n;
            return f_n;
        }
        else {
            return cache[n];
        }
    };
}
const memoizedFib = memo(fib);
console.log(memoizedFib(100));
console.log(memoizedFib(101));
