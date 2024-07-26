var n = 1;
// liczba ma prototyp?
console.log(typeof Object.getPrototypeOf(n)); // object
// można jej dopisać pole/funkcję?
n.foo = "foo";
console.log(n.foo); // undefined

/*
Wartości prostych typów danych(liczby, stringi, boolean, null) nie są obiektami
Dla nich prototypy są zazwyczaj obiektami opakowującymi

Dla 1 (number), prototypem jest obiekt opakowujący Number. Dlatego typeof Object.getPrototypeOf(n) daje "object"
Wartości liczbowe nie posiadają prototypów, które można modyfikować (n.foo = "foo") -> undefined
Żeby dodać dodatkowe metody do liczby, trzeba użyć obiektu opakowującego (new Number(1))
*/
