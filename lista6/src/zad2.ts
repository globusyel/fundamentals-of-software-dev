type MemoFunction = (n: number) => number;

function fib(n: number): number {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    } else {
        return 1;
    }
}

function memo(f: (n: number) => number): MemoFunction {
    const cache: Record<number, number> = {};

    return function (n: number): number {
        if (cache[n] === undefined) {
            const f_n = f(n);
            cache[n] = f_n;
            return f_n;
        } else {
            return cache[n];
        }
    };
}

const memoizedFib: MemoFunction = memo(fib);

console.log(memoizedFib(100));
console.log(memoizedFib(101));
