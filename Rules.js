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



                                                                                    String Methods

JavaScript-də string-lər mətn məlumatlarını saxlamaq üçün istifadə olunur. Bu methodlar string-lərlə işləmək üçün müxtəlif funksiyalar təqdim edir.

1. .length: String-in uzunluğunu qaytarır.
2. .charAt(index): String-də müəyyən indeksdəki simvolu qaytarır.
3. .charCodeAt(index): String-də müəyyən indeksdəki simvolun Unicode dəyərini qaytarır.
4. .codePointAt(index): String-də müəyyən indeksdəki simvolun Unicode kod nöqtəsini qaytarır.
5. .concat(string2, string3, ...): İki və ya daha çox string-i birləşdirir.
6. .at(index): String-də müəyyən indeksdəki simvolu qaytarır.
7. [.]: String-də müəyyən indeksdəki simvola daxil olmaq üçün istifadə olunur.
8. .slice(start, end): String-in müəyyən hissəsini qaytarır.
9. .substring(start, end): String-in müəyyən hissəsini qaytarır.
10. .substr(start, length): String-in müəyyən hissəsini qaytarır. substring methodu ilə oxşardır, amma burada son parametr uzunluqdur, son indeks deyil.
11. .toUpperCase(): String-i böyük hərflərə çevirir.
12. .toLowerCase(): String-i kiçik hərflərə çevirir.
14. .toWellFormed(): String-i düzgün formada (title case) çevirir.
15. .trim(): String-in əvvəlindəki və sonundakı boşluqları silir.
16. .trimStart(): String-in əvvəlindəki boşluqları silir.
17. .trimEnd(): String-in sonundakı boşluqları silir.
18. .padStart(targetLength, padString): String-in əvvəlinə müəyyən uzunluğa çatmaq üçün əlavə simvollar əlavə edir.
19. .padEnd(targetLength, padString): String-in sonuna müəyyən uzunluğa çatmaq üçün əlavə simvollar əlavə edir.
20. .repeat(count): String-i müəyyən sayda təkrar edir.
21. .replace(searchValue, replaceValue): String-də müəyyən simvol və ya simvolları başqa simvol və ya simvollarla əvəz edir.
22. .replaceAll(searchValue, replaceValue): String-də müəyyən simvol və ya simvolların bütün hallarını başqa simvol və ya simvollarla əvəz edir.
23. .split(separator, limit): String-i müəyyən ayrıcı ilə bölür və yeni array qaytarır.



                                                                                Number methods
Number methods - Number methodları bu tipdə olan datalarla rahat işləmək üçün istifadə olunan methodlardır.İndi gəlin bu methodlarla tanış olaq.
1. .toFixed(parameter) - 
2. .toString() - 
3. .parseInt() - 
4. .parseFloat() - 
5. .Math.some methods - 
5.1. Math.round(number) - 
5.2. Math.ceil(number) - 
5.3. Math.floor(number) - 
const colors = ["H","U","S","U","N"];
5.4. Math.random - colors[(Math.floor(Math.random() * colors.length))]



                                                                                    Methods in Object

const person = {
  name: "Huseyn",
  lastName: "Huseynzade",
  greet: function () {
    console.log("Hello" + " " + this.name + " " + this.lastName + " .");
  },
};

person.greet();


                                                                                        DOM (Document Object Model)

Document Object Model (DOM) - veb səhifələrin strukturunu və məzmununu JavaScript vasitəsilə idarə etməyə imkan verən proqramlaşdırma interfeysidir. 
Bunun üçün biz ilk öncə HTML elementlərini seçməliyik və sonra onlarla işləyə bilərik.
Seçmə metodları:
1. document.getElementById(id) - ID-yə əsasən elementi seçir. Məsələn, document.getElementById("header") deyəndə ID-si "header" olan elementi seçir.
2. document.getElementsByClassName(className) - Sinfə əsasən elementləri seçir. Məsələn, document.getElementsByClassName("item") deyəndə sinfi "item" olan bütün elementləri seçir.
3. document.getElementsByTagName(tagName) - Tag adına əsasən elementləri seçir. Məsələn, document.getElementsByTagName("p") deyəndə bütün <p> elementlərini seçir.

indi gəlin elementləri seçdikdən sonra onlarla necə işləyə biləcəyimizi öyrənək.
const header = document.getElementById("header");
header.style.color = "blue"; // Elementin rəngini dəyişir
header.innerHTML = "Yeni Başlıq"; // Elementin məzmununu dəyişir
header.addEventListener("click", function() {
  alert("Başlıq kliklənildi!"); // Elementə klik hadisəsi əlavə edir
});
header.classList.add("active"); // Elementə yeni sinif əlavə edir
header.classList.remove("active"); // Elementdən sinif silir
header.innertext = "Salam Dünya"; // Elementin mətn məzmununu dəyişir


