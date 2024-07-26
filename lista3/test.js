function foo(n) {
return n + 1;
}

var bar = function(n) {
return n + 1;
}

var qux = n => n + 1;

console.log(foo(1), bar(1), qux(1));

// Domyślne wartości argumentów
function defaultArgs(a=1, b=2) {
 console.log(a,b);
}

defaultArgs();

//Wywoływanie z pominiętymi argumentami
function omittedArgs(a, b, c, d, e) {
 console.log(a,b,c,d,e);
}
omittedArgs(...[, ,], 1, ...[, ,]);

var d = new Date();
console.log(d);

/*
funkcja może zwracać inną funkcję jako wynik
przyjmować funkcje jako argument
*/

function f({name, surname, address: {city, number}={}}) {
 console.log(name);
 console.log(surname);
 console.log(city);
 console.log(number);
}
f({});
f({name:"jan"});
f({ name: "jan", surname: "kowalski", address: { city: 'wroclaw', number: 17 } })

/*
mają zasięg funkcyjny - zmienna lokalna jest widoczna nie w bloku, a w całej funkcji
żeby zdefiniować w kontekście blokowym - używamy let 
*/

// funkcja przekazana jako argument do innej
function apply(f, n) {
return f(n);
}
console.log(apply(x => x + 1, 1));

// funkcja zwrócona jako wartość z innej
function create() {
return function() {
return 1;
}
}
console.log( create()() ); // dlaczego ()() ?

var a = [1,2,3,4];
console.log( a.find( x => x >= 2 ) );
console.log( a.map( x => x + 1 ) );
console.log(a.sort((x, y) => y - x));



function sump(x) {
 var _sum = x;
 var _f = function(y) {
 _sum += y;
 return _f;
    } 
 _f.valueOf = function() {
 return _sum;
 }
 return _f;
}

console.log( +sump(4)(5)(6) ); 