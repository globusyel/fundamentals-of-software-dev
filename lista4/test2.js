var person = {
  init: function (name, surname) {
    this.name = name;
    this.surname = surname;
  },
  say: function () {
    return `${this.name} ${this.surname}`;
  },
};

var p = Object.create(person);
p.init("jan", "kowalski");
console.log(p.say());

var worker = Object.create(person);
worker.init = function (name, surname, age) {
  // "wywołanie konstruktora klasy bazowej"
  person.init.call(this, name, surname);
  this.age = age;
};
worker.say = function () {
  // "wywołanie metody z klasy bazowej"
  var _ = person.say.call(this);
  return `${_} ${this.age}`;
};

var w = Object.create(worker);
w.init("tomasz", "malinowski", 48);
console.log(w.say());
