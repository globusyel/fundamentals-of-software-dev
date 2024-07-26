// this sprawia, że są dostępne publicznie
// umieszczenie ich jako zmienne lokalne  (bez przypisania do this) sprawia,
// że stają się one prywatne i są dostępne tylko wewnątrz funkcji konstruktora

function Foo() {
  // Zmienna prywatna
  var priVar = "To jest zmienna prywatna";

  // Metoda publiczna
  this.Bar = function () {
    console.log("Metoda publiczna Bar");

    // Funkcja prywatna metody Bar dostępna tylko wewnątrz domknięcia funkcji Foo
    Qux();
  };

  function Qux() {
    console.log(priVar);
  }
}

// Utworzenie nowego obiektu Foo
var myFoo = new Foo();

// Wywołanie metody publicznej Bar -> funkcji prywatnej Qux
myFoo.Bar();
