/*
Jak działają?
map:
- iteracja po elementach tablicy ->  tworzenie nowej tablicy, która zawiera wyniki f(tablica) 

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
// squaredNumbers zawiera [1, 4, 9, 16, 25]

forEach:
- iteracja po elementach tablicy i wykonywanie określonej funkcji dla każdego elementu
- nie zwraca żadnej nowej tablicy i nie modyfikuje oryginalnej tablicy

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// "apple", "banana", "cherry" w konsoli, ale nie zwróci nowej tablicy

filter:
- iteracja po elementach tablicy i tworzenie nowej tablicy elementów, które spełniają określony warunek.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers zawiera [2, 4]
*/

function map(a, f) {
    for (var i = 0; i < a.length; i++)
        a[i] = f(a[i])
}


function forEach(a, f) {
    for (var i = 0; i < a.length; i++)
        f(a[i])
}


function filter(a, f) {
    for (var i = 0; i < a.length; i++)
        if (!f(a[i])) {
            a.splice(i, 1); // usuwamy
            i--; // zmniejszamy indeks (żeby nic nie pominąc)
        }

}

var a = [1, 2, 3, 4];

// Demostracja w postaci funkcji strzałkowych
forEach(a, _ => { console.log(_); }); // [1,2,3,4]


filter(a, _ => _ <= 2);
console.log(a) // [1,2]

a = [1, 2, 3, 4];
map(a, _ => _ * 2);
console.log(a) // [2,4,6,8]



// Demostracja w postaci funkcji zwykłych
var b = [1, 2, 3, 4];

function square(x) {
    return x * x;
}

map(b, square);
console.log(b); //  [1, 4, 9, 16]


function printElement(x) {
    console.log(x);
}

forEach(b, printElement); // 1 4 9 16 (po map jest zmodyfikowana)


function isEven(x) {
    return x % 2 === 0;
}

filter(b, isEven);
console.log(b); // [4, 16]
