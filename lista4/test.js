// Obiektowość z { }, bez dziedziczenia
function Person(name, surname) {
  return {
    name: name,
    surname: surname,
    say: function () {
      return `${this.name} ${this.surname}`;
    },
  };
}

// niestety każdy obiekt ma swoją unikalną funkcję say -> ciało tej metody wielokrotnie powtarzamy w pamięci
// nadużywanie pamięci
var p1 = Person("jan", "kowalski");
var p2 = Person("liza", "ilman");
console.log(p1.say());
console.log(p2.say());
console.log("-------------");

// Obiektowość prototypowa
var p = {
  name: "jan",
  say: function () {
    return this.name;
  },
};

var q = {};

// prototypem q będzie p
Object.setPrototypeOf(q, p);

// q ma metodę say, bo pochodzi ona z prototypu
console.log(q.say());

// say pochodzi z prototypu, name z q
q.name = "tomasz";
console.log(q.say());

// say i name pochodzą z q
q.say = function () {
  return this.name + " from q";
};
console.log(q.say());

// say pochodzi z q, name z prototypu
delete q.name;
console.log(q.say());

console.log("-------------");
/*
null oznacza że wartość jest w danym obiekcie (tylko jest pusta) i nie trzeba kontynuować
poszukiwania w łańcuchu prototypów
• undefined oznacza że wartości nie ma w danym obiekcie i trzeba kontynuować przeszukiwanie
łańcucha prototypów
*/
var o = {
  foo: null,
};

var proto = {
  foo: 1,
  bar: 2,
};

Object.setPrototypeOf(o, proto);

// foo pochodzi z obiektu o
console.log(o.foo);
// bar pochodzi z obiektu proto,
// bo bar nie występuje w foo
console.log(o.bar);
console.log("-------------");

// Obiektowość z new
function Foo() {
  this.prop = 1;
}

Foo.prototype.say = function () {
  return this.prop;
};

var foo1 = new Foo();
var foo2 = new Foo();
console.log(foo1.say());

var PersonNew = function (name, surname) {
  this.name = name;
  this.surname = surname;
};

PersonNew.prototype.say = function () {
  return `${this.name} ${this.surname}`;
};

var p = new PersonNew("jan", "kowalski");
console.log(p.say());

var Worker = function (name, surname, age) {
  // wywołanie bazowej funkcji konstruktorowej
  PersonNew.call(this, name, surname);
  this.age = age;
};

// powiązanie łańcucha prototypów
Worker.prototype = Object.create(PersonNew.prototype);
Worker.prototype.say = function () {
  // "wywołanie metody z klasy bazowej"
  var _ = PersonNew.prototype.say.call(this);
  return `${_} ${this.age}`;
};
var w = new Worker("jan", "kowalski", 48);
console.log(w.say());

console.log("-------------");
//Sporo obiektów ma jako prototypy obiekty z właściwych funkcji konstruktorowych.
var ob = {};
// true
console.log(Object.getPrototypeOf(ob) === Object.prototype);
function fooo() {}
// true
console.log(Object.getPrototypeOf(fooo) === Function.prototype);
var st = "ala ma kota";
// true
console.log(Object.getPrototypeOf(st) === String.prototype);

/*
w trakcie działania programu możemy do "klasy" dodać dynamicznie jakąś
metodę i wszystkie instancje tej klasy automatycznie dostają tę nową metodę

można w ten sposób nawet rozszerzyć dowolny obiekt prototypowy z biblioteki
języka, dodając wszystkim istniejącym obiektom o takim prototypie nową funkcjonalność
*/
