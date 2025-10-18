/*
    
                                              Javascript Rules

Javascript proqramlaşdırma dili - dinamik, zəif tiplənmiş və çoxparadigmalı bir proqramlaşdırma dilidir. 
O, əsasən veb inkişafında istifadə olunur, lakin server tərəfi proqramlaşdırma, oyun inkişafı və mobil tətbiqetmələr
 kimi digər sahələrdə də geniş istifadə olunur.


                                          
                                            Variables

JavaScript-də dəyişənlər məlumatları saxlamaq üçün istifadə olunur. Dəyişənləri yaratmaq üçün 
var, let, const, undefined, number, string, boolean, object və s. kimi açar sözlərdən istifadə olunur.
1. var: Dəyişənləri yaratmaq üçün istifadə olunur. Funksiya səviyyəsində skop var.
2. let: Blok səviyyəsində skop ilə dəyişənləri yaratmaq üçün istifadə olunur.
3. const: Dəyişməz dəyişənləri yaratmaq üçün istifadə olunur.
4. undefined: Dəyişənin təyin olunmadığını göstərir.
5. null: Boş və ya bilinməyən dəyəri göstərir.
6. number: Rəqəmləri saxlamaq üçün istifadə olunur. Biz C++ və ya C# kimi digər proqramlaşdırma dillərindəki kimi int, float və s. tiplərini istifadə etmirik.
7. Burada sadəcə number tipi var və bu bütün nömrə tiplərini əhatə edir.
8. string: Mətn məlumatlarını saxlamaq üçün istifadə olunur.
9. boolean: true və false dəyərlərini saxlamaq üçün istifadə olunur.
10. object: Mürəkkəb məlumat strukturlarını saxlamaq üçün istifadə olunur.

Syntax:
var age = 25; // var istifadə edərək dəyişən yaratmaq
let name = "John"; // let istifadə edərək dəyişən yaratmaq
const pi = 3.14; // const istifadə edərək dəyişən yaratmaq
let isStudent = true; // boolean tipində dəyişən
let person = { // object tipində dəyişən
    firstName: "Jane",
    lastName: "Doe"
};
const undef; // undefined tipində dəyişən
let emptyValue = null; // null tipində dəyişən
const names = ["Alice", "Bob", "Charlie"]; // array tipində dəyişən
const bigNumber = 9007199254740991n; // bigint tipində dəyişən
const mixedArray = [1, "two", true, null, { key: "value" }]; // mixed array
console.log(); // Konsola məlumat çıxarmaq üçün istifadə olunur

                                                                                    Functions

Funksiyalar müəyyən bir tapşırığı yerinə yetirmək üçün istifadə olunan kod bloklarıdır.
Funksiyalar təkrar istifadə edilə bilən kod parçaları yaratmağa imkan verir və proqramın strukturunu yaxşılaşdırır.
Syntax:

Standart Funksiya Yaratma:
1. function greet(name) {
    return "Hello, " + name + "!";
}// Bu funksiya istifadəçinin adını qəbul edir və salam mesajı qaytarır.
greet("Huseyn"); // "Hello, Huseyn!" qaytarır.

Arrow function və ya Callback Funksiya Yaratma: 
2. const greet=(name) => {
    return "Hello, " + name + "!";
} // Bu funksiya istifadəçinin adını qəbul edir və salam mesajı qaytarır.

Standart function ilə arrow function arasındakı fərq hoistingdir.
Yəni standart function-lar funksiyanın elan edilməsindən əvvəl çağırıla bilər, amma callback function-lar çağırıla bilməz.



                                                                                        Operators

Operatorlar dəyişənlər və dəyərlər üzərində əməliyyatlar aparmaq üçün istifadə olunur.
1 Comparison Operators (Müqayisə Operatorları):
    - == : Bərabərdir
    - === : Tip və dəyər baxımından bərabərdir
    - != : Bərabər deyil
    - !== : Tip və dəyər baxımından bərabər deyil
    - > : Böyükdür
    - < : Kiçikdir
    - >= : Böyük və ya bərabərdir
    - <= : Kiçik və ya bərabərdir

2 Logical Operators (Loqik Operatorlar):
    - && : Və (AND)
    - || : Və ya (OR)
    - ! : Deyil (NOT)

3 Arithmetic Operators (Aritmetik Operatorlar):
    - + : Toplama
    - - : Çıxma
    - * : Vurma
    - / : Bölmə
    - % : Qalıq tapma
    - ++ : İnkrement (1 artırma)
    - -- : Dekrement (1 azaltma)

4 Assignment Operators (Təyinat Operatorları):
    - = : Təyinat
    - += : Toplama və təyinat
    - -= : Çıxma və təyinat
    - *= : Vurma və təyinat
    - /= : Bölmə və təyinat
    - %= : Qalıq tapma və təyinat

5 Bitwise Operators (Bitwise Operatorlar):
    - & : Bitwise AND
    - | : Bitwise OR
    - ^ : Bitwise XOR
    - ~ : Bitwise NOT
    - << : Sola sürüşdürmə
    - >> : Sağa sürüşdürmə
    - >>> : Sıfırla sağa sürüşdürmə

6. Control structures (Nəzarət strukturları):
    - if, else if, else: Şərtlərə əsaslanan kod bloklarını icra etmək üçün istifadə olunur.
    - switch: Bir dəyişənin dəyərinə əsaslanan çoxsaylı şərtləri yoxlamaq üçün istifadə olunur.
    - for: Müəyyən sayda təkrar edən döngü yaratmaq üçün istifadə olunur.
    - while: Şərt doğru olduğu müddətcə təkrar edən döngü yaratmaq üçün istifadə olunur.
    - do...while: Ən azı bir dəfə icra olunan və sonra şərtə əsaslanan döngü yaratmaq üçün istifadə olunur.

Ternary Operator:
    - condition ? expr1 : expr2 : Şərtə əsaslanan ifadə yaratmaq üçün istifadə olunur. Əgər şərt doğru olarsa, expr1 icra olunur, əks halda expr2 icra olunur.

Map:
    - array.map(variable=>{expression}) : Array-in hər bir elementi üzərində müəyyən əməliyyat aparmaq üçün istifadə olunur və yeni array qaytarır.

    ` ` - Dəyişənləri və ifadələri daxil etmək üçün istifadə olunur (Template Literals).



*/