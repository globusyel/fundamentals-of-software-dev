console.log((![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]]); 

/*

(![]+[])[+[]] wypisuje "f"
![] - pusta tablica to Object, Object ewaluuje się do true, !true = false
false+[] - binarne dodawanie -> obie strony równania konwertują się w String, otrzymujemy "false"+"" (pusty String), czyli "false"
+[] - unarne dodawanie -> konwersja ToNumber, pusta tablica konwertuje się do 0
"false"[0] - odnosimy się do indeksu 0 napisu -> "f"

(![]+[])[+!+[]] wypisuje "a"
(![]+[]) - to samo co wcześniej -> "false"
+[] - to samo co wcześniej -> 0
!0 - 0 -> false jako boolean, zaprzeczenie to true
+true - unarne dodawanie -> konwersja ToNumber, true zwraca 1
"false"[1] -> "a"

([![]]+[][[]])[+!+[]+[+[]]] - wypisuje "i"
![] - to co wcześniej -> false
[![]] - [false]
[][[]] - undefined
([![]]+[][[]]) - binarne dodawanie -> obie strony równania konwertują się w String, otrzymujemy "[false]"+"undefined" = "falseundefined"
[+[]] - [0]
!+[] - !0 -> true
+true - unarne dodawanie -> konwersja ToNumber, true -> 1
1+[0] - binarne dodawanie -> konwersja w String, "1"+"0" = "10"
"falseundefined"[10] -> "i"

(![]+[])[!+[]+!+[]] wypisuje "l"
(![]+[]) - to samo co wcześniej -> "false"
true+true - binarne dodawanie -> konwersja ToNumber, 1 + 1 = 2
"false"[2] -> "l"
*/