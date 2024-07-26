function isFromObject(obj, property) {
  return obj.hasOwnProperty(property);
}

// Object keys
// pola/funkcje występujące tylko w obiekcie
var p1 = {
  name: "jan",
};

var q1 = {
  surname: "kowalski",
};

Object.setPrototypeOf(p1, q1);

console.log(isFromObject(p1, "name")); // t
console.log(isFromObject(p1, "surname")); // false
console.log(isFromObject(p1, "age")); // false
console.log("_______________");

// pola/funkcje występujące w obiekcie oraz jego łańcuchu prototypów
var p2 = {
  name: "jan",
  surname: "malinowski",
};

var q2 = {
  surname: "kowalski",
  age: 28,
};

Object.setPrototypeOf(p2, q2);

console.log(isFromObject(p2, "name")); // true
console.log(isFromObject(p2, "surname")); // true
console.log(isFromObject(p2, "age")); // false
