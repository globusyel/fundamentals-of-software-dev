// typeof zwraca string, który reprezentuje typ danego wyrażenia lub zmiennej
// przykład użycia: typeof x, gdzie x to zmienna lub wyrażenie.
const value = 42;
console.log(typeof value); // "number"


// instanceof jest operatorem dwuargumentowym, który sprawdza, czy obiekt jest instancją konkretnej klasy lub konstruktora.
// (nie do określenia ogólnego typu zmiennej lub wartości)
// jest używany w kontekście dziedziczenia 
// Przykład użycia: obiekt instanceof Klasa, gdzie obiekt to obiekt, a Klasa to konstruktor lub klasa.
class Klasa {}
const obiekt = new Klasa();
console.log(obiekt instanceof Klasa); // true
