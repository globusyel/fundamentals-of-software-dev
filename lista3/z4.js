// koncepcja funkcji zwrotnych (chaining functions)


function sump(x) {
    var _sum = x;
    var _f = function (y) {
        _sum += y;
        return _f;
    }
    _f.valueOf = function () {
        return _sum;
    }
    return _f;
}

console.log(+ sump(3)(7)(10)); 

sum(3, 7)

function sum(...args) {
    
}