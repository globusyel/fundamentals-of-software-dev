//wszystkie te funkcje korzystają z tej samej zmiennej i
// bo var ma zasięg funkcyjny
function createFs(n) { // tworzy tablicę n funkcji
    var fs = [];
    // i-ta funkcja z tablicy ma zwrócić i
    for (var i = 0; i < n; i++) {
        fs[i] = function () {
            return i;
        };
    };
    return fs;
}


// let sprawia,ze kazda iteracja petli bedzie tworzyla nową zmiennai w zasiegu bloku:
function createFs_let(n) { // tworzy tablicę n funkcji
    var fs = [];
    // i-ta funkcja z tablicy ma zwrócić i
    for (let i = 0; i < n; i++) {
        fs[i] = function () {
            return i;
        };
    };
    return fs;
}

// Mozna rowniez dodac kolejny poziom zagniezdzenia,
// wtedy w kazdej iteracji bedzie tworzony nowy 
// kontekst wiazania domkniecia.
function createFsNew(n) { // tworzy tablicę n funkcji
    var fs = [];
    // i-ta funkcja z tablicy ma zwrócić i
    for (var i = 0; i < n; i++) {
        fs[i] = (function (j) {
            //j jest dostępna tylko wewnątrz tej funkcji anonimowej, która jest zamykana na wartość i

            return function() { return j; };
        })(i);
    };
    return fs;
}

var myfs = createFs(10);
var myfs_let = createFs_let(10);
var myfsnew = createFsNew(10);

console.log("Funkcja createFs:");
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]());  // druga miała zwrócić 2
console.log(myfs[7]()); 
// 10 10 10 // ale wszystkie zwracają 10!?

console.log("Funkcja createFs po zmianie var na let:");
console.log(myfs_let[0]()); // zwraca 0
console.log(myfs_let[2]()); // zwraca 2
console.log(myfs_let[7]()); // zwraca 7

console.log("Funkcja createFsNew z dodatkowym zagniezdzeniem:");
console.log(myfsnew[0]()); // zwraca 0
console.log(myfsnew[2]()); // zwraca 2
console.log(myfsnew[7]()); // zwraca 7