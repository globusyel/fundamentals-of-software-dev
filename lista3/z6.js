// Definicja funkcji generującej liczby Fibonacciego do określonego n
function fibGenerator(n) {
    // Funkcja zwraca inny generator
    return function fib() {
        var _f0 = 0;
        var _f1 = 1;
        var _temp = 0;

        return {
            next: function() {
                _temp = _f0;
                _f0 = _f1;
                _f1 = _temp + _f1;
                return {
                    value: _f1,
                    done: false
                };
            }
        };
    };
}

// Generator liczb Fibonacciego bez argumentu (generuje nieskończoność i wysypia się)
function* fibGeneratorYield(current = 0, next = 1) {
    yield current; // yield -> zatrzymanie wykonania i zwrócenie wartości
    yield* fibGeneratorYield(next, current + next); // yield* -> rekurencyjne wywołanie generatora
}

// Generator n-liczb Fibonacciego z argumentem
function* fibGeneratorYield_N(n, current = 0, next = 1) {
    if (n === 0)
        return current; // Zakończ generator, zwracając ostatnią wartość

    yield current;
    yield* fibGeneratorYield_N(n - 1, next, current + next);
}

var n = 50; // Liczba Fibonacciego, do której chcemy generować liczby

// Iterowanie za pomocą generatora bez yield (wykorzystuje obiekt iteratora)
var fibGen = fibGenerator(n); // Utworzenie generatora
var _it = fibGen(); // Pobranie iteratora

for (var _result; _result = _it.next(), !_result.done;) {
    console.log(_result.value); // Wyświetlenie wartości
}

// Generator używający yield generuje liczby tak jak ten bez argumentu:
var _itYield = fibGeneratorYield(); // Utworzenie generatora
for (var _result; (_result = _itYield.next()), !_result.done, _result.value <= n;) {
    console.log(_result.value); // Wyświetlenie wartości, dopóki są mniejsze lub równe n
}

// Iterowanie za pomocą for-of nie działa dla zwyklego generatora:
// for (var i of fibGenerator())
//     console.log(i)
// TypeError: fibGenerator is not a function or its return value is not iterable


// W przypadku generatora używającego yield z argumentem 
// generowane są wartości dla wszystkich liczb do F_n:
var _itYieldN = fibGeneratorYield_N(n); // Utworzenie generatora z argumentem
for (var _result; _result = _itYieldN.next(), !_result.done;) {
    console.log(_result.value); // Wyświetlenie wszystkich wartości
}
