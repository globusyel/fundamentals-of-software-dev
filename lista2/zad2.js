/* użycie operatorów . oraz [] do odwoływania się do składowych obiektu

 "." - dostęp za pomocą nazwy bezpośrednio
"[]" - dostęp do właściwości, których nazwa zawiera spacje, znaki specjalne itd
*/

const samochod = {
  marka: "Toyot a",
  rok: 2022
};

// "." 
console.log("Operator '.'");
console.log("Marka: " + samochod.marka);
console.log("Rok: " + samochod.rok);

// "[]" 
console.log("\nOperator '[]'");
console.log("Marka: " + samochod['marka']);
console.log("Rok: " + samochod['rok']);

// -------------------------------------------------------------------------
// traktuje liczbę jako string i próbuje odwołać się do właściwości o takiej nazwie 
const dict_1 = { 1: 'one', 2: 'two' };
const klucz_1 = 1;
console.log(dict_1[klucz_1]); 

// traktuje obiekt jako string i próbuje odwołać się do właściwości o takiej nazwie
const dict_2 = { '[object Object]': 'To jest obiekt' };
const klucz_2 = {};
console.log(dict_2[klucz_2]); 


//----------------------------------------------------------------------------
// traktuje string jako indeks i próbuje odwołać się do elementu o tym indeksie.
const tablica = [1, 2, 3, 4, 5];
console.log(tablica['0']); 

// tak samo jak wyżej
const klucz = {};
console.log(tablica[klucz]); 

/*Jeśli zostanie do tablicy dodana właściwość pod kluczem, który nie jest liczbą
 ta właściwość nie będzie traktowana jako element tablicy */


console.log(tablica.length); 

tablica.length = 3; 
console.log(tablica); 

tablica.length = 7; 
console.log(tablica); 
