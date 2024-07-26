/*
Pola - właściwości, które przechowują dane.
Pola można dodawać za pomocą Object.defineProperty lub za pomocą myObject.myField = 'field_value';
Metody (Methods):

Metody - funkcje
Metody są zwykle definiowane bezpośrednio w ciele obiektu (np. myObject.myMethod = function() { ... };)

Właściwości z akcesorem get i set muszą być dodawane za pomocą Object.defineProperty 
*/

// Definicja obiektu
const myObject = {
  // Pole
    myField: 'field_value',
  
  // Metoda
  myMethod: function() {
    console.log('This is how my method works');
  },
  
  // Właściwość z akcesorem get i set
  get myProperty() {
    return this.myField;
  },
  set myProperty(value) {
    this.myField = value;
  }
};


myObject.myMethod();
// Ustawienie wartości właściwości z akcesorem set
myObject.myProperty = 'value';
// Odczyt wartości właściwości z akcesorem get
console.log(myObject.myProperty);




const existingObject = {};

// Dodawanie nowego pola za pomocą Object.defineProperty
Object.defineProperty(existingObject, 'newField', {
    value: 'new_field_value',
  writable: true,
  enumerable: true,
  configurable: true
});

// Dodawanie nowej właściwości z akcesorem get i set za pomocą Object.defineProperty
Object.defineProperty(existingObject, 'newProperty', {
  get: function() {
    return this.newField;
  },
  set: function(value) {
    this.newField = value;
  },
  enumerable: true,
  configurable: true
});

// Ustawienie wartości właściwości z akcesorem set
existingObject.newProperty = 'new_value';

// Odczyt wartości właściwości z akcesorem get
console.log(existingObject.newProperty);

