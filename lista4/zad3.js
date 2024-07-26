var Person = function (name, surname) {
  this.name = name;
  this.surname = surname;
};

Person.prototype.say = function () {
  return `${this.name} ${this.surname}`;
};

var p = new Person("jan", "kowalski");
console.log(p.say());

var Worker = function (name, surname, age) {
  // wywołanie bazowej funkcji konstruktorowej
  Person.call(this, name, surname);
  this.age = age;
};

// powiązanie łańcucha prototypów

/* 
Worker.prototype = Person.prototype;
w tym momencie Worker.prototype i Person.prototype są dokadnie tym samym obiektem
czyli modyfikując Worker.prototype(dodając mu jakąś metodę) modyfikujemy zarówno "podklasę" i "nadklasę"
nie chcemy żeby to było to samo

Worker.prototype = new Person();
argumenty konstruktora Person będą również przekazywane do konstruktora Worker podczas tworzenia obiektu Worker.prototype
-> pamięć jest utracona

jest dobrze
tworzy nowy pusty obiekt i ustawia go jako prototyp
*/
Worker.prototype = Object.create(Person.prototype);

Worker.prototype.say = function () {
  // "wywołanie metody z klasy bazowej"
  var _ = Person.prototype.say.call(this);
  return `${_} ${this.age}`;
};

var w = new Worker("jan", "kowalski", 48);
console.log(w.say());