Məsələn bizim bir arrayımız var və bu array daxilində olan elementləri sıra ilə h1 tag-ləri içində HTML sənədinə əlavə etmək istəyirik.
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  const h1 = document.createElement("h1"); // Yeni h1 elementi yaradılır
  h1.innerText = fruit; // h1 elementinin mətn məzmunu təyin edilir
  document.body.append(h1); // h1 elementi sənədin bədəninə əlavə edilir
});
bu kod fruits array-indəki hər bir meyvə üçün yeni bir h1 elementi yaradacaq və onu HTML sənədinə əlavə edəcək.

header.classlist.toggle("active") - Elementdə sinif varsa silir, yoxdursa əlavə edir. buna misal olaraq dark mode light mode keçidini göstərmək olar.
body.classlist.toggle("dark-mode")
body.classlist.toggle.contains("dark-mode")? body.style.backgroundColor="black": body.style.backgroundColor="white"


                                                                    Event loop
JavaScript-də Event Loop - asinxron əməliyyatların idarə olunması üçün istifadə olunan mexanizmdir.
Sinxron kodlar və Asinxron kodlar
Sinxron kodlar Call Stack-də ardıcıl şəkildə icra olunur, yəni bir əməliyyat bitmədən növbəti əməliyyat başlamır. Və bu processlər bloklanmaya səbəb ola bilər. Bu processlər bitdikdən sonra isə Call stack boşalır.
Bu kodlara misal olaraq:
console.log("Start");
setTimeout(() => {
  console.log("This is asynchronous code");
}, 2000);
console.log("End");
Bu kodda "Start" və "End" mesajları dərhal konsola çıxarılır, amma "This is asynchronous code" mesajı 2 saniyə sonra çıxarılır. Bu, setTimeout funksiyasının asinxron olduğunu göstərir.

Asinxron kodlar isə Web APIs-də işlənir və Call Stack-i bloklamır. Asinxron əməliyyatlar tamamlandıqda, onların callback funksiyaları Callback Queue-yə əlavə olunur.
Event Loop isə Call Stack-in boş olub-olmadığını yoxlayır. Əgər Call Stack boşdursa, Event Loop Callback Queue-dən növbəti callback funksiyasını götürür və 
onu Call Stack-ə əlavə edir ki, icra olunsun. Bu proses davam edir və beləliklə, asinxron əməliyyatlar effektiv şəkildə idarə olunur.
Bu kodlara misal olaraq:
click event-ləri, setTimeout, fetch API çağırışları və s. göstərmək olar.

Nəticə olaraq 
Call stack gözləmə lazım olmayan yəni sinxron kodlar üçün istifadə olunur.
Web APIs isə gözləmə lazım olan yəni asinxron kodlar üçün istifadə olunur.
Callback Queue isə asinxron əməliyyatların tamamlandıqdan sonra icra olunacaq funksiyaların növbəsini saxlayır.

Gözləmə lazım olan kodların Web API-da işləmə səbəbi JavaScript-in tək iplikli (single-threaded) olmasıdır.
Gəlin bu mövzunu bir misal ilə izah edək:
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3); 

Burada code 1 və 3 dərhal konsola çıxarılır, amma 2 mesajı setTimeout vasitəsilə asinxron şəkildə işlənir. 
Gözləmə müddəti 0 olsa da, setTimeout funksiyası Web API-da işlənir və onun callback funksiyası Callback Queue-yə əlavə olunur.



                                                                    Data Fetching
Data Fetching - veb tətbiqlərində serverdən məlumatları əldə etmək üçün istifadə olunan prosesdir. Bu iş üçün hazır fetch methodundan istifadə olunur.
Syntax:
const userData = async () => {
  // async function yaradılır
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch methodu serverə sorğu göndərir və cavabı gözləyir
    const data = await response.json(); // cavabı JSON formatında oxuyur
  } catch (error) {
    // səhv baş verərsə, onu tutub konsola çıxarır
    console.log("Error:", error); // səhv mesajını konsola çıxarır
  }
  return data;
};

const renderUsers = async () => {
  const users = await userData();
  const userList = document.getElementById("user-list");
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
};

async function getuserData() {
  // async function yaradılır
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // fetch methodu serverə sorğu göndərir və cavabı gözləyir
    const data = await response.json(); // cavabı JSON formatında oxuyur
    console.log(data); // məlumatları konsola çıxarır
  } catch (error) {
    // səhv baş verərsə, onu tutub konsola çıxarır
    console.error("Error:", error); // səhv mesajını konsola çıxarır
  }
}

const data = userData();




                                                        Fetch API

Fetch API - veb brauzerlərdə serverdən məlumatları asinxron şəkildə əldə etmək üçün istifadə olunan müasir bir interfeysdir.


