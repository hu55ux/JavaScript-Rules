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




                                                                    Arrays & Array Methods

JavaScript-də array-lər məlumatların siyahısını saxlamaq üçün istifadə olunur.
Array-lər müxtəlif növ məlumatları, o cümlədən ədədləri, mətnləri, obyektləri və digər array-ləri saxlaya bilər.
Syntax:
const fruits = ["Apple", "Banana", "Cherry"]; // Array yaratmaq
accessing array element: fruits[0]; // index vasitəsilə array elementinə daxil olmaq

Basic Array Methods:
1. .length: Array-in uzunluğunu qaytarır.
2. .toString(): Array-i mətn formatına çevirir.
3. .at(index): Array-də müəyyən indeksdəki elementi qaytarır.
4. .join(separator): Array elementlərini müəyyən ayrıcı ilə birləşdirir.
5. .pop(): Array-in son elementini silir və qaytarır.
6. .push(element): Array-in sonuna yeni element əlavə edir.
7. .shift(): Array-in ilk elementini silir və qaytarır.
8. .unshift(element): Array-in əvvəlinə yeni element əlavə edir.
9. .delete index: Array-də müəyyən indeksdəki elementi silir.
10. .concat(array): İki və ya daha çox array-i birləşdirir.
11. .copyWithin(target, start, end): Array-in müəyyən hissəsini başqa yerə kopyalayır. target - kopyalanacaq yerin indeksi, 
start - kopyalanacaq hissənin başlanğıc indeksi, end - kopyalanacaq hissənin son indeksi (son indeks daxil deyil).
Yəni array.copyWithin(0, 3, 5) deyəndə array-in 3-cü indeksdən 5-ci indeksə qədər olan hissəsi (5-ci indeks daxil deyil) 0-cı indekse kopyalanır.
12. .flat(depth): Daxili array-ləri müəyyən dərinlikdə düzləşdirir. depth - düzləşdirmə dərinliyi (default 1). Yəni array.flat(2) deyəndə array-dəki daxili array-lər 2 səviyyəyə qədər düzləşdirilir.
düzləşdirmə - daxili array-lərin elementlərini əsas array-ə əlavə etmək deməkdir.
13. .slice(start, end): Array-in müəyyən hissəsini yeni array kimi qaytarır. start - başlanğıc indeksi, end - son indeks (son indeks daxil deyil).
14. .splice(start, deleteCount, item1, item2, ...): Array-də müəyyən yerdən elementləri silmək və ya əlavə etmək üçün istifadə olunur.
Yəni array.splice(2, 1, "Orange", "Grapes") deyəndə array-in 2-ci indeksindən başlayaraq 1 element silinir və yerinə "Orange" və "Grapes" əlavə olunur.
15. .toSpliced(start, deleteCount, item1, item2, ...): Array-də müəyyən yerdən elementləri silmək və ya əlavə etmək üçün istifadə olunur, amma orijinal array-i dəyişmir, yeni array qaytarır.

Searching Array Methods:
1. .indexOf(element): Array-də müəyyən elementin ilk indeksini qaytarır, əgər element tapılmazsa -1 qaytarır.
2. .lastIndexOf(element): Array-də müəyyən elementin sonuncu indeksini qaytarır, əgər element tapılmazsa -1 qaytarır.
3. .includes(element): Array-də müəyyən elementin olub-olmadığını yoxlayır və boolean dəyər qaytarır.
4. .find(callback): Array-də müəyyən şərtə uyğun ilk elementi qaytarır.
5. .findIndex(callback): Array-də müəyyən şərtə uyğun ilk elementin indeksini qaytarır.
6. .findLast(callback): Array-də müəyyən şərtə uyğun sonuncu elementi qaytarır.
7. .findLastIndex(callback): Array-də müəyyən şərtə uyğun sonuncu elementin indeksini qaytarır.

Sorting Array Methods:
1. .sort(): Array elementlərini əlifba sırasına və ya ədədi sıralamaya görə düzür.
2. .reverse(): Array elementlərinin sırasını tərsinə çevirir.
3. .toSorted(compareFunction): Array elementlərini müəyyən müqayisə funksiyasına əsasən düzür və yeni array qaytarır.
4. .toReversed(): Array elementlərinin sırasını tərsinə çevirir və yeni array qaytarır.
reverse methodunda orijinal array dəyişir, amma toReversed methodunda orijinal array dəyişmir, yeni array qaytarır.
.sort methodunda orijinal array dəyişir, amma toSorted methodunda orijinal array dəyişmir, yeni array qaytarır.
5. Math.min(...array): Array-dəki ən kiçik ədədi qaytarır.
6. Math.max(...array): Array-dəki ən böyük ədədi qaytarır.

Iteration Array Methods:
1. .forEach(callback): Array-in hər bir elementi üzərində müəyyən əməliyyat aparmaq üçün istifadə olunur.
2. .map(callback): Array-in hər bir elementi üzərində müəyyən əməliyyat aparmaq üçün istifadə olunur və yeni array qaytarır.
3. .flatMap(callback): Array-in hər bir elementi üzərində müəyyən əməliyyat aparır, nəticələri düzləşdirir və yeni array qaytarır.
4. .filter(callback): Array-də müəyyən şərtə uyğun elementləri seçir və yeni array qaytarır.
5. .reduce(callback, initialValue): Array elementlərini tək bir dəyərə endirir.
6. .reduceRight(callback, initialValue): Array elementlərini sağdan sola tək bir dəyərə endirir.
7. .every(callback): Bütün elementlərin müəyyən şərtə uyğun olub-olmadığını yoxlayır və boolean dəyər qaytarır.
8. .some(callback): Hər hansı bir elementin müəyyən şərtə uyğun olub-olmadığını yoxlayır və boolean dəyər qaytarır.
9. .from(arrayLike, mapFunction, thisValue): Array-yaratmaq üçün istifadə olunur. Yəni Array.from("Hello") deyəndə ['H', 'e', 'l', 'l', 'o'] qaytarır.
10. .keys(): Array-in indekslərini qaytarır.
11. .entries(): Array-in indeks və dəyər cütlüklərini qaytarır.
12. .with(index, value): Array-də müəyyən indeksi yeni dəyər ilə əvəz edir və yeni array qaytarır.
13. .Spread Operator (...): Array elementlərini ayrı-ayrı dəyərlər kimi çıxarmaq üçün istifadə olunur. Məsələn, Math.max(...array) deyəndə array-dəki bütün ədədləri ayrı-ayrı arqumentlər kimi Math.max funksiyasına ötürürük.
14. .Rest Operator (...): Funksiyaya naməlum sayda arqument ötürmək üçün istifadə olunur. Məsələn, function sum(...numbers) deyəndə funksiyaya istənilən sayda ədəd ötürə bilərik və onlar numbers array-i kimi qəbul olunur.  



*/