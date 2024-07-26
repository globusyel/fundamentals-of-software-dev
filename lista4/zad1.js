function getLastProto(o) {
  var p = o;
  do {
    o = p;
    p = Object.getPrototypeOf(o);
  } while (p); // czyli dopóki p nie jest undefined

  return o;
}

const o1 = {};
const o2 = {};
const o3 = {};

Object.setPrototypeOf(o2, o1);
Object.setPrototypeOf(o3, o2);

const lastProto1 = getLastProto(o1);
const lastProto2 = getLastProto(o2);
const lastProto3 = getLastProto(o3);

// łańcuch prototypów zbiega do jednego obiektu
console.log(lastProto1 === lastProto2); // true
console.log(lastProto1 === lastProto3); // true
console.log(lastProto2 === lastProto3); // true