const registernameInput = document.getElementById("register-name");
const registerlastnameInput = document.getElementById("register-lastname");
const registeremailInput = document.getElementById("register-email");
const registerpasswordInput = document.getElementById("register-password");
const registerbtn = document.getElementById("register-btn");

const registerUser = async () => {
  try {
    const response = await fetch("https://ilkinibadov.com/api/v1/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        firstname: registernameInput.value,
        lastname: registerlastnameInput.value,
        email: registeremailInput.value,
        password: registerpasswordInput.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {*    console.error("Error:", error);
  }
};

registerbtn.addEventListener("click", registerUser);


JavaScriptdə səhifə fəyişmə methodu var ki bunu da bu cüt istifadaə edə bilərik:
if(response.ok){
    // Səhifə dəyişmə
    window.location.href = "welcome.html";
} else {
    // Xəta mesajı göstərmə
    alert("Registration failed. Please try again.");
}




                                                                    Local Storage & Cookies


Local Storage - Veb brauzerlərdə məlumatları istifadəçinin kompüterində saxlayan bir yaddaş sahəsidir. Burada datalar key-value (açar-dəyər) cütlükləri şəklində saxlanılır və brauzer bağlansa belə məlumatlar itmir.
Local Storage sadəcə 10MB yaddaş sahəsi təklif edir və məlumatlar yalnız eyni domen daxilində əldə edilə bilər.

Session Storage - Veb brauzerlərdə məlumatları istifadəçinin kompüterində saxlayan bir yaddaş sahəsidir. Burada datalar key-value (açar-dəyər) cütlükləri şəklində saxlanılır və brauzer bağlandıqda məlumatlar silinir.
Burada data sadəcə səhifə sessiyası müddətində saxlanılır və brauzer bağlandıqda məlumatlar itir.

Cookies - Veb brauzerlərdə kiçik məlumat parçalarını istifadəçinin kompüterində saxlayan bir yaddaş mexanizmidir.
Cookies server və müştəri arasında məlumat mübadiləsi üçün istifadə olunur və məlumatlar müəyyən müddətə qədər saxlanıla bilər. Və bu müddəti biz təyin edə bilərik.

Local Storage istifadə qaydası:
// Məlumat saxlamaq
1. Local storage-də məlumat yazılan zaman bu datalar mütləq string formatında saxlanılmalıdır.
localStorage.setItem("key", "value"); // Məlumat saxlamaq
// Məlumat oxumaq
const value = localStorage.getItem("key"); // Məlumat oxumaq
// Məlumat silmək
localStorage.removeItem("key"); // Məlumat silmək
// Bütün məlumatları silmək
localStorage.clear(); // Bütün məlumatları silmək
Bəzən ola bilər ki biz fərqli type olan dataları yazaq və ya oxumaq istəyəq. Məsələn, array və ya object. Bu zaman biz JSON.stringify() və JSON.parse() methodlarından istifadə edirik.
// Məlumat saxlamaq (boolean, number, object, array)
const user = {
  name: "John",
  age: 30,
};
localStorage.setItem("user", JSON.stringify(user)); // Məlumat saxlamaq
// Məlumat oxumaq (boolean, number, object, array)
const userData = JSON.parse(localStorage.getItem("user")); // Məlumat oxumaq




2. Cookies istifadə qaydası:
// Məlumat saxlamaq
document.cookie = "username=John Doe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"; // Məlumat saxlamaq
// Məlumat oxumaq
const cookies = document.cookie; // Məlumat oxumaq
// Məlumat silmək
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Məlumat silmək


                                                                          Classes in JavaScript

Class - obyekt yönümlü proqramlaşdırmada istifadə olunan bir konseptdir və JavaScript-də ES6 (ECMAScript 2015) versiyasından etibarən mövcuddur.
Class-lar obyektlərin şablonlarını yaratmaq üçün istifadə olunur və onlar vasitəsilə oxşar xüsusiyyətlərə və metodlara malik obyektlər yaradıla bilər.
syntax:
class Person {
  constructor(name, age) {
    this.name = name; // Obyektin name xüsusiyyəti
    this.age = age;   // Obyektin age xüsusiyyəti
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new Person("Alice", 30); // Yeni obyekt yaradılır

person1.greet(); // Metod çağırılır

Indi gəlin inheritance (miras alma) nümunəsinə baxaq:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Parent class-in constructor-unu çağırır
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Metod çağırılır


Encapsulation (qapsulasiya) nümunəsi:
class BankAccount {
  #balance; // Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}
const myAccount = new BankAccount(1000);
myAccount.deposit(500); // Deposited: $500
myAccount.withdraw(200); // Withdrew: $200
console.log(`Current Balance: $${myAccount.getBalance()}`); // Current Balance: $1300










*/
